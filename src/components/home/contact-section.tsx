import Link from "next/link";
import { LuFileText, LuGithub, LuPhone } from "react-icons/lu";
import type { IconType } from "react-icons";
import { ProjectCtaButton } from "@/components/home/project-cta-button";
import { homeContent } from "@/data/pages/home";

interface ContactSectionProps {
  showLabel?: boolean;
}

export function ContactSection({ showLabel = true }: ContactSectionProps) {
  const { contactSection } = homeContent.featuresSection;
  const contactActionIcons: Record<string, IconType> = {
    github: LuGithub,
    resume: LuFileText,
    phone: LuPhone,
  };

  return (
    <article className="flex h-full w-full flex-col items-center gap-[var(--spacing-md)] rounded-[var(--radius-lg)] border-[var(--border)] bg-[var(--background-elevated)] p-[var(--spacing-md)] text-center">
      {showLabel ? (
        <p>
          <span className="inline-flex rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--background-elevated)] px-[var(--spacing-xs)] py-[var(--spacing-xs)] text-[var(--color-primary)]">
            {contactSection.label}
          </span>
        </p>
      ) : null}
      <div className="w-full p-[var(--spacing-xs)]">
        <p className="text-[var(--foreground)]">{contactSection.oneLiner}</p>
      </div>
      <Link
        href={contactSection.email.href}
        className="w-fit break-all text-[var(--foreground)] transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
      >
        {contactSection.email.label}
      </Link>
      <div className="flex flex-wrap justify-center gap-[var(--spacing-xs)]">
        {contactSection.actions.map((action) => (
          <ProjectCtaButton
            key={action.label}
            label={action.label}
            href={action.href}
            external={action.href.startsWith("https://")}
            icon={contactActionIcons[action.icon] ?? LuFileText}
          />
        ))}
      </div>
    </article>
  );
}
