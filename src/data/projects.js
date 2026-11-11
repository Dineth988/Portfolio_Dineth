// Projects data
// Featured projects (editorial index with accordion reveal)
// Secondary projects (compact cards under 'More projects')

export const featuredProjects = [
  {
    id: '01',
    title: 'Enterprise Knowledge Assistant',
    type: 'AI / RAG',
    hook: 'Production AI Q&A agent with vector search, structured JSON extraction, and webhook automation.',
    problem: 'Teams lose substantial time searching through scattered company documents for critical answers and manually transcribing data into auxiliary business tools.',
    solution: 'An AI Q&A agent built with FastAPI and LangChain that answers document queries via a Qdrant vector database, searches document archives, extracts structured JSON, and triggers external automated webhooks.',
    impact: 'Fully containerized with Docker & Docker Compose for zero-friction local setup and cloud deployment. Enables reliable, grounded document intelligence at scale.',
    stack: ['Python', 'FastAPI', 'LangChain', 'Qdrant', 'Docker', 'Docker Compose'],
    github: 'https://github.com/Dineth988/Enterprise_Knowledge_Assistant/blob/main/README.md', // TODO: update with exact repo link if public
    live: null
  },
  {
    id: '02',
    title: 'Multi-Agent Exam Question Generation Pipeline',
    type: 'Agentic AI (Dept. of Examinations)',
    hook: '4-workflow multi-agent system on Dify with Redis state management and GraphRAG grounding.',
    problem: 'Auto-generated assessment questions frequently drift from official syllabus constraints, exhibit inconsistent difficulty, or fail quality standards.',
    solution: 'Architected a 4-workflow multi-agent system (Coordinator, Context, Generation, Validation) on Dify with Redis-backed state management, hybrid GraphRAG + vector retrieval (Neo4j, Qdrant, LightRAG), and a self-correcting retry loop.',
    impact: 'Enforces strict context validation against raw curriculum materials and evaluates generated items across 6 rigorous pedagogical metrics (Bloom’s taxonomy, distractor quality, difficulty calibration).',
    stack: ['Dify', 'Redis', 'Neo4j', 'Qdrant', 'LightRAG'],
    isPrivate: true,
    privateNote: 'Internal government internship project. Described at a high architectural level; source code is private.',
    github: null, // TODO: private project
    live: null
  },
  {
    id: '03',
    title: 'Smart Waste Bin & Waste Management System',
    type: 'IoT + Machine Learning',
    hook: 'Edge computer vision system classifying recyclable waste with MobileNetV2 and real-time Flutter app.',
    problem: 'Manual waste segregation is inconsistent and error-prone, severely hindering municipal recycling efficiency and sustainability.',
    solution: 'An IoT smart bin powered by a fine-tuned MobileNetV2 model running directly with ESP32-CAM to classify plastic versus organic waste in real time, accompanied by a Flutter mobile management app.',
    impact: 'Achieved 88% classification accuracy on resource-constrained edge hardware with data preprocessing and automated bin level monitoring.',
    stack: ['TensorFlow', 'Keras', 'MobileNetV2', 'ESP32-CAM', 'Flutter'],
    github: 'https://github.com/Dineth988', // TODO: update with exact repo link
    live: null
  }
];

export const secondaryProjects = [
  {
    title: 'Portfolio Website',
    type: 'Personal Portfolio',
    tech: 'React · Tailwind CSS · Framer Motion',
    problem: 'Need an editorial, modern, high-performance platform to showcase AI engineering capabilities and experience.',
    solution: 'Engineered a bespoke portfolio using React 19, Tailwind CSS, and Framer Motion with the Ivory & Ink design language and theme switching.',
    github: 'https://github.com/Dineth988/Portfolio_Dineth',
    live: null
  },
  {
    title: 'Bloggie Blog Platform',
    type: 'Web Application',
    tech: 'Next.js · Nest.js · JWT Auth',
    problem: 'Requires a secure, role-based content platform with scalable data handling.',
    solution: 'Full-stack blog platform featuring secure JWT authentication, role-based access control, and dynamic CRUD blog management.',
    github: 'https://github.com/Dineth988', // TODO: confirm GitHub repo link
    live: null
  },
  {
    title: 'Hotel Management System',
    type: 'Academic Project',
    tech: 'React.js · Spring Boot · Java',
    problem: 'Managing hotel inventory, room reservations, and guest bookings across separate legacy records.',
    solution: 'Built a centralized reservation simulation covering room scheduling, guest checking, and backend state handling.',
    github: 'https://github.com/Dineth988', // TODO: confirm GitHub repo link
    live: null
  },
  {
    title: 'Resource Sharing Platform',
    type: 'Group Project',
    tech: 'Vue.js · Express.js · REST APIs',
    problem: 'Students and educators need a unified space to publish, search, and retrieve peer learning materials.',
    solution: 'Developed an educational portal facilitating seamless file uploads, categorized resource exploration, and RESTful indexing.',
    github: 'https://github.com/Dineth988', // TODO: confirm GitHub repo link
    live: null
  }
];
