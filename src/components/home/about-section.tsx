import Image from "next/image";
import { homeContent } from "@/data/pages/home";

export function AboutSection() {
  const { aboutSection } = homeContent.featuresSection;

  return (
    <article className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--background-elevated)] p-[var(--spacing-md)]">
      <div className="flex flex-col gap-[var(--spacing-md)] md:flex-row md:items-start md:gap-[var(--spacing-md)]">
        <div className="relative h-[calc(var(--spacing-xl)*3)] w-[calc(var(--spacing-xl)*3)] shrink-0 overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background)]">
          <Image
            src={aboutSection.profileImage.path}
            alt={aboutSection.profileImage.alt}
            fill
            sizes="(min-width: 768px) 144px, 144px"
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-1 flex-col gap-[var(--spacing-sm)] rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background-elevated)] p-[var(--spacing-sm)]">
          <h3 className="font-semibold text-[var(--foreground)]">
            {aboutSection.name}
          </h3>
          <p className="text-[var(--color-primary)]">{aboutSection.title}</p>
          <div className="text-[var(--foreground)]">
            {aboutSection.bio.split("\n\n").map((p, i) => (
              <p className="mb-[var(--spacing-xs)]" key={i}>
                {p}
              </p>
            ))}
            {/* {aboutSection.bio} */}
          </div>
          <ul className="flex flex-wrap gap-[var(--spacing-xs)]">
            {aboutSection.stackTags.map((tag) => (
              <li
                key={tag}
                className="rounded-[var(--radius-md)] border border-[var(--color-border)] px-[var(--spacing-xs)] py-[var(--spacing-xs)] text-[var(--color-muted)]"
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-[var(--spacing-xs)] rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background)] px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-[var(--foreground)]">
            <span
              aria-hidden="true"
              className="h-[var(--spacing-xs)] w-[var(--spacing-xs)] rounded-full bg-[var(--color-success)]"
            />
            {aboutSection.status}
          </div>
        </div>
      </div>
    </article>
  );
}
