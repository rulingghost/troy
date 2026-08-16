import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { defaultContent } from '../data/defaultContent';

const ContentContext = createContext(null);
const LOCAL_STORAGE_KEY = 'alx_site_content_cache';

export const ContentProvider = ({ children }) => {
  // Initialize with localStorage cache or default static content
  const [content, setContent] = useState(() => {
    try {
      const cached = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (cached) {
        return JSON.parse(cached);
      }
    } catch (e) {
      console.warn('Could not read from localStorage:', e);
    }
    return defaultContent;
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState({ type: 'idle', message: '' });

  // Fetch content from Vercel KV via API
  const fetchContent = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/get-content');
      const contentType = res.headers.get('content-type');
      if (res.ok && contentType && contentType.includes('application/json')) {
        const json = await res.json();
        if (json.success && json.data) {
          // Deep merge with defaultContent to guarantee newly added schema fields are present
          const incomingPages = json.data.pages || {};
          const merged = {
            ...defaultContent,
            ...json.data,
            general: { ...defaultContent.general, ...(json.data.general || {}) },
            about: { ...defaultContent.about, ...(json.data.about || {}) },
            contact: { ...defaultContent.contact, ...(json.data.contact || {}) },
            hero: { ...defaultContent.hero, ...(json.data.hero || {}) },
            services: { ...defaultContent.services, ...(json.data.services || {}) },
            journey: { ...defaultContent.journey, ...(json.data.journey || {}) },
            testimonials: { ...defaultContent.testimonials, ...(json.data.testimonials || {}) },
            references: { ...defaultContent.references, ...(json.data.references || {}) },
            security: { ...defaultContent.security, ...(json.data.security || {}) },
            menus: json.data.menus && json.data.menus.length > 0 ? json.data.menus : defaultContent.menus,
            pages: {
              corporate: {
                about: { ...defaultContent.pages.corporate.about, ...(incomingPages.corporate?.about || {}) },
                vision: { ...defaultContent.pages.corporate.vision, ...(incomingPages.corporate?.vision || {}) },
                mission: { ...defaultContent.pages.corporate.mission, ...(incomingPages.corporate?.mission || {}) },
              },
              categoryOverviews: {
                ...defaultContent.pages.categoryOverviews,
                ...(incomingPages.categoryOverviews || {})
              },
              contactPage: {
                ...defaultContent.pages.contactPage,
                ...(incomingPages.contactPage || {})
              },
              subServicesData: {
                congressEvents: incomingPages.subServicesData?.congressEvents || defaultContent.pages.subServicesData.congressEvents,
                destinations: {
                  yurtici: incomingPages.subServicesData?.destinations?.yurtici || defaultContent.pages.subServicesData.destinations.yurtici,
                  yurtdisi: incomingPages.subServicesData?.destinations?.yurtdisi || defaultContent.pages.subServicesData.destinations.yurtdisi
                },
                preceptorship: {
                  yurtici: incomingPages.subServicesData?.preceptorship?.yurtici || defaultContent.pages.subServicesData.preceptorship.yurtici,
                  yurtdisi: incomingPages.subServicesData?.preceptorship?.yurtdisi || defaultContent.pages.subServicesData.preceptorship.yurtdisi
                },
                partnerPlatforms: {
                  'alx-digi': incomingPages.subServicesData?.partnerPlatforms?.['alx-digi'] || defaultContent.pages.subServicesData.partnerPlatforms['alx-digi'],
                  'alx-need': incomingPages.subServicesData?.partnerPlatforms?.['alx-need'] || defaultContent.pages.subServicesData.partnerPlatforms['alx-need']
                },
                courses: incomingPages.subServicesData?.courses || defaultContent.pages.subServicesData.courses,
                incentive: incomingPages.subServicesData?.incentive || defaultContent.pages.subServicesData.incentive
              }
            }
          };
          setContent(merged);

          try {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(merged));
          } catch (e) {
            // ignore quota errors
          }
        }
      }

    } catch (err) {
      console.warn('Failed to fetch remote content, using local fallback:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  // Update a specific section in local memory
  const updateSection = useCallback((sectionKey, data) => {
    setContent((prev) => ({
      ...prev,
      [sectionKey]: data
    }));
  }, []);

  // Update whole content in local memory
  const updateContent = useCallback((newContent) => {
    setContent(newContent);
  }, []);

  // Save to Vercel KV
  const saveContent = useCallback(async (contentToSave = null) => {
    const dataToSave = contentToSave || content;
    setIsSaving(true);
    setSaveStatus({ type: 'saving', message: 'Değişiklikler kaydediliyor...' });

    try {
      // Always persist in local storage cache
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataToSave));
      } catch (e) {
        console.warn('localStorage error:', e);
      }

      const res = await fetch('/api/save-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: dataToSave })
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setSaveStatus({ type: 'success', message: 'Değişiklikler veritabanına başarıyla kaydedildi!' });
        setContent(dataToSave);
        setTimeout(() => setSaveStatus({ type: 'idle', message: '' }), 4000);
        return { success: true };
      } else {
        const errorMsg = result.error || 'Kaydetme sırasında bir hata oluştu.';
        setSaveStatus({ 
          type: 'warning', 
          message: `Yerel önbelleğe kaydedildi. Veritabanı: ${errorMsg}` 
        });
        setTimeout(() => setSaveStatus({ type: 'idle', message: '' }), 6000);
        return { success: false, error: errorMsg };
      }
    } catch (err) {
      console.error('Save error:', err);
      setSaveStatus({ 
        type: 'warning', 
        message: 'Yerel önbelleğe kaydedildi. (Veritabanı API bağlantısı bekleniyor)' 
      });
      setTimeout(() => setSaveStatus({ type: 'idle', message: '' }), 6000);
      return { success: false, error: err.message };
    } finally {
      setIsSaving(false);
    }
  }, [content]);

  // Upload an image file to Vercel Blob
  const uploadImageFile = useCallback(async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const fileData = reader.result;
          const res = await fetch('/api/upload-image', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              filename: file.name,
              fileData,
              contentType: file.type || 'image/jpeg'
            })
          });

          const json = await res.json();
          if (json.success && json.url) {
            resolve(json.url);
          } else {
            // If upload fails, fallback to local data URL so the user can continue testing
            console.warn('Upload API failed, using data URI fallback:', json.error);
            resolve(fileData);
          }
        } catch (error) {
          console.warn('Network upload error, fallback to data URI:', error);
          resolve(reader.result);
        }
      };
      reader.onerror = (err) => reject(err);
      reader.readAsDataURL(file);
    });
  }, []);

  // Reset to default
  const resetToDefaults = useCallback(async () => {
    setContent(defaultContent);
    await saveContent(defaultContent);
  }, [saveContent]);

  // Export JSON backup
  const exportContentJson = useCallback(() => {
    const jsonStr = JSON.stringify(content, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `alx-content-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [content]);

  // Import JSON backup
  const importContentJson = useCallback(async (jsonString) => {
    try {
      const parsed = JSON.parse(jsonString);
      if (!parsed || typeof parsed !== 'object') {
        throw new Error('Geçersiz JSON formatı.');
      }
      setContent(parsed);
      const res = await saveContent(parsed);
      return res;
    } catch (e) {
      console.error('Import error:', e);
      throw e;
    }
  }, [saveContent]);

  return (
    <ContentContext.Provider
      value={{
        content,
        isLoading,
        isSaving,
        saveStatus,
        updateSection,
        updateContent,
        saveContent,
        uploadImageFile,
        resetToDefaults,
        exportContentJson,
        importContentJson,
        refreshContent: fetchContent
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
