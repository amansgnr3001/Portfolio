/**
 * Single source of truth for all portfolio copy.
 * Items marked VERIFY are details I could not confirm — please check them
 * against your resume before publishing.
 */

export const profile = {
  name: 'Aman Purohit',
  role: 'Full-Stack & Backend Engineer',
  headline: 'Building real-time, AI-powered systems.',
  intro:
    'I design, build and deploy scalable applications with Node.js, React, Docker, LiveKit, AI agents and cloud infrastructure — from the WebRTC media path to the product on screen.',
  email: 'amansog222@gmail.com', // VERIFY
  github: 'https://github.com/amansog222', // VERIFY
  linkedin: 'https://www.linkedin.com/', // VERIFY: replace with your profile URL
  resume: '/resume.pdf', // Put your PDF at public/resume.pdf
};

export const navLinks = [
  { label: 'Impact', href: '#impact' },
  { label: 'Work', href: '#work' },
  { label: 'Engineering', href: '#engineering' },
  { label: 'Experience', href: '#experience' },
  { label: 'GitHub', href: '#github' },
];

export const metrics = [
  { prefix: '', value: 15, suffix: '+', label: 'Brands', desc: 'using the video platform' },
  { prefix: '~', value: 15, suffix: '', label: 'Concurrent calls', desc: 'with recording on a 4 vCPU EC2 instance' },
  { prefix: '', value: null, text: 'Production', label: 'LiveKit deployment', desc: 'self-hosted, Dockerised, behind Nginx' },
  { prefix: '', value: null, text: 'Voice AI', label: 'Agent with RAG', desc: 'STT + RAG + LLM + TTS in real time' },
];

export const projects = [
  {
    index: '01',
    kicker: 'Real-time infrastructure',
    title: 'Real-Time Video Communication Platform',
    description:
      'A self-hosted WebRTC platform for live video consultations, with a recording pipeline and an infrastructure footprint small enough to run on a single EC2 instance.',
    problem:
      'Replace a third-party video dependency with infrastructure we control — including per-track recording and post-processing — without a heavy cost per call.',
    pipelineTitle: 'Media pipeline',
    pipeline: ['Browser', 'Nginx', 'LiveKit', 'Track Egress', 'S3', 'FFmpeg'],
    tech: ['LiveKit', 'WebRTC', 'Track Egress', 'FFmpeg', 'Docker', 'AWS EC2', 'Nginx'],
    links: [
      { label: 'Watch demo', href: '#', kind: 'primary' as const, icon: 'play' as const },
      { label: 'Case study', href: '#engineering', kind: 'ghost' as const, icon: 'layers' as const },
      { label: 'Source', href: '#', kind: 'ghost' as const, icon: 'github' as const },
    ],
  },
  {
    index: '02',
    kicker: 'Applied AI',
    title: 'AI Voice & Product Agent',
    description:
      'A multilingual voice agent that answers product questions in real time — grounded in a retrieval layer and capable of structured, UI-driving responses.',
    problem:
      'Turn a static product catalogue into a natural conversation: low-latency speech in, grounded answer out, with interruption handling.',
    pipelineTitle: 'Voice pipeline',
    pipeline: ['Mic', 'Silero VAD', 'Whisper STT', 'RAG', 'LLM', 'Sarvam TTS'],
    tech: ['LiveKit Agents', 'RAG', 'Whisper', 'Silero VAD', 'Sarvam TTS', 'LangGraph'],
    links: [
      { label: 'Talk to the agent', href: '#', kind: 'primary' as const, icon: 'mic' as const },
      { label: 'Architecture', href: '#engineering', kind: 'ghost' as const, icon: 'layers' as const },
      { label: 'Source', href: '#', kind: 'ghost' as const, icon: 'github' as const },
    ],
  },
  {
    index: '03',
    kicker: 'Full-stack',
    title: 'Real-Time Transit Platform',
    description:
      'Live vehicle tracking over bidirectional WebSocket channels, with a map-based UI and dynamic route handling.',
    problem: '',
    pipelineTitle: '',
    pipeline: [] as string[],
    tech: ['React', 'TypeScript', 'Node.js', 'WebSockets', 'Maps API'],
    links: [
      { label: 'Live demo', href: '#', kind: 'primary' as const, icon: 'play' as const },
      { label: 'Source', href: 'https://github.com/amansog222/NagarConnect', kind: 'ghost' as const, icon: 'github' as const },
    ],
  },
];

export const skillGroups = [
  { title: 'Backend', icon: 'server' as const, items: ['Node.js', 'Express', 'Python', 'REST APIs', 'WebSockets', 'SSE'] },
  { title: 'Infrastructure', icon: 'cloud' as const, items: ['Docker', 'Nginx', 'AWS EC2', 'Linux', 'Redis'] },
  { title: 'Real-time', icon: 'zap' as const, items: ['WebRTC', 'LiveKit', 'Socket.IO'] },
  { title: 'AI', icon: 'brain' as const, items: ['RAG', 'LangGraph', 'LiveKit Agents', 'STT', 'TTS', 'VAD'] },
  { title: 'Frontend', icon: 'layout' as const, items: ['React', 'Next.js', 'Vite', 'Tailwind'] },
];

export const architectureSteps = [
  { name: 'Browser', note: 'WebRTC client publishes and subscribes to media tracks.' },
  { name: 'Nginx', note: 'TLS termination and reverse proxy in front of the media server.' },
  { name: 'LiveKit Server', note: 'SFU that routes tracks between participants with low latency.' },
  { name: 'Track Egress → S3', note: 'Each track is recorded independently and stored in object storage.' },
  { name: 'FFmpeg', note: 'Post-processing merges recorded tracks off the real-time path.' },
  { name: 'Final recording', note: 'A single playable asset for review and compliance.' },
];

export const experience = [
  {
    type: 'work' as const,
    title: 'AI Engineer Intern', // VERIFY
    org: 'Chqme', // VERIFY
    period: '2026', // VERIFY
    summary:
      'Built and deployed an on-premise real-time video communication platform using LiveKit, Docker and AWS infrastructure.',
    points: [
      'Deployed a production LiveKit stack serving 15+ brands, handling ~15 concurrent recorded calls on a 4 vCPU EC2 instance.',
      'Built a per-track recording pipeline with Track Egress, S3 and FFmpeg.',
      'Developed an AI voice agent with RAG, Whisper STT, Silero VAD and multilingual TTS.',
    ],
  },
  {
    type: 'education' as const,
    title: 'B.Tech, Computer Science (Cyber Security)', // VERIFY
    org: 'Rashtriya Raksha University', // VERIFY
    period: '2023 — 2027', // VERIFY
    summary: 'Strong foundation in systems, networking and security alongside full-stack product work.',
    points: [] as string[],
  },
];

export const repos = [
  {
    name: 'NagarConnect',
    desc: 'Real-time transit platform with live vehicle tracking over WebSockets.',
    contribution: 'Full-stack: WebSocket layer, map UI and routing logic.',
    tech: ['React', 'Node.js', 'WebSockets'],
    url: 'https://github.com/amansog222/NagarConnect', // VERIFY
  },
  {
    name: 'Student Hub Connect',
    desc: 'Containerised full-stack student portal behind an Nginx reverse proxy.',
    contribution: 'Frontend, API, Docker setup and Nginx configuration.',
    tech: ['React', 'TypeScript', 'Docker', 'Nginx'],
    url: 'https://github.com/amansog222', // VERIFY
  },
  {
    name: 'Sentinel',
    desc: 'Multi-tenant security monitoring platform with a real-time dashboard.',
    contribution: 'Rule-based detection and real-time alert pipeline.',
    tech: ['Node.js', 'Fastify', 'PostgreSQL', 'Redis'],
    url: 'https://github.com/amansog222', // VERIFY
  },
];
