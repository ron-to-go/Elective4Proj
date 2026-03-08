const base = "/departments/ECE";

export const ECE = {
  code: "ECE",
  title: "ELECTRONICS ENGINEERING",
  subtitle: "Bachelor of Science in Electronics Engineering",

  theme: { accentHex: "#0ea5e9" },

  images: {
    heroLeft: `${base}/hero-left.jpg`,
    heroBig: `${base}/hero-big.jpg`,
    heroSmall1: `${base}/hero-small-1.jpg`,
    heroSmall2: `${base}/hero-small-2.jpg`,
    peo: `${base}/peo.jpg`,
    watermark: `${base}/watermark.png`,
  },

  programOverview: {
    heading: "Program Overview",
    text: "Edit this Program Overview text for this department.",
    stats: { nonTeaching: 0, faculty: 0, students: 0 },
  },

  peo: {
    title: "Program Educational Objectives (PEO)",
    subtitle: "Edit PEO subtitle here.",
    bullets: ["Graduates are industry-competent Electronics Engineer practitioner continually developing their technical skills across disciplines in Electronics Engineering.",
      "Contributes significant and innovative solutions that support national development applying the principles and professional skills of Electronics Engineering.",
      "Graduates are competitive leaders with sense of professional responsibility, social awareness and ethical values."],
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
    bullets: ["Bullet 1", "Bullet 2", "Bullet 3"],
  },

  laboratories: {
    title: "Laboratories",
    items: ["Lab 1", "Lab 2", "Lab 3"],
  },

  faculty: {
    title: "Faculty",
    members: [
      { name: "Engr. Donald M. Lapiguera", role: "Department Chair" },
      { name: "Engr. Sample Name", role: "Faculty" },
    ],
  },

  careers: {
    title: "Career Opportunities",
    subtitle: "Edit careers subtitle here.",
    cards: [
      { icon: "💡", title: "Role 1", text: "Description..." },
      { icon: "⚡", title: "Role 2", text: "Description..." },
      { icon: "⭐", title: "Role 3", text: "Description..." },
    ],
  },
};
