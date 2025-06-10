'use client';

import { useEffect } from 'react';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const badge = document.querySelector('div[data-next-badge="true"]');
      if (badge) {
        badge.remove();
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
