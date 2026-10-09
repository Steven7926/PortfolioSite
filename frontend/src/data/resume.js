
import iexLogo from "../assets/svgs/IEX.svg";
import theraplanLogo from "../assets/TheraplanLogo.png";
import magicmedsApp from "../assets/MagicMedsApp.jpg";
import magicmedsLogo from "../assets/magicmeds.png";
import onlySocksApp from "../assets/OnlySocks.jpg";
import sockLogo from "../assets/sock.png";
import steakationsShot from "../assets/steakations.png";
import { spelled, yearsSince } from "../utils/time";

const GITHUB = "https://github.com/Steven7926";
const IEX_START = "2021-09";
const iexYears = spelled(yearsSince(IEX_START));
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

export const profile = {
  name: "Steven Hudson",
  handle: "steven@hudson",
  title: "Principal Full Stack Engineer",
  focus: ["Full Stack", "DevSecOps", "Distributed Systems", "AI Engineering"],
  location: "Tampa, FL",
  clearance: "Active TS/SCI",
  email: "steven7926@gmail.com",
  github: GITHUB,
  linkedin: "https://www.linkedin.com/in/steven-h-42a79714b/",
  site: "https://steventhudson.com",
  hobbies: ["Soccer", "Travel", "Eating"],
  careerStart: "2017-06",
  summary:
    "Principal full stack engineer who owns features end to end — React front ends, Go and Python services, " +
    `and the Kubernetes, Helm, and GitOps pipelines that ship them. ${capitalize(iexYears)} years building mission software for ` +
    "government customers, including air-gapped AI inference, federated search, and Section 508–compliant UIs. " +
    "Has stepped in as acting team lead; known as a clear communicator who documents well and helps teammates without judgment.",
  about: [
    "I'm a principal full stack engineer in Tampa who likes owning a feature all the way down — the React UI, the Go or Python service behind it, and the Helm chart and ArgoCD pipeline that ship it.",
    "At Iron EagleX I build mission software for government customers: federated search, accessible USWDS front ends, GitOps delivery to Kubernetes, and self-hosted AI inference in air-gapped environments. When our lead is out, I run deployments and keep the team pointed in the right direction.",
    "Before that I spent four years at TheraPlan, growing from QA and support into full stack .NET development while earning a Computer Engineering degree at UCF.",
  ],
};

export const experience = [
  {
    id: "iron-eaglex",
    file: "iron-eaglex.log",
    company: "Iron EagleX",
    url: "https://ironeaglex.com/",
    location: "Tampa, FL",
    role: "Principal Full Stack Engineer",
    start: IEX_START,
    period: "Sep 2021 – Present",
    badge: "Active TS/SCI",
    logo: iexLogo,
    logoTile: "dark",
    summary:
      "Mission software for government customers — from React front ends to Go and Python services to the Kubernetes platform they run on.",
    groups: [
      {
        label: "product & frontend",
        items: [
          "Led frontend and feature development of an end-to-end deconfliction application built from initial requirements; contributed architecture documentation and design discussion.",
          "Built a full-stack federated index search experience — React/Relay → GraphQL (Go) → Elasticsearch — delivering fast search across indices.",
          "Built accessible React components on USWDS (U.S. Web Design System) that meet federal UX and Section 508 accessibility standards.",
          "Shipped features across Python, Java, TypeScript, and Go services as part of a SAFe Agile Release Train (Jira, Confluence).",
        ],
      },
      {
        label: "platform & devsecops",
        items: [
          "Designed developer-facing CI/CD pipelines with GitLab CI, Jenkins, ArgoCD, and AWS Lambda — automated testing, security scanning, container image builds, and GitOps deployments to Kubernetes.",
          "Deployed and managed microservices on Kubernetes (Rancher) with Helm charts and declarative manifests, improving release reliability and environment consistency across multiple applications.",
          "Ran VM lifecycle operations — provisioning, patching, snapshots, rollback, decommissioning — by hand and with Ansible playbooks using PKI-based auth across KVM/libvirt and OpenStack.",
        ],
      },
      {
        label: "ai & data",
        items: [
          "Deployed and benchmarked self-hosted model inference stacks in air-gapped environments, weighing quantization trade-offs against GPU VRAM limits to support on-premise AI workloads.",
          "Facilitated inter-agency collaboration to assess and field emerging AI capabilities, coordinating geographically dispersed teams to deploy and sustain production systems for government mission priorities.",
          "Wrote Python tooling to query Elasticsearch and consume AWS Kinesis streams in support of data analytics.",
        ],
      },
      {
        label: "leadership",
        items: [
          "Acting team lead in the lead's absence — directed deployments, coordinated the team, and set technical direction.",
          "Frontend subject-matter expert across multiple applications.",
        ],
      },
    ],
    stack: [
      "TypeScript", "React", "Relay", "GraphQL", "Go", "Python", "Java", "Elasticsearch",
      "Kubernetes", "Helm", "Rancher", "ArgoCD", "GitLab CI", "Jenkins", "AWS", "Ansible", "OpenStack", "USWDS",
    ],
  },
  {
    id: "theraplan",
    file: "theraplan.log",
    company: "TheraPlan",
    url: "https://theraplan.com",
    location: "Orlando, FL",
    role: "Full Stack Developer",
    roleNote: "progressed from QA & Technical Support",
    start: "2017-06",
    period: "Jun 2017 – Aug 2021",
    logo: theraplanLogo,
    logoTile: "light",
    summary:
      "Grew from black-box tester and support desk into full stack development on a therapy practice-management platform — while finishing my degree.",
    groups: [
      {
        label: "development",
        items: [
          "Cut report deployment time by 50% by building a C# automation tool for report deployment.",
          "Built SSRS reports and embedded them directly in the web application, removing reliance on an external reporting portal.",
          "Developed full stack .NET features in C#, JavaScript, SQL, HTML, and CSS.",
          "Wrote SQL views and queries and maintained stored procedures in SQL Server (SSMS); produced business-intelligence metrics that surfaced exceptions and anomalies.",
        ],
      },
      {
        label: "quality & support",
        items: [
          "Ran manual and automated black-box and white-box testing; tracked bugs, recommendations, and user feedback in Azure DevOps.",
          "Worked the support desk, triaging customer issues by priority and resolving them quickly.",
        ],
      },
    ],
    stack: ["C#", ".NET", "JavaScript", "SQL Server", "SSRS", "SSMS", "Azure DevOps", "TFVC"],
  },
];

export const skills = [
  {
    id: "languages",
    label: "languages",
    title: "Languages",
    tiers: [
      { level: "production", items: ["TypeScript", "JavaScript", "Python", "Go", "Java", "SQL"] },
      { level: "working", items: ["C#", "C", "PHP"] },
      { level: "academic", items: ["Haskell", "Erlang", "Verilog", "MIPS32"] },
    ],
  },
  {
    id: "frontend",
    label: "frontend",
    title: "Frontend",
    items: [
      "React", "Next.js", "React Native", "Relay", "GraphQL", "TanStack Query",
      "Tailwind", "Radix UI", "Material UI", "USWDS", "Bootstrap", "jQuery",
    ],
  },
  {
    id: "backend",
    label: "backend",
    title: "Backend",
    items: ["Node.js", "Express", "Go (Chi)", "FastAPI", "Spring Boot", ".NET", "Gradle"],
  },
  {
    id: "data",
    label: "data & search",
    title: "Data & Search",
    items: ["Elasticsearch", "SQL Server", "PostgreSQL", "MongoDB", "AWS Kinesis", "SSRS"],
  },
  {
    id: "cloud",
    label: "cloud & platform",
    title: "Cloud & Platform",
    items: [
      "AWS Lambda", "EKS", "EC2", "S3", "RDS", "IAM", "CloudWatch",
      "Docker", "Kubernetes", "Helm", "Rancher", "OpenStack", "KVM/libvirt",
    ],
  },
  {
    id: "devsecops",
    label: "ci/cd & devsecops",
    title: "CI/CD & DevSecOps",
    items: [
      "GitLab CI", "Jenkins", "ArgoCD", "GitOps", "Ansible", "Security scanning", "PKI",
      "Git", "GitHub", "Azure DevOps / TFVC",
    ],
  },
  {
    id: "identity",
    label: "identity & access",
    title: "Identity & Access",
    items: ["Keycloak SSO", "OpenFGA", "AuthTS"],
  },
  {
    id: "ai",
    label: "ai engineering",
    title: "AI Engineering",
    items: ["Self-hosted inference", "Model quantization", "GPU / VRAM sizing", "Air-gapped deployment", "RAG", "Ollama", "Open WebUI"],
  },
  {
    id: "practices",
    label: "practices",
    title: "Practices",
    items: ["SAFe Agile", "Jira", "Confluence", "Section 508 / a11y", "Architecture docs", "Mentoring"],
  },
];

const repo = (name, path = "") => `${GITHUB}/${name}${path}`;

export const projects = [
  {
    id: "graphqlastic",
    name: "GraphQLastic",
    tagline: "Page through huge datasets fast — React → GraphQL (Go) → Elasticsearch.",
    bullets: [
      "React + TypeScript front end over a Go (Chi) GraphQL API, with Elasticsearch as the document store.",
      "GraphQL pagination end to end keeps client load low while searching 50,000+ indexed documents.",
      "Whole stack comes up with one docker compose; a Python script seeds the index.",
    ],
    stack: ["React", "TypeScript", "Go", "Chi", "GraphQL", "Elasticsearch", "Docker"],
    links: [{ label: "source", href: repo("GraphQLastic") }],
    onResume: true,
  },
  {
    id: "lets-rag",
    name: "lets-rag",
    tagline: "A self-hosted LLM chat stack you can stand up with one command.",
    bullets: [
      "Open WebUI talks to a FastAPI layer that streams and proxies Ollama's API, with a /rag router for retrieval.",
      "Runs Gemma 3 (4B) for chat and nomic-embed-text for embeddings entirely on local hardware.",
      "Health-checked services orchestrated with Docker Compose.",
    ],
    stack: ["Python", "FastAPI", "Ollama", "Open WebUI", "Docker"],
    links: [{ label: "source", href: repo("lets-rag") }],
    onResume: true,
  },
  {
    id: "magicmeds",
    name: "MagicMeds",
    tagline: "An automatic pill dispenser — UCF senior design, which I led.",
    icon: magicmedsLogo,
    image: { src: magicmedsApp, alt: "MagicMeds mobile app showing a list of scheduled medications", portrait: true },
    bullets: [
      "React Native app (MongoDB, Express, Node) for scheduling doses and notifying patients and caregivers.",
      "Web portal so caregivers can check medication schedules remotely.",
      "Raspberry Pi device UI in Python pulls schedules and triggers each drop.",
      "Custom motor-controller PCB (ATmega328 over SPI) drives the steppers, inside a fully 3D-printed housing.",
    ],
    stack: ["React Native", "MongoDB", "Express", "Node", "Python", "Raspberry Pi", "PCB design", "3D printing"],
    links: [
      { label: "mobile app", href: repo("MagicMeds", "/tree/main/MobileUI") },
      { label: "caregiver portal", href: repo("MagicMeds", "/tree/main/CaregiverPortal") },
      { label: "device ui", href: repo("MagicMeds", "/tree/main/DeviceUI") },
      { label: "mcu", href: repo("MagicMeds", "/tree/main/Microcontroller") },
      { label: "server", href: repo("MagicMeds", "/tree/main/Server") },
    ],
    videos: ["-0bP6SvqajM", "3JALGwyClF8", "-pVUCsU-33M"],
    wide: true,
    onResume: true,
  },
  {
    id: "restaurant-app",
    name: "Restaurant Decision App",
    tagline: "Swipe together, match on dinner — no more “I don't care, you pick.”",
    bullets: [
      "Real-time React Native app with an Express backend and MongoDB-backed sessions.",
      "WebSocket session sync keeps every phone in the group live.",
      "Pulls nearby restaurants from the Google Places API; a swipe-based matcher finds the group's pick.",
    ],
    stack: ["React Native", "Express", "MongoDB", "WebSockets", "Google Places API"],
    links: [],
    onResume: true,
  },
  {
    id: "uptime-dashboard",
    name: "uptime-dashboard",
    tagline: "A small uptime monitor with a Kubernetes-native dev loop.",
    bullets: [
      "React + TypeScript (Vite) dashboard on a FastAPI + SQLAlchemy service backed by PostgreSQL.",
      "Kubernetes manifests with a Tilt-driven local dev loop, plus Docker Compose.",
    ],
    stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Kubernetes", "Tilt"],
    links: [{ label: "source", href: repo("uptime-dashboard") }],
  },
  {
    id: "template-tool",
    name: "PDF Template Tool",
    tagline: "Excel in, QR-coded PDF templates out — and scanned drawings back in.",
    bullets: [
      "Python service turns Excel datasets into PDF templates, each stamped with a QR code that maps to a MongoDB document.",
      "Scanned PDFs are matched back by QR code, and the drawings are cropped and attached to the right record.",
      "Searchable, sortable, paginated data table with CSV/XLSX export; fully Dockerized.",
    ],
    stack: ["Python", "TypeScript", "React", "MongoDB", "Docker"],
    links: [{ label: "source", href: repo("TemplateToolWeb") }],
  },
  {
    id: "steakations",
    name: "Steakations",
    tagline: "A blog about steakhouses we travel to — hosted for pennies.",
    image: { src: steakationsShot, alt: "Steakations blog home page" },
    bullets: [
      "Dockerized WordPress authoring environment exported to static assets.",
      "Served from a private S3 bucket through CloudFront, with Route 53 DNS.",
    ],
    stack: ["WordPress", "Docker", "S3", "CloudFront", "Route 53"],
    links: [
      { label: "live", href: "https://stevenlaurensteakations.com/" },
      { label: "source", href: repo("Steakations") },
    ],
  },
  {
    id: "onlysocks",
    name: "OnlySocks",
    tagline: "A social network where you can only post about socks.",
    icon: sockLogo,
    image: { src: onlySocksApp, alt: "OnlySocks mobile login screen", portrait: true },
    bullets: [
      "MERN web app plus a React Native client with matching features.",
      "Auth with password reset, posts, likes, comments, and friend connections.",
      "Ran on EC2 with S3 for images, behind CloudFront and Route 53.",
    ],
    stack: ["MongoDB", "Express", "React", "React Native", "Node", "AWS"],
    links: [{ label: "source", href: repo("OnlySocks") }],
  },
];

export const archive = [
  { name: "ContactManager", note: "LAMP contact manager with jQuery DataTables search", href: repo("ContactManager") },
  { name: "EventManager", note: "LAMP event manager with host / admin / attendee roles", href: repo("EventManager") },
  { name: "SchoolClasses", note: "coursework from my Computer Engineering degree", href: repo("SchoolClasses") },
];

export const education = {
  school: "University of Central Florida",
  url: "https://www.ucf.edu",
  location: "Orlando, FL",
  period: "2017 – 2021",
  degree: "B.S. Computer Engineering",
  minor: "Mathematics",
  coursework: [
    "Computer Architecture", "Data Structures", "Embedded Systems", "Software Design",
    "Circuit Theory", "Mathematics", "Physics",
  ],
};

export const leadership = [
  {
    role: "Acting Team Lead",
    org: "Iron EagleX",
    detail: "Set expectations, coordinated deployments, and mentored teammates while the team lead was out.",
  },
  {
    role: "Frontend SME",
    org: "Iron EagleX",
    detail: "Go-to frontend expert across several applications.",
  },
  {
    role: "Web Development Director",
    org: "UCF Association for Computing Machinery",
    period: "2020 – 2021",
    detail: "Taught web and mobile fundamentals, ran intro workshops, and helped members build their own side projects.",
  },
  {
    role: "Senior Design Team Lead",
    org: "UCF · MagicMeds",
    detail: "Planned and scheduled the work, kept us on deadline, and unblocked teammates on an automatic pill dispenser.",
  },
];
