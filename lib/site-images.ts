/**
 * Default images (Unsplash) until you add files under /public/images/.
 * To use local files, replace URLs with paths like "/images/hero.jpg".
 */
export const siteImages = {
  hero: "https://images.unsplash.com/photo-1622286342621-4bd786c244da?auto=format&fit=crop&w=1200&q=80",
  fade: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
  dreadlocks: "https://images.unsplash.com/photo-1605497788041-6a3a7a4fb0a8?auto=format&fit=crop&w=1200&q=80",
  facial: "https://images.unsplash.com/photo-1522337360788-8b13dee7a7fa?auto=format&fit=crop&w=1200&q=80",
  barber1: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=800&q=80",
  barber2: "https://images.unsplash.com/photo-1599351431206-1e0f0d0e8f0b?auto=format&fit=crop&w=800&q=80",
} as const;

export const galleryImages = [
  { src: siteImages.fade, alt: "Precision fade" },
  { src: siteImages.barber1, alt: "Barber at work" },
  { src: siteImages.barber2, alt: "Client styling" },
  { src: siteImages.dreadlocks, alt: "Dreadlocks styling" },
  { src: siteImages.hero, alt: "Shop atmosphere" },
  { src: siteImages.facial, alt: "Grooming detail" },
] as const;
