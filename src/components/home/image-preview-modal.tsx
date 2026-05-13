"use client";

interface ImagePreviewModalProps {
  isOpen: boolean;
  imagePath: string;
  imageAlt: string;
  closeLabel: string;
  onClose: () => void;
}

export function ImagePreviewModal({
  isOpen,
  imagePath,
  imageAlt,
  closeLabel,
  onClose,
}: ImagePreviewModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-[var(--spacing-sm)] py-[var(--spacing-sm)]"
      role="dialog"
      aria-modal="true"
      aria-label={imageAlt}
    >
      <button
        type="button"
        aria-label={closeLabel}
        className="absolute inset-0 bg-[rgb(0_0_0/0.25)] backdrop-blur-[8px]"
        onClick={onClose}
      />
      <button
        type="button"
        className="absolute right-[var(--spacing-sm)] top-[var(--spacing-sm)] z-10 rounded-[var(--radius-sm)] border-[var(--border)] bg-[var(--background-elevated)] px-[var(--spacing-xs)] py-[var(--spacing-xs)] text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
        onClick={onClose}
      >
        {closeLabel}
      </button>
      <div className="relative z-10">
        <img
          src={imagePath}
          alt={imageAlt}
          className="h-auto max-h-[calc(100dvh-var(--spacing-xl)*5)] w-auto max-w-[calc(100vw-var(--spacing-xl)*2)] rounded-[var(--radius-md)] border-[var(--border)] object-contain"
        />
      </div>
    </div>
  );
}
