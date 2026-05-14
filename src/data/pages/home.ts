export const homeContent = {
  featuresSection: {
    eyebrow: "Selected Work",
    title: "Projects I am excited to share",
    description:
      "A quick look at the work I am most proud of, plus smaller builds I keep shipping in between.",
    uiLabels: {
      openImageLabel: "Open full image",
      closeImageLabel: "Close full image",
    },
    featuredProject: {
      label: "Featured Project",
      socialLinks: [
        {
          label: "View Orcha GitHub repository",
          href: "https://github.com/Beamzi/orcha",
        },
        {
          label: "Watch Orcha demo video",
          href: "https://github-production-user-asset-6210df.s3.amazonaws.com/159420270/589411438-bf526a1c-0616-4748-b65c-71b2a90e0a05.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260513%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260513T011138Z&X-Amz-Expires=300&X-Amz-Signature=74402905f7ad1ca6d4ed17e6b8231d5eb4b9b2f7156430a60bff38968ccefffd&X-Amz-SignedHeaders=host&response-content-type=video%2Fmp4",
        },
      ],
      title: "Orcha",
      summary:
        "Orcha wraps locally-run AI models in the infrastructure they're missing. Persistent memory, context injection, live web search, and streaming responses — everything a frontier app offers, running entirely on your machine.",
      featureFlow: [
        {
          icon: "library",
          title: "Context Injection",
          imagePath: "/images/orcha/context-injection-example.png",
          imageAlt: "Orcha context injection feature preview",
          content: {
            title: "The foundation everything else builds on",
            summary:
              "Chat history is merged from server and client state, formatted to Ollama's spec, and injected into every request. The model knows what was said earlier in the conversation because you tell it — every time.",
            tags: ["Context Management", "State Architecture", "Ollama API"],
            href: "#",
            ctaLabel: "Back to overview",
          },
        },
        {
          icon: "write",
          title: "Persistent Memory",
          imagePath: "/images/orcha/chat-instances--example.png",
          imageAlt: "Orcha persistent memory chat instances preview",
          content: {
            title: "Conversations that survive the session",
            summary:
              "Chat instances are created atomically with their first message and saved to the database. History reloads into context on return so conversations stay coherent across sessions. Close the app, come back, pick up where you left off.",
            tags: ["PostgreSQL", "Prisma ORM", "Session Stat"],
            href: "#",
            ctaLabel: "Back to overview",
          },
        },
        {
          icon: "insights",
          title: "Live Data & Search",
          imagePath: "/images/orcha/web-search-example.png",
          imageAlt: "Orcha live data and web search preview",
          content: {
            title: "Your local model, connected to now",
            summary:
              "Brave Search API pulls real-time results and injects them into model context before each response. Questions about recent events, things that happened last week — answered accurately by a model running entirely on your hardware.",
            tags: ["Brave Search API", "RAG", "Real-Time Data"],
            href: "#",
            ctaLabel: "Back to overview",
          },
        },
        {
          icon: "publish",
          title: "Streaming Response",
          imagePath: "/images/orcha/streaming-example.png",
          imageAlt: "Orcha streaming response preview",
          content: {
            title: "Output that feels instant",
            summary:
              "Responses stream token by token with optimistic UI updates. Temporary IDs allow state to update mid-stream and reconcile against the database on completion — without blocking the interface or waiting on the server.",
            tags: ["Streaming", "Optimistic UI", "State Reconciliatio"],
            href: "#",
            ctaLabel: "Back to overview",
          },
        },
      ],
      href: "#",
      ctaLabel: "View repository",
      tags: [
        "TypeScript",
        "React",
        "Tailwind",
        "Next.js",
        "Prisma",
        "PostgreSQL",
      ],
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
          viewRepositoryLabel: "View repository",
          backToOverviewLabel: "Back to overview",
          repositoryHref: "https://github.com/Beamzi/orcha",
        },
        slides: [
          {
            navLabel: "Overview",
            title: "Manaboard",
            summary:
              "Manaboard is a full-stack project management platform built around one principle: every interaction feels instant. ~50ms route transitions, zero loading states, fuzzy search, and a custom state architecture built from scratch; production standard throughout.",
            imagePath: "/images/manaboard/overview.jpg",
            imageAlt: "Manaboard overview dashboard",
            href: "#",
            ctaLabel: "Explore second project",
            tags: ["TypeScript", "React", "Next.js", "Prisma", "PostgreSQL"],
          },
          {
            navLabel: "Synchronisation",
            title: "Instant By Design",
            summary:
              "State lives in memory, populated at load via SSR. Filtering, sorting, and navigation are pure client-side operations — no API calls, no loading states. Changes sync to the backend in the background while the UI responds immediately.",
            imagePath: "/images/manaboard/hydration.jpg",
            imageAlt: "Manaboard hydration view",
            href: "#",
            ctaLabel: "View performance view",
            tags: ["Optimistic UI", "In-Memory State", "SSR Hydration"],
          },
          {
            navLabel: "State Management",
            title: "Custom State Architecture",
            summary:
              "A model-driven system built on React Context with a purpose-built SSR-to-client bridge. Each data model has its own scoped provider, changes cascade reactively across all views, and server data initialises client state without hydration mismatches.",
            imagePath: "/images/manaboard/state-management.jpg",
            imageAlt: "Manaboard state management view",
            href: "#",
            ctaLabel: "View timeline flow",
            tags: ["React Context API", "TypeScript", "Custom Architecture"],
          },
          {
            navLabel: "Data Flow",
            title: "Relational Data, End to End",
            summary:
              "Normalised PostgreSQL schema with type safety derived directly from Prisma queries. Unified endpoints handle multiple concerns through filtering rather than proliferating routes. Atomic transactions keep tasks, projects, comments, and notes coherent under concurrent operations.",
            imagePath: "/images/manaboard/manaboard_schema_erd.html",
            imageAlt: "Manaboard relational data schema diagram",
            href: "#",
            ctaLabel: "View action queue",
            tags: ["PostgreSQL", "Prisma ORM", "Type Safety"],
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
