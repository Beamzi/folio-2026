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
    secondFeature: {
      label: "Second Feature",
      title: "Client Dashboard Redesign",
      summary:
        "A performance-focused redesign that made project tracking faster and clearer across mobile, tablet, and desktop.",
      href: "#",
      ctaLabel: "Explore second feature",
      tags: ["UX", "Design System", "Analytics"],
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
          href: "#",
          ctaLabel: "Open project",
        },
        {
          title: "Freelance Invoice Helper",
          summary:
            "A simple invoicing assistant with tax presets and downloadable PDFs.",
          href: "#",
          ctaLabel: "Open project",
        },
        {
          title: "Recipe Snapshot",
          summary:
            "A compact recipe organizer for storing favorites and quick grocery prep lists.",
          href: "#",
          ctaLabel: "Open project",
        },
        {
          title: "Mini Event Site",
          summary:
            "A launch-ready event template with schedule blocks, speaker highlights, and sign-up CTAs.",
          href: "#",
          ctaLabel: "Open project",
        },
      ],
    },
  },
};
