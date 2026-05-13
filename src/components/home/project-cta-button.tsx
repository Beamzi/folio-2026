"use client";

import Link from "next/link";
import type { IconType } from "react-icons";

interface ProjectCtaBaseProps {
  label: string;
  icon: IconType;
  className?: string;
  ariaLabel?: string;
}

interface ProjectCtaLinkProps extends ProjectCtaBaseProps {
  href: string;
  onClick?: never;
  external?: boolean;
}

interface ProjectCtaActionProps extends ProjectCtaBaseProps {
  onClick: () => void;
  href?: never;
  external?: never;
}

type ProjectCtaButtonProps = ProjectCtaLinkProps | ProjectCtaActionProps;

const baseClassName =
  "inline-flex w-fit cursor-pointer items-center gap-[var(--spacing-xs)] rounded-[var(--radius-md)] border border-[var(--color-border)] bg-transparent px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-[var(--foreground)] transition-colors hover:bg-[var(--background)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]";

const iconContainerClassName =
  "flex h-[calc(var(--spacing-md)+var(--spacing-xs))] w-[calc(var(--spacing-md)+var(--spacing-xs))] items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--background)] text-[var(--color-primary)]";

export function ProjectCtaButton(props: ProjectCtaButtonProps) {
  const { label, icon: Icon, className, ariaLabel } = props;
  const combinedClassName = className
    ? `${baseClassName} ${className}`
    : baseClassName;
  const content = (
    <>
      <span className={iconContainerClassName}>
        <Icon className="h-[var(--spacing-sm)] w-[var(--spacing-sm)]" aria-hidden="true" />
      </span>
      {label}
    </>
  );

  if ("href" in props) {
    return (
      <Link
        href={props.href}
        aria-label={ariaLabel}
        className={combinedClassName}
        target={props.external ? "_blank" : undefined}
        rel={props.external ? "noopener noreferrer" : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={props.onClick}
      aria-label={ariaLabel}
      className={combinedClassName}
    >
      {content}
    </button>
  );
}
