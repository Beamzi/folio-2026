"use client";

import { useEffect, useRef } from "react";
import { homeContent } from "@/data/pages/home";

export function MinorProjectsGrid() {
  const { minorProjects } = homeContent.featuresSection;
  const secondRowAnchorRef = useRef<HTMLDivElement | null>(null);
  const secondRowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let isTicking = false;
    const rootStyles = window.getComputedStyle(document.documentElement);
    const spacingSmValue = rootStyles.getPropertyValue("--spacing-sm").trim();
    const rootFontSize = Number.parseFloat(rootStyles.fontSize) || 16;
    const spacingSmPx = spacingSmValue.endsWith("rem")
      ? (Number.parseFloat(spacingSmValue) || 1) * rootFontSize
      : (Number.parseFloat(spacingSmValue) || 16);
    const initialExtraGapPx = spacingSmPx * 4;
    const smoothStep = (value: number) => value * value * (3 - 2 * value);

    const resetSecondRowStyles = () => {
      if (!secondRowRef.current) {
        return;
      }

      secondRowRef.current.style.transform = "translate3d(0, 0, 0)";
      secondRowRef.current.style.marginTop = "var(--spacing-sm)";
    };

    const updateSecondRowParallax = () => {
      const secondRowAnchorElement = secondRowAnchorRef.current;
      const secondRowElement = secondRowRef.current;

      if (!secondRowAnchorElement || !secondRowElement) {
        isTicking = false;
        return;
      }

      const isDesktopGrid = window.matchMedia("(min-width: 768px)").matches;
      if (!isDesktopGrid) {
        resetSecondRowStyles();
        isTicking = false;
        return;
      }

      const viewportHeight = window.innerHeight;
      const rowTop = secondRowAnchorElement.getBoundingClientRect().top;
      const preEntryStart = viewportHeight * 1.06;
      const entryStart = viewportHeight * 0.95;
      const settleEnd = viewportHeight * 0.2;
      let effectFactor = 0;

      if (rowTop <= preEntryStart && rowTop > entryStart) {
        const preEntryProgress =
          (preEntryStart - rowTop) / (preEntryStart - entryStart);
        const clampedPreEntryProgress = Math.min(
          Math.max(preEntryProgress, 0),
          1,
        );
        effectFactor = smoothStep(clampedPreEntryProgress);
      } else if (rowTop <= entryStart) {
        const settleProgress = (entryStart - rowTop) / (entryStart - settleEnd);
        const clampedSettleProgress = Math.min(Math.max(settleProgress, 0), 1);
        effectFactor = 1 - smoothStep(clampedSettleProgress);
      }

      const currentExtraGap = effectFactor * initialExtraGapPx;
      secondRowElement.style.transform = "translate3d(0, 0, 0)";
      secondRowElement.style.marginTop = `calc(var(--spacing-sm) + ${currentExtraGap}px)`;

      isTicking = false;
    };

    const requestUpdate = () => {
      if (isTicking) {
        return;
      }

      isTicking = true;
      window.requestAnimationFrame(updateSecondRowParallax);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <div>
      <h3 className="mb-[var(--spacing-xs)] text-[var(--foreground)]">
        {minorProjects.title}
      </h3>
      <p className="mb-[var(--spacing-md)] text-[var(--foreground)]">
        {minorProjects.description}
      </p>
      <div className="grid gap-[var(--spacing-sm)] md:grid-cols-3">
        {minorProjects.items.slice(0, 3).map((item) => (
          <a
            href={item.href}
            key={item.title}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-[var(--radius-md)] border-[var(--border)] bg-[var(--background-elevated)] p-[var(--spacing-sm)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
          >
            <div className="relative z-0">
              <h4 className="mb-[var(--spacing-xs)] font-semibold text-[var(--foreground)]">
                {item.title}
              </h4>
              <p className="mb-[var(--spacing-sm)] text-[var(--foreground)]">
                {item.summary}
              </p>
              <ul className="flex flex-col gap-[var(--spacing-xs)]">
                {item.bulletPoints.map((point) => (
                  <li key={point} className="text-[var(--color-muted)]">
                    {`• ${point}`}
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute inset-0 z-10 translate-x-[calc(100%+1px)] border-l-[var(--border)] border-[var(--color-border)] bg-[var(--background-elevated)] transition-transform duration-300 ease-out group-hover:translate-x-0 group-focus-visible:translate-x-0">
              <div className="flex h-full flex-col">
                <div className="border-b-[var(--border)] border-[var(--color-border)] px-[var(--spacing-sm)] py-[var(--spacing-xs)]">
                  <p className="font-semibold text-[var(--foreground)]">
                    {item.title}
                  </p>
                </div>
                <div className="relative flex-1">
                  <img
                    src={item.imagePath}
                    alt={item.imageAlt}
                    loading="lazy"
                    draggable={false}
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="vignette-overlay pointer-events-none absolute inset-0" />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div ref={secondRowAnchorRef} />
      <div
        ref={secondRowRef}
        className="mt-[var(--spacing-sm)] grid gap-[var(--spacing-sm)] md:grid-cols-3"
      >
        {minorProjects.items.slice(3).map((item) => (
          <a
            href={item.href}
            key={item.title}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-[var(--radius-md)] border-[var(--border)] bg-[var(--background-elevated)] p-[var(--spacing-sm)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
          >
            <div className="relative z-0">
              <h4 className="mb-[var(--spacing-xs)] font-semibold text-[var(--foreground)]">
                {item.title}
              </h4>
              <p className="mb-[var(--spacing-sm)] text-[var(--foreground)]">
                {item.summary}
              </p>
              <ul className="flex flex-col gap-[var(--spacing-xs)]">
                {item.bulletPoints.map((point) => (
                  <li key={point} className="text-[var(--color-muted)]">
                    {`• ${point}`}
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute inset-0 z-10 translate-x-[calc(100%+1px)] border-l-[var(--border)] border-[var(--color-border)] bg-[var(--background-elevated)] transition-transform duration-300 ease-out group-hover:translate-x-0 group-focus-visible:translate-x-0">
              <div className="flex h-full flex-col">
                <div className="border-b-[var(--border)] border-[var(--color-border)] px-[var(--spacing-sm)] py-[var(--spacing-xs)]">
                  <p className="font-semibold text-[var(--foreground)]">
                    {item.title}
                  </p>
                </div>
                <div className="relative flex-1">
                  <img
                    src={item.imagePath}
                    alt={item.imageAlt}
                    loading="lazy"
                    draggable={false}
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="vignette-overlay pointer-events-none absolute inset-0" />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
