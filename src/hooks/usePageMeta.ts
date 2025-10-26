import { useEffect } from "react";

export function usePageMeta(title: string, iconUrl?: string) {
  useEffect(() => {
    const originalTitle = document.title;
    const originalFavicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]')?.href;

    document.title = title;

    if (iconUrl) {
      let favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
      if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        document.head.appendChild(favicon);
      }
      favicon.href = iconUrl;
    }
    
    return () => {
      document.title = originalTitle;
      if (iconUrl && originalFavicon) {
        const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
        if (favicon) favicon.href = originalFavicon;
      }
    };
  }, [title, iconUrl]);
}