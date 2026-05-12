export const homeContent = {
  featuresSection: {
    eyebrow: "Selected Work",
    title: "Projects I am excited to share",
    description:
      "A quick look at the work I am most proud of, plus smaller builds I keep shipping in between.",
    featuredProject: {
      label: "Featured Project",
      title: "Portfolio CMS + Case Study Engine",
      summary:
        "A flexible portfolio builder with reusable page blocks, rich media support, and authoring tools for writing structured case studies quickly.",
      featureFlow: [
        {
          icon: "library",
          title: "Project Library",
          imagePath: "/globe.svg",
          imageAlt: "Project library feature preview",
          content: {
            title: "Project Library",
            summary:
              "Browse all projects in one place with reusable content blocks and connected media assets.",
            tags: ["Collections", "Media", "Reusable Blocks"],
            href: "#",
            ctaLabel: "View library feature",
          },
        },
        {
          icon: "write",
          title: "Case Study Editor",
          imagePath: "/file.svg",
          imageAlt: "Case study editor feature preview",
          content: {
            title: "Case Study Editor",
            summary:
              "Write structured project stories faster with guided sections, templates, and inline media placement.",
            tags: ["Editor", "Templates", "Publishing"],
            href: "#",
            ctaLabel: "View editor feature",
          },
        },
        {
          icon: "insights",
          title: "Performance Insights",
          imagePath: "/window.svg",
          imageAlt: "Performance insights feature preview",
          content: {
            title: "Performance Insights",
            summary:
              "Understand what work resonates with visitors through lightweight metrics and clear engagement trends.",
            tags: ["Analytics", "Traffic", "Engagement"],
            href: "#",
            ctaLabel: "View insights feature",
          },
        },
        {
          icon: "publish",
          title: "One-Click Publishing",
          imagePath: "/vercel.svg",
          imageAlt: "One-click publishing feature preview",
          content: {
            title: "One-Click Publishing",
            summary:
              "Push updates across portfolio pages quickly with a streamlined publish flow and preview controls.",
            tags: ["Deployment", "Preview", "Sync"],
            href: "#",
            ctaLabel: "View publishing feature",
          },
        },
      ],
      href: "#",
      ctaLabel: "View featured project",
      tags: ["Next.js", "TypeScript", "Headless CMS"],
    },
    secondProject: {
      label: "Second Project",
      title: "Client Dashboard Redesign",
      summary:
        "A performance-focused redesign that made project tracking faster and clearer across mobile, tablet, and desktop.",
      href: "#",
      ctaLabel: "Explore second project",
      tags: ["UX", "Design System", "Analytics"],
      carousel: {
        controls: {
          previousLabel: "Previous",
          nextLabel: "Next",
        },
        slides: [
          {
            navLabel: "Overview",
            title: "Project Summary",
            summary:
              "This redesign unifies key workflows into one calmer interface so teams can monitor health, plan changes, and ship updates with confidence.",
            imagePath: "/next.svg",
            imageAlt: "Second project overview slide preview",
            href: "#",
            ctaLabel: "Explore second project",
            tags: ["Dashboard", "Workflow", "Productivity"],
          },
          {
            navLabel: "Performance",
            title: "Performance Overview",
            summary:
              "A cleaner metrics layer that helps teams scan project health quickly and prioritize next actions.",
            imagePath: "/window.svg",
            imageAlt: "Performance overview slide preview",
            href: "#",
            ctaLabel: "View performance view",
            tags: ["Dashboard", "Metrics", "Clarity"],
          },
          {
            navLabel: "Timeline",
            title: "Project Timeline View",
            summary:
              "A focused timeline experience that keeps milestone changes visible without overwhelming the workspace.",
            imagePath: "/globe.svg",
            imageAlt: "Project timeline slide preview",
            href: "#",
            ctaLabel: "View timeline flow",
            tags: ["Timeline", "Planning", "Updates"],
          },
          {
            navLabel: "Action Queue",
            title: "Action Queue",
            summary:
              "A prioritized task surface with quick filters so teams can execute the next critical actions faster.",
            imagePath: "/file.svg",
            imageAlt: "Action queue slide preview",
            href: "#",
            ctaLabel: "View action queue",
            tags: ["Tasks", "Filters", "Execution"],
          },
        ],
      },
    },
    minorProjects: {
      title: "More Apps & Sites",
      description:
        "Smaller experiments, utility apps, and focused client builds that solve practical problems.",
      items: [
        {
          title: "Habit Heatmap",
          summary:
            "A streak tracker with daily check-ins and lightweight progress trends.",
          bulletPoints: [
            "Daily streak check-ins",
            "Weekly progress snapshots",
            "Lightweight habit categories",
          ],
          imagePath: "/window.svg",
          imageAlt: "Habit Heatmap project preview",
          href: "#",
          ctaLabel: "Open project",
        },
        {
          title: "Freelance Invoice Helper",
          summary:
            "A simple invoicing assistant with tax presets and downloadable PDFs.",
          bulletPoints: [
            "Invoice templates by client",
            "Tax preset calculators",
            "Exportable PDF invoices",
          ],
          imagePath: "/file.svg",
          imageAlt: "Freelance Invoice Helper project preview",
          href: "#",
          ctaLabel: "Open project",
        },
        {
          title: "Recipe Snapshot",
          summary:
            "A compact recipe organizer for storing favorites and quick grocery prep lists.",
          bulletPoints: [
            "Favorite recipe collections",
            "Quick ingredient checklists",
            "Fast meal prep notes",
          ],
          imagePath: "/globe.svg",
          imageAlt: "Recipe Snapshot project preview",
          href: "#",
          ctaLabel: "Open project",
        },
        {
          title: "Mini Event Site",
          summary:
            "A launch-ready event template with schedule blocks, speaker highlights, and sign-up CTAs.",
          bulletPoints: [
            "Speaker highlight modules",
            "Session schedule blocks",
            "Sign-up call-to-action flow",
          ],
          imagePath: "/next.svg",
          imageAlt: "Mini Event Site project preview",
          href: "#",
          ctaLabel: "Open project",
        },
      ],
    },
    contactSection: {
      label: "Contact",
      title: "James Day",
      subtitle: "Let’s connect",
      details: [
        {
          label: "Location",
          icon: "mapPin",
          value: "Brisbane, QLD",
        },
        {
          label: "Phone",
          icon: "phone",
          value: "+61 491 625 139",
          href: "tel:+61491625139",
        },
        {
          label: "Email",
          icon: "mail",
          value: "me@james-day.dev",
          href: "mailto:me@james-day.dev",
        },
        {
          label: "Website",
          icon: "globe",
          value: "james-day.dev",
          href: "https://james-day.dev",
        },
        {
          label: "GitHub",
          icon: "github",
          value: "github.com/beamzi/",
          href: "https://github.com/beamzi",
        },
      ],
    },
  },
};
