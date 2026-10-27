export const PROJECTS = [
  {
    slug: "tvbox-server",
    title: "Built my own home cloud",
    hidden: false,
    description:
      "Modified and compiled a custom Armbian image to run on a DQ08 TV box, turning it into a Linux server available on my local network for hosting services and data workloads.",
    tech: [
      "Linux",
      "Docker",
      "Hardware",
    ],
    link: "https://gist.github.com/jeantigreros/71accf8e4a8602bc5a904d62e339d53a",
    demo: false,
    code: false,
  },

  {
    slug: "python-odoo-script",
    title: "Odoo windows bridge ESC/POS",
    hidden: false,
    description:
      "Lightweight Python/Flask print bridge for Odoo POS that enables Odoo to communicate with standard Windows thermal printers, with support for receipt scaling, centering, cash drawers, automatic cutting, and printer locking.",
    tech: [
      "Flask",
      "Web Server",
      "Python",
      "XML"
    ],
    link: "https://github.com/jeantigreros/python-odoo-script",
    demo: false,
    code: true,
  },
  {
    slug: "gruposinnsa",
    title: "Grupo SiNNSA",
    hidden: false,
    description:
      "Built a full-stack web platform for Grupo SINNSA to strengthen its digital presence and streamline client contact. The project covered UI design, system architecture, and backend development for managing content and inquiries. The solution is optimized for performance, SEO, and user experience, letting the company present its services in a professional, scalable way.",
    tech: [
      "Frontend Development",
      "Backend Development",
      "Web Design",
      "Systems Architecture",
      "SEO Optimization"
    ],
    link: "https://gruposinnsa.com/",
    demo: false,
    code: false,
  },
  {
    slug: "checkdisks",
    title: "Custom ETL pipeline for HDD indexing",
    hidden: false,
    description: "ETL pipeline for storing hard/solid drive information, integrated with a script that checks drive health with SMART. The script produces JSON with disk info, and the pipeline ingests the data, cleans it, and outputs a Parquet file with analysis-ready data.",
    tech: [
      "SMART",
      "Python",
      "Pandas",
      "JSON",
      "ETL",
      "Data Engineering"
    ],
    link: "https://github.com/jeantigreros/checkdisks",
    demo: false,
    code: true,
  }
]

export const SITE_TITLE = 'Astro Blog';
export const SITE_DESCRIPTION = 'Welcome to my website!';
