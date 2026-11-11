// Experience timeline data — ordered newest first
// IoT & ML Developer is in Projects, not Experience

export const experienceData = [
  {
    id: 'slt-intern',
    role: 'AI/ML Engineer Intern',
    subtitle: 'Internship',
    company: 'Sri Lanka Telecom',
    companyFull: 'Sri Lanka Telecom',
    period: '10/2026 – Present',
    location: 'Colombo, Sri Lanka',
    isCurrent: true,
    image: '/images/experience/slt.jpg',
    primaryFocus: 'RAG Based Application Development',
    environment: 'Telecom Infrastructure',
    deliveryPhase: 'In Progress',
    bullets: [
      // TODO: replace with real bullets once you provide SLT work details
      'Developing AI and machine learning solutions to support telecommunications workflows and data analytics initiatives.',
      'Collaborating with engineering teams to explore agentic pipelines and automated intelligence frameworks.',
    ],
    tags: ['Python', 'Machine Learning', 'Data Pipelines', 'AI Solutions'],
  },
  {
    id: 'doe-intern',
    role: 'AI Application Engineer Intern',
    subtitle: 'Internship',
    company: 'Dept. of Examinations, Sri Lanka',
    companyFull: 'Department of Examinations, Sri Lanka',
    period: '02/2026 – 10/2026',
    location: 'Pelawatta, Sri Lanka',
    isCurrent: false,
    image: 'D:\Git\Portfolio_Dineth\public\images\experience\doe.jpg',
    primaryFocus: 'Exam Assessment AI Automations',
    environment: 'Public Sector AI',
    deliveryPhase: '4-Workflow Pipeline',
    bullets: [
      'Architected a multi-agent LLM pipeline on Dify with a 4-workflow system (Coordinator, Context, Generation, Validation) and Redis-backed state management to prevent payload corruption during tool calls.',
      "Engineered a self-correcting retry loop that regenerates failed assessment questions using structured feedback across 6 quality metrics (Bloom's taxonomy, distractor quality, difficulty calibration, etc.).",
      'Built a hybrid GraphRAG + vector retrieval layer using Neo4j, Qdrant, and LightRAG for traceable context grounding from raw curriculum materials.',
      'Refined the automated validation workflow with strict context-validation logic to keep generated assessment items factually aligned with official syllabus materials.',
    ],
    tags: ['Dify', 'Multi-Agent', 'Neo4j', 'Qdrant', 'LightRAG', 'Redis', 'GraphRAG', 'FastAPI'],
  },
];
