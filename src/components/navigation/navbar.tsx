"use client";

import Link from "next/link";
import { useState } from "react";
import { navigationContent } from "@/data/navigation";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-[var(--border)] bg-[var(--background-elevated)]">
      <div className="mx-auto flex h-[var(--navbar-height)] w-full max-w-[var(--content-max-width)] items-center justify-between gap-[var(--spacing-sm)] px-[var(--spacing-sm)]">
        <Link
          href={navigationContent.brand.href}
          className="rounded-[var(--radius-sm)] px-[var(--spacing-xs)] py-[var(--spacing-xs)] text-[var(--foreground)] transition-colors hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
        >
          {navigationContent.brand.label}
        </Link>

        <button
          type="button"
          className="rounded-[var(--radius-sm)] p-[var(--spacing-xs)] text-[var(--foreground)] transition-colors hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] sm:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation-menu"
          aria-label={
            isMenuOpen
              ? navigationContent.mobileMenu.closeLabel
              : navigationContent.mobileMenu.openLabel
          }
          onClick={() => setIsMenuOpen((currentState) => !currentState)}
        >
          {isMenuOpen ? (
            <svg
              className="h-[var(--spacing-md)] w-[var(--spacing-md)]"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              className="h-[var(--spacing-md)] w-[var(--spacing-md)]"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>

        <nav aria-label={navigationContent.ariaLabel} className="hidden sm:block">
          <ul className="flex items-center gap-[var(--spacing-sm)]">
            {navigationContent.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-[var(--radius-sm)] px-[var(--spacing-xs)] py-[var(--spacing-xs)] text-[var(--foreground)] transition-colors hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <nav
        id="mobile-navigation-menu"
        aria-label={navigationContent.ariaLabel}
        className={`${isMenuOpen ? "block" : "hidden"} border-t-[var(--border)] sm:hidden`}
      >
        <ul className="mx-auto flex w-full max-w-[var(--content-max-width)] flex-col gap-[var(--spacing-xs)] px-[var(--spacing-sm)] py-[var(--spacing-sm)]">
          {navigationContent.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-[var(--radius-sm)] px-[var(--spacing-xs)] py-[var(--spacing-xs)] text-[var(--foreground)] transition-colors hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
