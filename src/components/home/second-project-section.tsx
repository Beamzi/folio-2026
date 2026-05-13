"use client";

import Image from "next/image";
import { useState } from "react";
import {
  LuArrowLeft,
  LuBookOpen,
  LuChartBar,
  LuFilePenLine,
  LuGithub,
  LuRocket,
} from "react-icons/lu";
import { ImagePreviewModal } from "@/components/home/image-preview-modal";
import { ProjectCtaButton } from "@/components/home/project-cta-button";
import { homeContent } from "@/data/pages/home";

const secondProjectViewIcons = [LuBookOpen, LuChartBar, LuFilePenLine, LuRocket] as const;

export function SecondProjectSection() {
  const { secondProject, uiLabels } = homeContent.featuresSection;
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const slides = secondProject.carousel.slides;
  const activeSlide = slides[activeSlideIndex];
  const ActiveViewIcon = secondProjectViewIcons[activeSlideIndex] ?? LuRocket;
  const slideCountLabel = `${activeSlideIndex + 1}/${slides.length}`;

  const handleNext = () => {
    setActiveSlideIndex((currentIndex) => {
      return (currentIndex + 1) % slides.length;
    });
  };

  const handlePrevious = () => {
    setActiveSlideIndex((currentIndex) => {
      return (currentIndex - 1 + slides.length) % slides.length;
    });
  };

  return (
    <article className="flex flex-col gap-[var(--spacing-md)] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--background-elevated)] p-[var(--spacing-md)]">
      <div className="flex items-center justify-between gap-[var(--spacing-sm)] rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background-elevated)] p-[var(--spacing-xs)]">
        <button
          type="button"
          aria-label={activeSlide.navLabel}
          className="rounded-[var(--radius-sm)] border border-[var(--color-border)] px-[var(--spacing-xs)] py-[var(--spacing-xs)] text-[var(--foreground)]"
        >
          {activeSlide.navLabel}
        </button>
        <div className="flex items-center gap-[var(--spacing-xs)]">
          <button
            type="button"
            onClick={handlePrevious}
            className="rounded-[var(--radius-sm)] border border-[var(--color-border)] px-[var(--spacing-xs)] py-[var(--spacing-xs)] text-[var(--foreground)] transition-colors hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
            aria-label={secondProject.carousel.controls.previousLabel}
          >
            {secondProject.carousel.controls.previousLabel}
          </button>
          <p className="rounded-[var(--radius-sm)] border border-[var(--color-border)] px-[var(--spacing-xs)] py-[var(--spacing-xs)] text-[var(--foreground)]">
            {slideCountLabel}
          </p>
          <button
            type="button"
            onClick={handleNext}
            className="rounded-[var(--radius-sm)] border border-[var(--color-border)] px-[var(--spacing-xs)] py-[var(--spacing-xs)] text-[var(--foreground)] transition-colors hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
            aria-label={secondProject.carousel.controls.nextLabel}
          >
            {secondProject.carousel.controls.nextLabel}
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-[var(--spacing-sm)] rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background-elevated)] p-[var(--spacing-sm)] md:flex-row md:items-stretch">
        <div className="flex flex-1 flex-col">
          <div className="mb-[var(--spacing-sm)]">
            <span className="flex h-[calc(var(--spacing-xl)+var(--spacing-xs))] w-[calc(var(--spacing-xl)+var(--spacing-xs))] items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background)] text-[var(--color-primary)]">
              <ActiveViewIcon
                className="h-[var(--spacing-md)] w-[var(--spacing-md)]"
                aria-hidden="true"
              />
            </span>
          </div>
          <h4 className="mb-[var(--spacing-xs)] font-semibold text-[var(--foreground)]">
            {activeSlide.title}
          </h4>
          <p className="mb-[var(--spacing-sm)] text-[var(--foreground)]">
            {activeSlide.summary}
          </p>
          <ul className="mb-[var(--spacing-sm)] flex flex-wrap gap-[var(--spacing-xs)]">
            {activeSlide.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-transparent px-[var(--spacing-xs)] py-[var(--spacing-xs)] text-[var(--color-muted)]"
              >
                {tag}
              </li>
            ))}
          </ul>
          {activeSlideIndex === 0 ? (
            <ProjectCtaButton
              href={secondProject.carousel.controls.repositoryHref}
              external
              label={secondProject.carousel.controls.viewRepositoryLabel}
              icon={LuGithub}
              className="mt-auto"
            />
          ) : (
            <ProjectCtaButton
              onClick={() => setActiveSlideIndex(0)}
              label={secondProject.carousel.controls.backToOverviewLabel}
              icon={LuArrowLeft}
              className="mt-auto"
            />
          )}
        </div>
        <button
          type="button"
          onClick={() => setIsPreviewOpen(true)}
          aria-label={uiLabels.openImageLabel}
          className="relative h-[calc(var(--feature-card-min-height)*1.25)] flex-1 overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background-elevated)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] md:h-auto"
        >
          <Image
            src={activeSlide.imagePath}
            alt={activeSlide.imageAlt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-left"
          />
          <div className="vignette-overlay pointer-events-none absolute inset-0" />
        </button>
      </div>
      <ImagePreviewModal
        isOpen={isPreviewOpen}
        imagePath={activeSlide.imagePath}
        imageAlt={activeSlide.imageAlt}
        closeLabel={uiLabels.closeImageLabel}
        onClose={() => setIsPreviewOpen(false)}
      />
    </article>
  );
}
