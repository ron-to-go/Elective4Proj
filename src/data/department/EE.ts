const base = "/departments/EE";

export const EE = {
  code: "EE",
  title: "ELECTRICAL ENGINEERING",
  subtitle: "Bachelor of Science in Electrical Engineering",

  theme: { accentHex: "#f59e0b" },

  images: {
    heroLeft: `${base}/hero-left.jpg`,
    heroBig: `${base}/hero-big.jpg`,
    heroSmall1: `${base}/hero-small-1.jpg`,
    heroSmall2: `${base}/hero-small-2.jpg`,
    peo: `${base}/peo.jpg`,
    watermark: `${base}/watermark.png`,
  },

  programOverview: {
    subtitle: "Program Overview",
    contents:[
      { heading: "1..", text: "Edit this Program Overview text for this department." },
      { heading: "2..", text: "Edit this Program Overview text for this department." },
      { heading: "3..", text: "Edit this Program Overview text for this department." }
    ],
    stats: { nonTeaching: 0, faculty: 0, students: 0 },
  },

  peo: {
    title: "Program Educational Objectives (PEO)",
    subtitle: "Edit PEO subtitle here.",
    bullets: ["PEO 1...", "PEO 2...", "PEO 3..."],
  },

  so: {
    title: "Student Outcomes (SO)",
    subtitle: "Edit SO subtitle here.",
    outcomes: [
      { title: "SO 1", text: "Description...", iconUrl: "" },
      { title: "SO 2", text: "Description...", iconUrl: "" },
      { title: "SO 3", text: "Description...", iconUrl: "" },
    ],
  },

  curriculum: {
    title: "Curriculum Overview",
    text: "Edit curriculum overview paragraph here.",
    bullets: [
      {
        title: "Bullet 1",
        text: "Description or explanation for bullet 1."
      },
      {
        title: "Bullet 2",
        text: "Description or explanation for bullet 2."
      },
      {
        title: "Bullet 3",
        text: "Description or explanation for bullet 3."
      }
    ],
  },

  laboratories: {
    title: "Laboratories",
    items: ["Lab 1", "Lab 2", "Lab 3"],
  },

  faculty: {
    title: "Faculty",
    members: [
      { name: "Engr. Sample Name", role: "Department Chair" },
      { name: "Engr. Sample Name", role: "Faculty" },
    ],
  },

  careers: {
    title: "Career Opportunities",
    subtitle: "Edit careers subtitle here.",
    categories: [
      { title: "Category 1", cards: [
      { icon: "💡", title: "Role 1", text: "Description..." },
      { icon: "⚡", title: "Role 2", text: "Description..." },
      { icon: "⭐", title: "Role 3", text: "Description..." },
    ], },
      { title: "Category 2", cards: [
      { icon: "💡", title: "Role 4", text: "Description..." },
      { icon: "⚡", title: "Role 5", text: "Description..." },
      { icon: "⭐", title: "Role 6", text: "Description..." },
      ],},    
    ],
  }
};
