const base = "/departments/MFE";

export const MFE = {
  code: "MFE",
  title: "MANUFACTURING ENGINEERING",
  subtitle: "Bachelor of Science in Manufacturing Engineering",

  theme: { accentHex: "#ef4444" },

  images: {
    heroLeft: `${base}/hero-left.png`,
    heroBig: `${base}/hero-big.png`,
    heroSmall1: `${base}/hero-small-1.png`,
    heroSmall2: `${base}/hero-small-2.png`,
    peo: `${base}/peo.png`,
    watermark: `${base}/watermark.png`,
  },

  programOverview: {
    heading: "Program Overview",
    text: "Edit this Program Overview text for this department.",
    stats: { nonTeaching: 0, faculty: 7, students: 342 },
  },

  peo: {
    title: "Program Educational Objectives (PEO)",
    subtitle: "Edit PEO subtitle here.",
    bullets: [
      "Graduates will demonstrate their manufacturing engineering role in their field of work to cope with the needs and demands of the industry.",
      "Graduates will pursue lifelong learning through engagement and participation in continued professional development that expands their skills to adapt to the changing needs of the manufacturing engineering profession and community.",
      "Graduates will engage in community efforts for economic progress and/or environmental conservation/restoration."
    ],
  },

  so: {
    title: "Student Outcomes (SO)",
    subtitle: "Edit SO subtitle here.",
    outcomes: [
      { title: "SO 1", text: "Description..." },
      { title: "SO 2", text: "Description..." },
      { title: "SO 3", text: "Description..." },
    ],
  },

  curriculum: {
    title: "Curriculum Overview",
    text: "Edit curriculum overview paragraph here.",
    bullets: ["Bullet 1", "Bullet 2", "Bullet 3", "Bullet 4"],
  },

  laboratories: {
    title: "Laboratories",
    items: [
      { name: "Facility 1", image: `${base}/NH401.png` },
      { name: "Facility 2", image: `${base}/COE2-107.png`},
      { name: "Facility 3", image: `${base}/NH403.png`},
    ],
  },

  faculty: {
    title: "Faculty",
    members: [
      { name: "Engr. Nancy M. Santiago", role: "Department Chair", image: `${base}/MFE_Chair.jpg` },
      { name: "Engr. Rachel C. Bual", role: "Faculty", image: `${base}/MFE_Faculty1.jpg` },
      { name: "Engr. Cyrus Lawrence C. Bual", role: "Faculty", image: `${base}/MFE_Faculty2.jpg` },
      { name: "Engr. Jayvee L. De Robles", role: "Faculty", image: `${base}/MFE_Faculty3.jpg` },
      { name: "Engr. Niño Joselito D. Almario", role: "Faculty", image: `${base}/MFE_Faculty4.jpg` },
      { name: "Engr. Precious Rose F. Galvez", role: "Faculty", image: `${base}/MFE_Faculty5.jpg` },
      { name: "Engr. Romano A. Gabrillo", role: "Faculty", image: `${base}/MFE_Faculty6.jpg` },
    ],
  },

  careers: {
    title: "Career Opportunities",
    subtitle: "Graduates are engineered to lead in the global industrial landscape, mastering the transition from raw concepts to high-precision reality.",
    cards: [
      { 
        icon: "💡", 
        title: "Process Engineer", 
        text: "Design and optimize integrated systems of personnel, equipment, and energy to maximize production efficiency and minimize waste." 
      },
      { 
        icon: "⚡", 
        title: "Automation Specialist", 
        text: "Lead the implementation of Industry 4.0 technologies, including robotics, AI-driven workflows, and smart manufacturing systems." 
      },
      { 
        icon: "⭐", 
        title: "Quality Manager", 
        text: "Oversee high-standard compliance and precision control, ensuring every product meets rigorous international engineering benchmarks." 
      },
    ],
  },
};
