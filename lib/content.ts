// All site copy lives here. Edit this file to update the website.

export const site = {
  name: "Satyabrata Mishra",
  shortName: "Satya",
  role: "Senior Product Manager",
  focus: "Data & AI Platforms, Partner Ecosystems & Enterprise Cloud",
  location: "Bengaluru, India",
  email: "mishra.satya2818@gmail.com",
  description:
    "Senior Product Manager at Oracle with 11+ years in enterprise cloud, data platforms and AI. Building platform capabilities and partner programs for ISVs, GSIs and SIs, and driving Generative and Agentic AI for Oracle AI Database 26ai.",
  links: {
    linkedin: "https://www.linkedin.com/in/satyabrata-mishra-7ba556196/",
    medium: "https://medium.com/@mishra.satya2818",
    oracleBlog: "https://blogs.oracle.com/authors/satyabrata-mishra",
    certPlatform: "https://www.oracle.com/autonomous-database/third-party-applications/",
  },
  // Set NEXT_PUBLIC_SITE_URL in Vercel once you have a custom domain.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
};

export const hero = {
  eyebrow: "Senior Product Manager · Oracle",
  headline: ["Building data & AI platforms", "partners and customers", "actually adopt."],
  summary:
    "Eleven years across enterprise cloud, data platforms and AI. At Oracle I own the product lifecycle for Cloud Database Services, Multicloud and Database Migration, from discovery and requirements through launch and adoption. I also own Oracle's partner-facing Third-Party Applications certification platform and build the integration, onboarding and enablement programs that shorten partner time-to-value. Before Oracle: six years of database consulting and migration delivery at Bosch and Capgemini.",
  now: "Driving Generative and Agentic AI for Oracle AI Database 26ai, turning Select AI, AI Vector Search, OML, Private Agent Factory and Property Graph into sales use cases for partners and field teams.",
  openTo: "Open to connecting with ISVs, cloud architects, enterprise PMs and anyone building AI-native data products.",
};

export const metrics = [
  { value: "11+", unit: "yrs", label: "in enterprise cloud, data platforms and AI" },
  { value: "25%", unit: "", label: "rise in AI deal registrations in two quarters" },
  { value: "40+", unit: "", label: "competitive workloads migrated from AWS RDS" },
  { value: "15+", unit: "", label: "tools in the certified partner ecosystem" },
  { value: "3×", unit: "", label: "qualified pipeline from the SE2 BYOL funnel" },
  { value: "50+", unit: "", label: "partner enablement workshops led" },
];

export const aiPortfolio = {
  intro:
    "I led launch and go-to-market for the Oracle AI Database 26ai capabilities. Positioning guides, battlecards and solution briefs turned them into sales use cases across 5+ field regions, competing against AWS Bedrock + Aurora, Azure AI + Cosmos DB and GCP Gemini + AlloyDB.",
  items: [
    { name: "Select AI", tag: "NL2SQL", text: "Ask questions of enterprise data in natural language, answered with SQL." },
    { name: "AI Vector Search", tag: "RAG", text: "Semantic search over business data, inside the database it already lives in." },
    { name: "Private Agent Factory", tag: "Agentic AI", text: "Building and running AI agents against private enterprise data." },
    { name: "Oracle Machine Learning", tag: "OML", text: "In-database machine learning without moving data out." },
    { name: "Property Graph", tag: "Graph", text: "Relationship analytics over connected data with SQL." },
  ],
};

export type CaseStudy = {
  kicker: string;
  title: string;
  problem: string;
  did: string;
  results: string[];
  href?: string;
};

export const work: CaseStudy[] = [
  {
    kicker: "Product owner · Platform",
    title: "Third-Party Applications certification platform",
    problem: "Customers needed to know which BI, ETL, catalog and observability tools work with Autonomous AI Database, and partners needed a place to prove it.",
    did: "Own the partner-facing certification matrix and search experience, and defined the connector and integration requirements behind it.",
    results: ["15+ certified tools", "~35% faster partner integration"],
    href: site.links.certPlatform,
  },
  {
    kicker: "AI launch & GTM",
    title: "Oracle AI Database 26ai sales use cases",
    problem: "New AI capabilities only drive revenue once partners and field teams can sell them against hyperscaler stacks.",
    did: "Led launch and GTM for Select AI, AI Vector Search, OML, Private Agent Factory and Property Graph with positioning, battlecards and solution briefs.",
    results: ["~25% more AI deal registrations", "Adopted across 5+ field regions"],
  },
  {
    kicker: "Multi-tenant platform",
    title: "Elastic Pools for SaaS ISVs",
    problem: "SaaS ISVs running a database per tenant were paying for idle capacity in every one of them.",
    did: "Led product strategy for Elastic Pool architecture, letting tenant databases share compute and storage dynamically.",
    results: ["30%+ SaaS ISV adoption", "~25% lower per-tenant consumption", "~20% larger commitments"],
  },
  {
    kicker: "Competitive migration",
    title: "AWS RDS → Autonomous Database migration service",
    problem: "Competitive workloads were stuck on RDS because moving them looked risky and slow.",
    did: "Designed and launched assessment tooling, pre-flight validation and partner-delivered execution playbooks as one service.",
    results: ["40+ competitive workloads migrated", "Measurable lift in influenced ARR"],
  },
  {
    kicker: "Resilience & compliance",
    title: "Backup-based DR for MSMEs",
    problem: "Active-active DR was out of reach for cost-sensitive customers who still had regulatory continuity requirements.",
    did: "Defined and brought to market a backup-based DR offering as a lower-cost alternative to active Data Guard.",
    results: ["30%+ DR attach rate", "~½ the cost of active-active", "New Oracle DR product line"],
  },
  {
    kicker: "Partner onboarding",
    title: "90-day Multicloud Migration Sprint for GSIs",
    problem: "Global System Integrators needed a faster, standard way to deliver multicloud migrations.",
    did: "Designed the program with product marketing: structured onboarding, technical enablement and milestone-based execution.",
    results: ["10+ GSI delivery pods onboarded", "~35% shorter migration cycles"],
  },
  {
    kicker: "Adoption funnel",
    title: "SE2 BYOL upgrade path",
    problem: "Customers holding Standard Edition 2 licenses had no low-friction way to move to the cloud.",
    did: "Built the go-to-market for a new BYOL adoption funnel and turned it into a repeatable SI co-sell motion.",
    results: ["3× qualified pipeline in two quarters"],
  },
  {
    kicker: "Ecosystem",
    title: "Informatica IDMC & MDM on Autonomous AI Database",
    problem: "Enterprise data-management customers needed their Informatica stack to run on Oracle's AI database.",
    did: "Co-defined the integration architecture and joint GTM messaging with Informatica.",
    results: ["~25% joint pipeline growth"],
  },
];

export const experience = [
  {
    company: "Oracle",
    role: "Senior Product Manager",
    period: "Jul 2021 — Present",
    location: "Bengaluru",
    summary:
      "End-to-end inbound and outbound product management for Oracle Cloud Database Services (Autonomous Database, BaseDB, ExaCS), Multicloud and the Database Migration portfolio, including partner-facing integration, onboarding and enablement programs. Current mandate spans Gen AI and Agentic AI on Oracle AI Database 26ai. Accountable for portfolio profitability and investment budget; drives execution through Product, Operating and Business Reviews with product and technology leadership.",
    highlights: [
      "Ran 40+ user interviews, usability studies and AI-leveraged market research with designers, data scientists and UX researchers to shape the Multicloud roadmap; sign-off cycles shortened ~20%.",
      "AI-assisted prototyping cut concept turnaround from weeks to days.",
      "Led 50+ partner enablement workshops and mentored a distributed team of partner enablement leads; Autonomous Database consumption among enabled partners rose 20%+.",
      "Manage strategic ISV partnerships (Finacle, Cohesity, Manhattan Associates, Sabre) and SI alliances (TCS, Infosys, Wipro).",
    ],
  },
  {
    company: "Robert Bosch",
    role: "Database Consultant / Migration Specialist · IoT Cloud Services (BICS)",
    period: "Jul 2017 — May 2021",
    location: "Bengaluru",
    summary:
      "Migration lead for Bosch IoT Cloud Services: owned planning, execution and post-migration validation, and wrote PRDs and user stories with acceptance criteria across Agile sprints.",
    highlights: [
      "Delivered 100+ production migrations with a post-migration incident rate under 2%.",
      "Designed a Migration Automation Framework that cut manual effort ~40% and took cycles from weeks to days.",
      "Ran Oracle and MySQL on AWS and OCI with GoldenGate for zero-downtime replication and Kafka/Hadoop streaming; 99.9%+ uptime.",
      "Built a Product Availability Dashboard that cut mean time to detect ~30%, adopted for executive reporting.",
    ],
  },
  {
    company: "Capgemini",
    role: "Database Consultant",
    period: "Oct 2015 — Jul 2017",
    location: "Bengaluru",
    summary: "Oracle database solution design and architecture across 10+ enterprise client engagements, across the full lifecycle from installation to cross-platform migration.",
    highlights: [
      "Reduced planned downtime ~20% across patching, cloning, refreshes and upgrades.",
      "Led ITIL escalation handling, resolving 95%+ of incidents within SLA.",
    ],
  },
];

export const partners = ["Finacle", "Cohesity", "Manhattan Associates", "Sabre", "Informatica", "TCS", "Infosys", "Wipro"];

export const approach = [
  {
    step: "01",
    name: "Discovery",
    text: "User interviews, usability studies, CX assessment, win/loss analysis, A/B testing and AI-assisted prototyping to test ideas before they hit the roadmap.",
  },
  {
    step: "02",
    name: "Delivery",
    text: "Roadmap and prioritization, PRDs and BRDs, OKR/KPI frameworks, Agile release management and SLA/SLO targets engineering can build against.",
  },
  {
    step: "03",
    name: "Distribution",
    text: "Positioning, pricing and packaging, partner onboarding and certification, field enablement and co-sell. This is the work that turns a launch into adoption.",
  },
];

export const skills = [
  {
    group: "AI & experience platforms",
    items: ["Generative AI", "Agentic AI (Private Agent Factory)", "Select AI (NL2SQL)", "AI Vector Search", "Oracle Machine Learning", "Property Graph", "Prompt engineering", "AI-assisted prototyping", "AI-leveraged market research"],
  },
  {
    group: "Partner ecosystem",
    items: ["ISV / GSI / SI programs", "Partner onboarding & enablement", "Certified integrations", "Co-sell & joint GTM", "Deal registration growth", "Field enablement", "Voice of customer"],
  },
  {
    group: "Product strategy & lifecycle",
    items: ["Roadmap planning", "Prioritization", "PRD / BRD", "OKR / KPI frameworks", "Pricing & packaging (BYOL)", "ARR / NRR growth", "Product-led growth", "Competitive positioning", "P&L / budget ownership"],
  },
  {
    group: "Cloud, data & trust",
    items: ["Autonomous Database (19c → 26ai)", "ExaCS", "BaseDB", "Elastic Pools", "Refreshable Clones", "MySQL HeatWave", "AWS RDS", "OCI IaaS / PaaS", "Multicloud & hybrid", "Migration frameworks", "DR strategy", "SLA / SLO (RTO / RPO)"],
  },
  {
    group: "Discovery & delivery",
    items: ["User interviews", "Usability studies", "CX assessment", "Win / loss analysis", "A/B testing", "Wireframing", "Agile / Scrum", "Release management", "Team leadership & mentoring"],
  },
  {
    group: "Tools",
    items: ["Jira", "Confluence", "Aha!", "Productboard", "Figma", "Miro", "Notion", "Amplitude / Mixpanel", "Google Analytics", "Power BI", "SQL", "Python", "Postman / REST APIs", "Claude", "ChatGPT", "Copilot", "Cursor"],
  },
];

export type Article = { title: string; href: string; note?: string };

export const writing: { outlet: string; href: string; articles: Article[] }[] = [
  {
    outlet: "Oracle Database Blog",
    href: site.links.oracleBlog,
    articles: [
      {
        title: "Migrating from AWS RDS to Oracle Autonomous Database via Data Pump",
        href: "https://blogs.oracle.com/database/migrating-from-aws-rds-to-oracle-autonomous-database",
        note: "Mar 2022",
      },
    ],
  },
  {
    outlet: "Medium",
    href: site.links.medium,
    articles: [
      {
        title: "AI-Ready Data Sharing with Oracle Autonomous AI Database",
        href: "https://medium.com/@mishra.satya2818/ai-ready-data-sharing-with-oracle-autonomous-ai-database-9bde1838326a",
      },
      {
        title: "Sidecar Databases on OCI: A Practical Strategy for Modernization and Legacy Workloads",
        href: "https://medium.com/@mishra.satya2818/a-practical-guide-to-sidecar-databases-with-autonomous-database-on-oci-b13c33aa39ea",
      },
      {
        title: "ECPUs vs. OCPUs: Revolutionizing Oracle Autonomous Databases",
        href: "https://medium.com/@mishra.satya2818/ecpus-vs-ocpus-revolutionizing-oracle-autonomous-databases-2802ad4a94cc",
      },
    ],
  },
];

export const education = [
  { title: "Product Management Specialization", org: "Indian School of Business (ISB) · Hello PM", year: "2022" },
  { title: "B.Tech, Electrical & Electronics Engineering", org: "Biju Patnaik University of Technology", year: "2013" },
];

export const certifications = [
  "Oracle AI Database 26ai Specialist",
  "Oracle Cloud Infrastructure (OCI) Certified",
  "Oracle Database Cloud Certified",
];
