import { ContactSection } from "@/components/home/contact-section";
import { homeContent } from "@/data/pages/home";

export default function ContactPage() {
  const { contactSection } = homeContent.featuresSection;

  return (
    <main className="bg-[var(--background)] px-[var(--spacing-sm)] py-[var(--spacing-xl)]">
      <div className="mx-auto flex w-full max-w-[var(--content-max-width)] flex-col gap-[var(--spacing-md)]">
        <h1 className="text-[var(--foreground)]">{contactSection.label}</h1>
        <ContactSection showLabel={false} />
      </div>
    </main>
  );
}
