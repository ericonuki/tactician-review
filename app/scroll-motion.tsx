"use client";

import { useEffect } from "react";

export function ScrollMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const root = document.documentElement;
    const board = document.querySelector<HTMLElement>(".boardScene");
    const sections = document.querySelectorAll<HTMLElement>("[data-reveal]");
    let observer: IntersectionObserver | undefined;
    let frame = 0;

    const update = () => {
      frame = 0;
      const distance = root.scrollHeight - window.innerHeight;
      const progress = distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0;
      root.style.setProperty("--scroll-progress", String(progress));
      if (board) {
        const rect = board.getBoundingClientRect();
        const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) / (window.innerHeight / 2);
        board.style.setProperty("--board-turn", `${Math.min(12, Math.max(-12, offset * 12))}deg`);
      }
    };
    const queueUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    const cleanup = () => {
      observer?.disconnect();
      window.cancelAnimationFrame(frame);
      frame = 0;
      window.removeEventListener("scroll", queueUpdate);
      window.removeEventListener("resize", queueUpdate);
      root.style.removeProperty("--scroll-progress");
      board?.style.removeProperty("--board-turn");
    };
    const configure = () => {
      cleanup();
      if (preference.matches) {
        sections.forEach((section) => section.classList.add("is-visible"));
        return;
      }
      if ("IntersectionObserver" in window) {
        observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });
        sections.forEach((section) => {
          if (!section.classList.contains("is-visible")) observer?.observe(section);
        });
      }
      window.addEventListener("scroll", queueUpdate, { passive: true });
      window.addEventListener("resize", queueUpdate);
      queueUpdate();
    };

    configure();
    preference.addEventListener("change", configure);
    return () => {
      preference.removeEventListener("change", configure);
      cleanup();
    };
  }, []);

  return null;
}
