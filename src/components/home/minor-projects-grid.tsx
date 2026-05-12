import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/data/pages/home";

export function MinorProjectsGrid() {
  const { minorProjects } = homeContent.featuresSection;

  return (
    <div>
      <h3 className="mb-[var(--spacing-xs)] text-[var(--foreground)]">
        {minorProjects.title}
      </h3>
      <p className="mb-[var(--spacing-md)] text-[var(--foreground)]">
        {minorProjects.description}
      </p>
      <div className="grid gap-[var(--spacing-sm)] md:grid-cols-3">
        {minorProjects.items.map((item) => (
          <Link
            href={item.href}
            key={item.title}
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
            <div className="pointer-events-none absolute inset-0 z-10 translate-x-full border-l-[var(--border)] border-[var(--color-border)] bg-[var(--background-elevated)] transition-transform duration-300 ease-out group-hover:translate-x-0 group-focus-visible:translate-x-0">
              <div className="flex h-full flex-col">
                <div className="border-b-[var(--border)] border-[var(--color-border)] px-[var(--spacing-sm)] py-[var(--spacing-xs)]">
                  <p className="font-semibold text-[var(--foreground)]">
                    {item.title}
                  </p>
                </div>
                <div className="relative flex-1">
                  <Image
                    src={item.imagePath}
                    alt={item.imageAlt}
                    fill
                    className="object-contain p-[var(--spacing-sm)]"
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
