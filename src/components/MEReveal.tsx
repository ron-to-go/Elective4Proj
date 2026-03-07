import { useEffect, type RefObject } from "react";

export function useMEReveal(scopeRef: RefObject<HTMLElement | null>, effectKey: string) {
  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return;

    const items = Array.from(scope.querySelectorAll<HTMLElement>("[data-me-reveal]"));
    if (items.length === 0) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          window.requestAnimationFrame(() => {
            entry.target.classList.add("is-visible");
          });
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    items.forEach((item, index) => {
      item.classList.remove("is-visible");
      item.classList.add("is-reveal-ready");
      item.style.setProperty("--me-seq", `${Math.min(index, 8) * 56}ms`);
    });

    const frameId = window.requestAnimationFrame(() => {
      items.forEach((item) => {
        observer.observe(item);
      });
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, [effectKey, scopeRef]);
}
