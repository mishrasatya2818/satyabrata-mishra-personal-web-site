import posthog from "posthog-js";

// PostHog project key — this is a public, write-only key meant to ship in browser code.
const key = process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "phc_m7kfzUifQVu4iMrvSrrnhKPTaFVsfu7icv2EvinKGTco";

if (key) {
  posthog.init(key, {
    // Sent through this site's own /ingest path (see next.config.ts) so ad blockers don't drop it.
    api_host: "/ingest",
    ui_host: "https://us.posthog.com",
    // Tracks page views, clicks (including on your LinkedIn, Medium and résumé links) and referrers.
    defaults: "2025-05-24",
    person_profiles: "identified_only",
  });
}
