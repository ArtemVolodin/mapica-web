"use client";

import { useLayoutEffect } from "react";

/**
 * Ensures the homepage opens at the top unless the URL has a hash (e.g. #contact).
 * Prevents browser scroll restoration from landing on the calendar section.
 */
export function ScrollManager() {
  useLayoutEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const hash = window.location.hash.slice(1);
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "auto", block: "start" });
      }
      return;
    }

    window.scrollTo(0, 0);
  }, []);

  return null;
}
