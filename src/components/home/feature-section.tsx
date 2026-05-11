"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import {
  LuBookOpen,
  LuChartBar,
  LuFilePenLine,
  LuRocket,
} from "react-icons/lu";
import { homeContent } from "@/data/pages/home";

const featureFlowIcons = {
  library: LuBookOpen,
  write: LuFilePenLine,
  insights: LuChartBar,
  publish: LuRocket,
} as const;

export function FeatureSection() {
  const { featuresSection } = homeContent;
  const { featuredProject, secondFeature, minorProjects } = featuresSection;
  const [activeFeatureIndex, setActiveFeatureIndex] = useState<number | null>(
    null,
  );
  const activeFeature =
    activeFeatureIndex === null
      ? null
      : featuredProject.featureFlow[activeFeatureIndex];

  return (
    <section className="bg-[var(--background)] px-[var(--spacing-sm)] pb-[var(--spacing-lg)]">
      <div className="mx-auto w-full max-w-[var(--content-max-width)]">
        <div className="flex h-[calc(100dvh-var(--navbar-height))] items-center py-[var(--spacing-xl)]">
          <article className="flex h-full w-full flex-col justify-center rounded-[var(--radius-lg)] border-[var(--border)] bg-[var(--background-elevated)] p-[var(--spacing-md)]">
            <p className="mb-[var(--spacing-md)]">
              <span className="inline-flex rounded-[var(--radius-md)] border-[var(--border)] bg-[var(--background)] px-[var(--spacing-xs)] py-[var(--spacing-xs)] text-[var(--color-primary)]">
                {featuredProject.label}
              </span>
            </p>
            <div className="mb-[var(--spacing-md)] rounded-[var(--radius-md)] border-[var(--border)] bg-[var(--background)] p-[var(--spacing-xl)]">
              <ul className="flex flex-col items-center gap-[var(--spacing-sm)] md:flex-row md:justify-center md:gap-[var(--spacing-xs)]">
                {featuredProject.featureFlow.map((item, index) => {
                  const Icon =
                    featureFlowIcons[
                      item.icon as keyof typeof featureFlowIcons
                    ] ?? LuRocket;
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
                          className={`group flex h-[var(--spacing-xl)] w-[var(--spacing-xl)] shrink-0 items-center justify-center rounded-full border-[var(--border)] bg-[var(--background-elevated)] text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] ${isActive ? "border-[var(--color-primary)]" : ""}`}
                        >
                          <Icon
                            className="h-[var(--spacing-sm)] w-[var(--spacing-sm)]"
                            aria-hidden="true"
                          />
                          <span className="pointer-events-none absolute bottom-full left-1/2 mb-[var(--spacing-xs)] -translate-x-1/2 rounded-[var(--radius-sm)] border-[var(--border)] bg-[var(--background-elevated-high)] px-[var(--spacing-xs)] py-[var(--spacing-xs)] text-[var(--foreground)] opacity-0 shadow-[var(--shadow-sm)] transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                            {item.title}
                          </span>
                        </button>
                      </li>
                      {index < featuredProject.featureFlow.length - 1 ? (
                        <>
                          <li className="h-[var(--spacing-sm)] w-[var(--spacing-sm)] shrink-0 md:hidden">
                            <svg
                              className="h-[var(--spacing-sm)] w-full text-[var(--color-border)]"
                              viewBox="0 0 8 100"
                              preserveAspectRatio="none"
                              fill="none"
                              aria-hidden="true"
                            >
                              <line
                                x1="4"
                                y1="0"
                                x2="4"
                                y2="100"
                                stroke="currentColor"
                                strokeWidth="1.5"
                              />
                            </svg>
                          </li>
                          <li className="hidden h-[var(--spacing-sm)] w-[var(--spacing-md)] shrink-0 md:block">
                            <svg
                              className="h-[var(--spacing-sm)] w-full text-[var(--color-border)]"
                              viewBox="0 0 100 8"
                              preserveAspectRatio="none"
                              fill="none"
                              aria-hidden="true"
                            >
                              <line
                                x1="0"
                                y1="4"
                                x2="100"
                                y2="4"
                                stroke="currentColor"
                                strokeWidth="1.5"
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
            <div className="mb-[var(--spacing-md)] h-[clamp(calc(var(--feature-card-min-height)*1.5),42dvh,calc(var(--feature-card-min-height)*2.25))]">
              {activeFeature ? (
                <div className="flex h-full flex-col gap-[var(--spacing-sm)] md:flex-row md:items-stretch">
                  <div className="flex flex-1 flex-col rounded-[var(--radius-md)] border-[var(--border)] bg-[var(--background)] p-[var(--spacing-sm)]">
                    <h3 className="mb-[var(--spacing-xs)] font-semibold text-[var(--foreground)]">
                      {activeFeature.content.title}
                    </h3>
                    <p className="mb-[var(--spacing-sm)] text-[var(--foreground)]">
                      {activeFeature.content.summary}
                    </p>
                    <ul className="mb-[var(--spacing-sm)] flex flex-wrap gap-[var(--spacing-xs)]">
                      {activeFeature.content.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-[var(--radius-md)] border-[var(--border)] bg-[var(--background-elevated)] px-[var(--spacing-xs)] py-[var(--spacing-xs)] text-[var(--foreground)]"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={activeFeature.content.href}
                      className="inline-flex w-fit rounded-[var(--radius-md)] border-[var(--border)] bg-[var(--color-primary)] px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-[var(--foreground)] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
                    >
                      {activeFeature.content.ctaLabel}
                    </Link>
                  </div>
                  <div className="relative h-[calc(var(--feature-card-min-height)*1.5)] flex-1 overflow-hidden rounded-[var(--radius-md)] border-[var(--border)] bg-[var(--background)] md:h-full">
                    <Image
                      src={activeFeature.imagePath}
                      alt={activeFeature.imageAlt}
                      fill
                      className="object-contain p-[var(--spacing-md)]"
                    />
                  </div>
                </div>
              ) : (
                <div className="flex h-full flex-col rounded-[var(--radius-md)] border-[var(--border)] bg-[var(--background)] p-[var(--spacing-sm)]">
                  <h3 className="mb-[var(--spacing-xs)] font-semibold text-[var(--foreground)]">
                    {featuredProject.title}
                  </h3>
                  <p className="mb-[var(--spacing-sm)] text-[var(--foreground)]">
                    {featuredProject.summary}
                  </p>
                  <ul className="mb-[var(--spacing-md)] flex flex-wrap gap-[var(--spacing-xs)]">
                    {featuredProject.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-[var(--radius-md)] border-[var(--border)] bg-[var(--background-elevated)] px-[var(--spacing-xs)] py-[var(--spacing-xs)] text-[var(--foreground)]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={featuredProject.href}
                    className="inline-flex w-fit rounded-[var(--radius-md)] border-[var(--border)] bg-[var(--color-primary)] px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-[var(--foreground)] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
                  >
                    {featuredProject.ctaLabel}
                  </Link>
                </div>
              )}
            </div>
          </article>
        </div>
        <div className="grid gap-[var(--spacing-md)]">
          <article className="rounded-[var(--radius-lg)] border-[var(--border)] bg-[var(--background-elevated)] p-[var(--spacing-md)]">
            <p className="mb-[var(--spacing-xs)] text-[var(--color-primary)]">
              {secondFeature.label}
            </p>
            <h3 className="mb-[var(--spacing-xs)] text-[var(--foreground)]">
              {secondFeature.title}
            </h3>
            <p className="mb-[var(--spacing-sm)] text-[var(--foreground)]">
              {secondFeature.summary}
            </p>
            <ul className="mb-[var(--spacing-md)] flex flex-wrap gap-[var(--spacing-xs)]">
              {secondFeature.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-[var(--radius-md)] border-[var(--border)] bg-[var(--background)] px-[var(--spacing-xs)] py-[var(--spacing-xs)] text-[var(--foreground)]"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <Link
              href={secondFeature.href}
              className="inline-flex rounded-[var(--radius-md)] border-[var(--border)] px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-[var(--foreground)] transition-colors hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
            >
              {secondFeature.ctaLabel}
            </Link>
          </article>

          <div>
            <h3 className="mb-[var(--spacing-xs)] text-[var(--foreground)]">
              {minorProjects.title}
            </h3>
            <p className="mb-[var(--spacing-md)] text-[var(--foreground)]">
              {minorProjects.description}
            </p>
            <div className="grid gap-[var(--spacing-sm)] md:grid-cols-3">
              {minorProjects.items.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[var(--radius-md)] border-[var(--border)] bg-[var(--background-elevated)] p-[var(--spacing-sm)]"
                >
                  <h4 className="mb-[var(--spacing-xs)] text-[var(--foreground)]">
                    {item.title}
                  </h4>
                  <p className="mb-[var(--spacing-sm)] text-[var(--foreground)]">
                    {item.summary}
                  </p>
                  <Link
                    href={item.href}
                    className="inline-flex rounded-[var(--radius-sm)] px-[var(--spacing-xs)] py-[var(--spacing-xs)] text-[var(--foreground)] transition-colors hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
                  >
                    {item.ctaLabel}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
