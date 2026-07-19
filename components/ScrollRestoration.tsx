"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);

    const timer2 = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, [pathname]);

  return null;
}
