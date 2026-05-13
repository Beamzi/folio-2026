import Link from "next/link";
import { LuGithub, LuGlobe, LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import type { IconType } from "react-icons";
import { homeContent } from "@/data/pages/home";

interface ContactSectionProps {
  showLabel?: boolean;
}

export function ContactSection({ showLabel = true }: ContactSectionProps) {
  const { contactSection } = homeContent.featuresSection;
  const contactIcons: IconType[] = [
    LuMapPin,
    LuPhone,
    LuMail,
    LuGlobe,
    LuGithub,
  ];

  return (
    <article className="flex h-full w-full flex-col gap-[var(--spacing-md)] rounded-[var(--radius-lg)] border-[var(--border)] bg-[var(--background-elevated)] p-[var(--spacing-md)]">
      {showLabel ? (
        <p>
          <span className="inline-flex rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background-elevated)] px-[var(--spacing-xs)] py-[var(--spacing-xs)] text-[var(--color-primary)]">
            {contactSection.label}
          </span>
        </p>
      ) : null}
      <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background-elevated)] p-[var(--spacing-md)]">
        <h2 className="mb-[var(--spacing-xs)] text-[var(--foreground)]">
          {contactSection.title}
        </h2>
        <p className="text-[var(--foreground)]">{contactSection.subtitle}</p>
      </div>
      <ul className="grid gap-[var(--spacing-sm)] md:grid-cols-2">
        {contactSection.details.map((detail, index) => (
          <li
            key={detail.label}
            className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background-elevated)] p-[var(--spacing-md)]"
          >
            <div className="mb-[var(--spacing-xs)] flex items-center gap-[var(--spacing-xs)]">
              <span className="flex shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--background)] p-[var(--spacing-xs)] text-[var(--color-primary)]">
                {(() => {
                  const Icon = contactIcons[index];

                  return Icon ? (
                    <Icon
                      className="h-[var(--spacing-sm)] w-[var(--spacing-sm)] shrink-0"
                      aria-hidden="true"
                    />
                  ) : null;
                })()}
              </span>
              <p className="text-[var(--color-muted)]">{detail.label}</p>
            </div>
            {detail.href ? (
              <Link
                href={detail.href}
                target={
                  detail.href.startsWith("https://") ? "_blank" : undefined
                }
                rel={
                  detail.href.startsWith("https://")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="break-all text-[var(--foreground)] transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
              >
                {detail.value}
              </Link>
            ) : (
              <p className="text-[var(--foreground)]">{detail.value}</p>
            )}
          </li>
        ))}
      </ul>
    </article>
  );
}
