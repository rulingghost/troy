import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { defaultContent, defaultContentTR, defaultContentEN } from '../data/defaultContent';

const ContentContext = createContext(null);
const LOCAL_STORAGE_KEY = 'alx_site_content_cache';
const LANG_STORAGE_KEY = 'alx_site_lang';

// Deep merge helper ensuring both TR and EN datasets are fully populated
function deepMergeContent(remoteData) {
  if (!remoteData || typeof remoteData !== 'object') {
    return defaultContent;
  }

  const incomingPages = remoteData.pages || {};
  const incomingEn = remoteData.en || {};
  const incomingEnPages = incomingEn.pages || {};

  return {
    ...defaultContentTR,
    ...remoteData,
    general: { 
      ...defaultContentTR.general, 
      ...(remoteData.general || {}),
      floatingButtons: {
        ...defaultContentTR.general.floatingButtons,
        ...(remoteData.general?.floatingButtons || {})
      }
    },
    seo: {
      ...defaultContentTR.seo,
      ...(remoteData.seo || {})
    },
    about: { ...defaultContentTR.about, ...(remoteData.about || {}) },
    contact: { ...defaultContentTR.contact, ...(remoteData.contact || {}) },
    hero: { ...defaultContentTR.hero, ...(remoteData.hero || {}) },
    services: { ...defaultContentTR.services, ...(remoteData.services || {}) },
    journey: { ...defaultContentTR.journey, ...(remoteData.journey || {}) },
    testimonials: { ...defaultContentTR.testimonials, ...(remoteData.testimonials || {}) },
    references: { ...defaultContentTR.references, ...(remoteData.references || {}) },
    security: { ...defaultContentTR.security, ...(remoteData.security || {}) },
    menus: remoteData.menus && remoteData.menus.length > 0 ? remoteData.menus : defaultContentTR.menus,
    pages: {
      corporate: {
        about: { ...defaultContentTR.pages.corporate.about, ...(incomingPages.corporate?.about || {}) },
        vision: { ...defaultContentTR.pages.corporate.vision, ...(incomingPages.corporate?.vision || {}) },
        mission: { ...defaultContentTR.pages.corporate.mission, ...(incomingPages.corporate?.mission || {}) },
      },
      categoryOverviews: {
        ...defaultContentTR.pages.categoryOverviews,
        ...(incomingPages.categoryOverviews || {})
      },
      contactPage: {
        ...defaultContentTR.pages.contactPage,
        ...(incomingPages.contactPage || {})
      },
      subServicesData: {
        congressEvents: incomingPages.subServicesData?.congressEvents || defaultContentTR.pages.subServicesData.congressEvents,
        destinations: {
          yurtici: incomingPages.subServicesData?.destinations?.yurtici || defaultContentTR.pages.subServicesData.destinations.yurtici,
          yurtdisi: incomingPages.subServicesData?.destinations?.yurtdisi || defaultContentTR.pages.subServicesData.destinations.yurtdisi
        },
        preceptorship: {
          yurtici: incomingPages.subServicesData?.preceptorship?.yurtici || defaultContentTR.pages.subServicesData.preceptorship.yurtici,
          yurtdisi: incomingPages.subServicesData?.preceptorship?.yurtdisi || defaultContentTR.pages.subServicesData.preceptorship.yurtdisi
        },
        partnerPlatforms: {
          'alx-digi': incomingPages.subServicesData?.partnerPlatforms?.['alx-digi'] || defaultContentTR.pages.subServicesData.partnerPlatforms['alx-digi'],
          'alx-need': incomingPages.subServicesData?.partnerPlatforms?.['alx-need'] || defaultContentTR.pages.subServicesData.partnerPlatforms['alx-need']
        },
        courses: incomingPages.subServicesData?.courses || defaultContentTR.pages.subServicesData.courses,
        incentive: incomingPages.subServicesData?.incentive || defaultContentTR.pages.subServicesData.incentive,
        corporateTravel: {
          guestServices: {
            ...defaultContentTR.pages.subServicesData.corporateTravel.guestServices,
            ...(incomingPages.subServicesData?.corporateTravel?.guestServices || {})
          },
          overseasTravel: {
            ...defaultContentTR.pages.subServicesData.corporateTravel.overseasTravel,
            ...(incomingPages.subServicesData?.corporateTravel?.overseasTravel || {})
          },
          domesticTravel: {
            ...defaultContentTR.pages.subServicesData.corporateTravel.domesticTravel,
            ...(incomingPages.subServicesData?.corporateTravel?.domesticTravel || {})
          }
        }
      },
      sidebarConfig: {
        ...defaultContentTR.pages.sidebarConfig,
        ...(incomingPages.sidebarConfig || {})
      },
      legalPages: {
        privacyPolicy: {
          ...defaultContentTR.pages.legalPages.privacyPolicy,
          ...(incomingPages.legalPages?.privacyPolicy || {})
        },
        termsOfService: {
          ...defaultContentTR.pages.legalPages.termsOfService,
          ...(incomingPages.legalPages?.termsOfService || {})
        },
        kvkk: {
          ...defaultContentTR.pages.legalPages.kvkk,
          ...(incomingPages.legalPages?.kvkk || {})
        }
      },
      orgFormConfig: {
        ...defaultContentTR.pages.orgFormConfig,
        ...(incomingPages.orgFormConfig || {}),
        orgTypes: incomingPages.orgFormConfig?.orgTypes || defaultContentTR.pages.orgFormConfig.orgTypes,
        servicesList: incomingPages.orgFormConfig?.servicesList || defaultContentTR.pages.orgFormConfig.servicesList
      }
    },
    // EN sub-tree deep merge
    en: {
      ...defaultContentEN,
      ...incomingEn,
      general: { 
        ...defaultContentEN.general, 
        ...(incomingEn.general || {}),
        floatingButtons: {
          ...defaultContentEN.general.floatingButtons,
          ...(incomingEn.general?.floatingButtons || {})
        }
      },
      seo: {
        ...defaultContentEN.seo,
        ...(incomingEn.seo || {})
      },
      about: { ...defaultContentEN.about, ...(incomingEn.about || {}) },
      contact: { ...defaultContentEN.contact, ...(incomingEn.contact || {}) },
      hero: { ...defaultContentEN.hero, ...(incomingEn.hero || {}) },
      services: { ...defaultContentEN.services, ...(incomingEn.services || {}) },
      journey: { ...defaultContentEN.journey, ...(incomingEn.journey || {}) },
      testimonials: { ...defaultContentEN.testimonials, ...(incomingEn.testimonials || {}) },
      references: { ...defaultContentEN.references, ...(incomingEn.references || {}) },
      menus: incomingEn.menus && incomingEn.menus.length > 0 ? incomingEn.menus : defaultContentEN.menus,
      pages: {
        corporate: {
          about: { ...defaultContentEN.pages.corporate.about, ...(incomingEnPages.corporate?.about || {}) },
          vision: { ...defaultContentEN.pages.corporate.vision, ...(incomingEnPages.corporate?.vision || {}) },
          mission: { ...defaultContentEN.pages.corporate.mission, ...(incomingEnPages.corporate?.mission || {}) },
        },
        categoryOverviews: {
          ...defaultContentEN.pages.categoryOverviews,
          ...(incomingEnPages.categoryOverviews || {})
        },
        contactPage: {
          ...defaultContentEN.pages.contactPage,
          ...(incomingEnPages.contactPage || {})
        },
        subServicesData: {
          congressEvents: incomingEnPages.subServicesData?.congressEvents || defaultContentEN.pages.subServicesData.congressEvents,
          destinations: {
            yurtici: incomingEnPages.subServicesData?.destinations?.yurtici || defaultContentEN.pages.subServicesData.destinations.yurtici,
            yurtdisi: incomingEnPages.subServicesData?.destinations?.yurtdisi || defaultContentEN.pages.subServicesData.destinations.yurtdisi
          },
          preceptorship: {
            yurtici: incomingEnPages.subServicesData?.preceptorship?.yurtici || defaultContentEN.pages.subServicesData.preceptorship.yurtici,
            yurtdisi: incomingEnPages.subServicesData?.preceptorship?.yurtdisi || defaultContentEN.pages.subServicesData.preceptorship.yurtdisi
          },
          partnerPlatforms: {
            'alx-digi': incomingEnPages.subServicesData?.partnerPlatforms?.['alx-digi'] || defaultContentEN.pages.subServicesData.partnerPlatforms['alx-digi'],
            'alx-need': incomingEnPages.subServicesData?.partnerPlatforms?.['alx-need'] || defaultContentEN.pages.subServicesData.partnerPlatforms['alx-need']
          },
          courses: incomingEnPages.subServicesData?.courses || defaultContentEN.pages.subServicesData.courses,
          incentive: incomingEnPages.subServicesData?.incentive || defaultContentEN.pages.subServicesData.incentive,
          corporateTravel: {
            guestServices: {
              ...defaultContentEN.pages.subServicesData.corporateTravel.guestServices,
              ...(incomingEnPages.subServicesData?.corporateTravel?.guestServices || {})
            },
            overseasTravel: {
              ...defaultContentEN.pages.subServicesData.corporateTravel.overseasTravel,
              ...(incomingEnPages.subServicesData?.corporateTravel?.overseasTravel || {})
            },
            domesticTravel: {
              ...defaultContentEN.pages.subServicesData.corporateTravel.domesticTravel,
              ...(incomingEnPages.subServicesData?.corporateTravel?.domesticTravel || {})
            }
          }
        },
        sidebarConfig: {
          ...defaultContentEN.pages.sidebarConfig,
          ...(incomingEnPages.sidebarConfig || {})
        },
        legalPages: {
          privacyPolicy: {
            ...defaultContentEN.pages.legalPages.privacyPolicy,
            ...(incomingEnPages.legalPages?.privacyPolicy || {})
          },
          termsOfService: {
            ...defaultContentEN.pages.legalPages.termsOfService,
            ...(incomingEnPages.legalPages?.termsOfService || {})
          },
          kvkk: {
            ...defaultContentEN.pages.legalPages.kvkk,
            ...(incomingEnPages.legalPages?.kvkk || {})
          }
        },
        orgFormConfig: {
          ...defaultContentEN.pages.orgFormConfig,
          ...(incomingEnPages.orgFormConfig || {}),
          orgTypes: incomingEnPages.orgFormConfig?.orgTypes || defaultContentEN.pages.orgFormConfig.orgTypes,
          servicesList: incomingEnPages.orgFormConfig?.servicesList || defaultContentEN.pages.orgFormConfig.servicesList
        }
      }
    }
  };
}

export const ContentProvider = ({ children }) => {
  // Language State ('TR' | 'EN')
  const [lang, setLangState] = useState(() => {
    try {
      return localStorage.getItem(LANG_STORAGE_KEY) || 'TR';
    } catch {
      return 'TR';
    }
  });

  const setLang = useCallback((newLang) => {
    const valid = newLang === 'EN' ? 'EN' : 'TR';
    setLangState(valid);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, valid);
    } catch (e) {
      console.warn('Could not save language choice to localStorage:', e);
    }
  }, []);

  // Initialize rawContent with cache or default
  const [rawContent, setRawContent] = useState(() => {
    try {
      const cached = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (cached) {
        return deepMergeContent(JSON.parse(cached));
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
          const merged = deepMergeContent(json.data);
          setRawContent(merged);
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

  // Dynamically resolve active content according to current language
  const content = lang === 'EN' ? (rawContent.en || defaultContentEN) : rawContent;

  // Update raw content directly (replaces full tree or specific language branch)
  const updateContent = useCallback((newLangContent, targetLang = null) => {
    setRawContent((prev) => {
      const currentTarget = targetLang || lang;
      if (currentTarget === 'EN') {
        return {
          ...prev,
          en: {
            ...(prev.en || defaultContentEN),
            ...newLangContent
          }
        };
      } else {
        // Turkish root content update, retaining en branch and security
        return {
          ...prev,
          ...newLangContent,
          en: prev.en || defaultContentEN,
          security: newLangContent.security || prev.security
        };
      }
    });
  }, [lang]);

  const updateRawContent = useCallback((fullContent) => {
    setRawContent(fullContent);
  }, []);

  // Save to Vercel KV
  const saveContent = useCallback(async (contentToSave = null) => {
    const dataToSave = contentToSave || rawContent;
    setIsSaving(true);
    setSaveStatus({ type: 'saving', message: 'Değişiklikler kaydediliyor...' });

    try {
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
        setRawContent(dataToSave);
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
  }, [rawContent]);

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
    setRawContent(defaultContent);
    await saveContent(defaultContent);
  }, [saveContent]);

  // Export JSON backup
  const exportContentJson = useCallback(() => {
    const jsonStr = JSON.stringify(rawContent, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `alx-content-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [rawContent]);

  // Import JSON backup
  const importContentJson = useCallback(async (jsonString) => {
    try {
      const parsed = JSON.parse(jsonString);
      if (!parsed || typeof parsed !== 'object') {
        throw new Error('Geçersiz JSON formatı.');
      }
      const merged = deepMergeContent(parsed);
      setRawContent(merged);
      const res = await saveContent(merged);
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
        rawContent,
        lang,
        setLang,
        isLoading,
        isSaving,
        saveStatus,
        updateContent,
        updateRawContent,
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
