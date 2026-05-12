import { ContactSection } from "@/components/home/contact-section";
import { FeaturedProjectSection } from "@/components/home/featured-project-section";
import { MinorProjectsGrid } from "@/components/home/minor-projects-grid";
import { SecondProjectSection } from "@/components/home/second-project-section";

export function FeatureSection() {
  return (
    <section className="bg-[var(--background)] px-[var(--spacing-sm)] pb-[var(--spacing-lg)]">
      <div className="mx-auto w-full max-w-[var(--content-max-width)]">
        <div className="flex h-[calc(100dvh-var(--navbar-height))] items-center py-[var(--spacing-xl)]">
          <FeaturedProjectSection />
        </div>
        <div className="grid gap-[var(--spacing-md)]">
          <SecondProjectSection />
          <MinorProjectsGrid />
          <ContactSection />
        </div>
      </div>
    </section>
  );
}
