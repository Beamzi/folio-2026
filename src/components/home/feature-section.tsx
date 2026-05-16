"use client";

import { useEffect, useRef } from "react";
import { ContactSection } from "@/components/home/contact-section";
import { FeaturedProjectSection } from "@/components/home/featured-project-section";
import { MinorProjectsGrid } from "@/components/home/minor-projects-grid";
import { SecondProjectSection } from "@/components/home/second-project-section";

export function FeatureSection() {
  const parallaxRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    let isTicking = false;

    const updateParallax = () => {
      const viewportHeight = window.innerHeight;

      parallaxRefs.current.forEach((sectionElement, sectionIndex) => {
        if (!sectionElement) {
          return;
        }

        const sectionTop = sectionElement.offsetTop;
        const startThreshold = sectionTop - viewportHeight;
        const scrolledDistance = Math.max(0, window.scrollY - startThreshold);
        const sequentialStrength =
          (parallaxRefs.current.length - sectionIndex) * 0.045;
        const translateY = Math.min(
          scrolledDistance * sequentialStrength,
          sequentialStrength * 300,
        );
        const gapGrowthStrength = (sectionIndex + 1) * 0.03;
        const dynamicGap = Math.min(
          scrolledDistance * gapGrowthStrength,
          gapGrowthStrength * 260,
        );
        const minimumGapToPreventOverlap = translateY;
        const appliedGap = Math.max(dynamicGap, minimumGapToPreventOverlap);

        sectionElement.style.transform = `translate3d(0, ${translateY}px, 0)`;
        sectionElement.style.marginBottom = `${appliedGap}px`;
      });

      isTicking = false;
    };

    const requestParallaxUpdate = () => {
      if (isTicking) {
        return;
      }

      isTicking = true;
      window.requestAnimationFrame(updateParallax);
    };

    requestParallaxUpdate();
    window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
    window.addEventListener("resize", requestParallaxUpdate);

    return () => {
      window.removeEventListener("scroll", requestParallaxUpdate);
      window.removeEventListener("resize", requestParallaxUpdate);
    };
  }, []);

  return (
    <section className="px-[var(--spacing-sm)] pb-[var(--spacing-lg)]">
      <div className="mx-auto w-full max-w-[var(--content-max-width)]">
        <div className="flex items-center py-[var(--spacing-xl)] md:h-[calc(100dvh-var(--navbar-height))]">
          <FeaturedProjectSection />
        </div>
        <div className="grid gap-[var(--spacing-md)]">
          <div
            ref={(element) => {
              parallaxRefs.current[0] = element;
            }}
            className="will-change-transform"
          >
            <SecondProjectSection />
          </div>
          <div
            ref={(element) => {
              parallaxRefs.current[1] = element;
            }}
            className="will-change-transform"
          >
            <MinorProjectsGrid />
          </div>
          <div
            ref={(element) => {
              parallaxRefs.current[2] = element;
            }}
            className="will-change-transform"
          >
            <ContactSection />
          </div>
        </div>
      </div>
    </section>
  );
}
