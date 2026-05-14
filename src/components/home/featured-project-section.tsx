"use client";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import {
  LuArrowLeft,
  LuBookOpen,
  LuChartBar,
  LuDatabaseZap,
  LuFilePenLine,
  LuGithub,
  LuGlobe,
  LuMessageSquareReply,
  LuPlay,
  LuRefreshCcw,
  LuRocket,
  LuSplit,
} from "react-icons/lu";
import { ImagePreviewModal } from "@/components/home/image-preview-modal";
import { ProjectCtaButton } from "@/components/home/project-cta-button";
import { homeContent } from "@/data/pages/home";

const featureFlowIcons = [
  LuRefreshCcw,
  LuDatabaseZap,
  LuGlobe,
  LuSplit,
] as const;

export function FeaturedProjectSection() {
  const { featuredProject, uiLabels } = homeContent.featuresSection;
  const repositoryHref =
    featuredProject.socialLinks[0]?.href ?? featuredProject.href;
  const [activeFeatureIndex, setActiveFeatureIndex] = useState<number | null>(
    null,
  );
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const summaryClassName =
    "mb-[var(--spacing-xs)] max-h-[calc(var(--spacing-xl)*2)] overflow-y-auto pr-[var(--spacing-xs)] text-[var(--foreground)]";
  const activeFeature =
    activeFeatureIndex === null
      ? null
      : featuredProject.featureFlow[activeFeatureIndex];
  const previewImagePath =
    activeFeature?.imagePath ?? featuredProject.featureFlow[0]?.imagePath ?? "";
  const previewImageAlt =
    activeFeature?.imageAlt ?? featuredProject.featureFlow[0]?.imageAlt ?? "";
  return (
    <article className="flex h-full w-full flex-col justify-center gap-[var(--spacing-md)] rounded-[var(--radius-lg)] border-[var(--border)] bg-[var(--background-elevated)] p-[var(--spacing-md)]">
      <div className="flex items-center justify-between gap-[var(--spacing-sm)]">
        <div className="flex items-center gap-[var(--spacing-xs)]">
          <span className="inline-flex rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background-elevated)] px-[var(--spacing-xs)] py-[var(--spacing-xs)] text-[var(--color-primary)]">
            {featuredProject.label}
          </span>
          <span className="inline-flex rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background-elevated)] px-[var(--spacing-xs)] py-[var(--spacing-xs)] text-[var(--color-primary)]    ">
            {featuredProject.title}
          </span>
        </div>
        <div className="flex items-center gap-[var(--spacing-xs)]">
          <Link
            href={featuredProject.socialLinks[0].href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={featuredProject.socialLinks[0].label}
            className="inline-flex rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--background-elevated)] p-[var(--spacing-xs)] text-[var(--foreground)] transition-colors hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
          >
            <LuGithub className="h-[var(--spacing-sm)] w-[var(--spacing-sm)]" />
          </Link>
          <Link
            href={featuredProject.socialLinks[1].href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={featuredProject.socialLinks[1].label}
            className="inline-flex rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--background-elevated)] p-[var(--spacing-xs)] text-[var(--foreground)] transition-colors hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
          >
            <LuPlay className="h-[var(--spacing-sm)] w-[var(--spacing-sm)]" />
          </Link>
        </div>
      </div>
      <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background-elevated)] p-[var(--spacing-md)]">
        <ul className="flex flex-col items-center md:flex-row md:justify-center">
          {featuredProject.featureFlow.map((item, index) => {
            const Icon = featureFlowIcons[index];
            const isActive = index === activeFeatureIndex;
            return (
              <Fragment key={item.title}>
                <li className="relative flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveFeatureIndex((currentIndex) =>
                        currentIndex === index ? null : index,
                      )
                    }
                    aria-pressed={isActive}
                    aria-label={item.title}
                    className={`flex cursor-pointer min-h-[calc(var(--spacing-xl)+var(--spacing-xl))] w-full shrink-0 flex-col items-center justify-center gap-[var(--spacing-xs)] rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background-elevated)] px-[calc(var(--spacing-xs)*1.5)] py-[calc(var(--spacing-xs)*2)] text-[var(--foreground)] transition-colors hover:bg-[var(--background)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] md:min-w-[calc(var(--content-max-width)/6)] ${isActive ? "border-[var(--color-primary)]" : ""}`}
                  >
                    <span className="flex h-[calc(var(--spacing-xl)+var(--spacing-xs))] w-[calc(var(--spacing-xl)+var(--spacing-xs))] items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--background)] text-[var(--color-primary)]">
                      <Icon
                        className="h-[var(--spacing-md)] w-[var(--spacing-md)]"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="text-[var(--foreground)]">
                      {item.title}
                    </span>
                  </button>
                </li>
                {index < featuredProject.featureFlow.length - 1 ? (
                  <>
                    <li className="h-[var(--spacing-sm)] w-px shrink-0 md:hidden">
                      <svg
                        className="h-[var(--spacing-sm)] w-px text-[var(--color-border)]"
                        viewBox="0 0 1 100"
                        preserveAspectRatio="none"
                        fill="none"
                        aria-hidden="true"
                      >
                        <line
                          x1="0.5"
                          y1="0"
                          x2="0.5"
                          y2="100"
                          stroke="currentColor"
                          strokeWidth="1"
                        />
                      </svg>
                    </li>
                    <li className="hidden h-px w-[var(--spacing-md)] shrink-0 md:block">
                      <svg
                        className="h-px w-full text-[var(--color-border)]"
                        viewBox="0 0 100 1"
                        preserveAspectRatio="none"
                        fill="none"
                        aria-hidden="true"
                      >
                        <line
                          x1="0"
                          y1="0.5"
                          x2="100"
                          y2="0.5"
                          stroke="currentColor"
                          strokeWidth="1"
                        />
                      </svg>
                    </li>
                  </>
                ) : null}
              </Fragment>
            );
          })}
        </ul>
      </div>
      <div className="h-[clamp(calc(var(--feature-card-min-height)*1.5),42dvh,calc(var(--feature-card-min-height)*2.25))]">
        {activeFeature ? (
          <div className="flex h-full flex-col gap-[var(--spacing-sm)] md:flex-row md:items-stretch">
            <div className="flex h-full flex-1 flex-col rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background-elevated)] p-[var(--spacing-sm)]">
              <h3 className="mb-[var(--spacing-xs)] font-semibold text-[var(--foreground)]">
                {activeFeature.content.title}
              </h3>
              <p className={summaryClassName}>
                {activeFeature.content.summary}
              </p>
              <ul className="mb-[var(--spacing-sm)] flex flex-wrap gap-[var(--spacing-xs)]">
                {activeFeature.content.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-transparent px-[calc(var(--spacing-xs)*0.75)] py-[calc(var(--spacing-xs)*0.5)] text-[var(--color-muted)]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <ProjectCtaButton
                onClick={() => setActiveFeatureIndex(null)}
                label={activeFeature.content.ctaLabel}
                icon={LuArrowLeft}
                className="mt-auto"
              />
            </div>
            <button
              type="button"
              onClick={() => setIsPreviewOpen(true)}
              aria-label={uiLabels.openImageLabel}
              className="relative cursor-pointer h-[calc(var(--feature-card-min-height)*1.5)] flex-1 overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background-elevated)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] md:h-full"
            >
              <Image
                src={activeFeature.imagePath}
                alt={activeFeature.imageAlt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-left"
              />
              <div className="vignette-overlay pointer-events-none absolute inset-0" />
            </button>
          </div>
        ) : (
          <div className="flex h-full flex-col rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background-elevated)] p-[var(--spacing-sm)]">
            <h3 className="mb-[var(--spacing-xs)] font-semibold text-[var(--foreground)]">
              {featuredProject.title}
            </h3>
            <p className={summaryClassName}>{featuredProject.summary}</p>
            <ul className="mb-[var(--spacing-sm)] flex flex-wrap gap-[var(--spacing-xs)]">
              {featuredProject.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-transparent px-[calc(var(--spacing-xs)*0.75)] py-[calc(var(--spacing-xs)*0.5)] text-[var(--color-muted)]"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <ProjectCtaButton
              href={repositoryHref}
              external
              label={featuredProject.ctaLabel}
              icon={LuGithub}
              className="mt-auto"
            />
          </div>
        )}
      </div>
      <ImagePreviewModal
        isOpen={isPreviewOpen}
        imagePath={previewImagePath}
        imageAlt={previewImageAlt}
        closeLabel={uiLabels.closeImageLabel}
        onClose={() => setIsPreviewOpen(false)}
      />
    </article>
  );
}
