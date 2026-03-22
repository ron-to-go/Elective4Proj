export const landingPageData = {
  hero: {
    eyebrow: "LANDING PAGE • HERO SECTION",
    title: "Bulacan State University\nCollege of Engineering",
    primaryButtonLabel: "Enter Department Pages",
    primaryButtonHref: "/departments",
  },
  sections: {
    missionVision: {
      id: "mission-vision",
      title: "Mission & Vision",
      assignedGroup: "Roxas, Aiam Airron L",
      statusLabel: "RESERVED SECTION",
      missionText: "Placeholder mission statement.",
      visionText: "Placeholder vision statement.",
    },
    departmentGrid: {
      id: "department-grid",
      title: "Department Grid",
      assignedGroup: "Pagdanganan, Arviella S",
      statusLabel: "RESERVED SECTION",
      introText: "Placeholder description for department grid section.",
    },
    news: {
      id: "news",
      title: "News",
      assignedGroup: "Dela Cruz, Richter Vhon C",
      statusLabel: "RESERVED SECTION",
      items: [
        { title: "Placeholder News 1", date: "2026-03-05" },
        { title: "Placeholder News 2", date: "2026-03-05" },
      ],
    },
    facilities: {
      id: "facilities",
      title: "Facilities",
      assignedGroup: "Jones, Colleen Iris P",
      statusLabel: "RESERVED SECTION",
      highlights: ["Placeholder Facility 1", "Placeholder Facility 2"],
    },
    statistics: {
      id: "statistics",
      title: "College Statistics",
      assignedGroup: "Pascual, Alyssa S.",
      statusLabel: "ACTIVE SECTION",
      totalStudents: "4,300",
      departmentStats: [
        { dept: "CE", fullName: "Civil Engineering", students: 780, hasBoardExam: true, passingRate: "63.64%", latestExamDate: "April 2025" },
        { dept: "CPE", fullName: "Computer Engineering", students: 733, hasBoardExam: false },
        { dept: "EE", fullName: "Electrical Engineering", students: 555, hasBoardExam: true, passingRate: "74.12%", latestExamDate: "April 2025" },
        { dept: "ECE", fullName: "Electronics Engineering", students: 462, hasBoardExam: true, passingRate: "53.1%", latestExamDate: "October 2025" },
        { dept: "IE", fullName: "Industrial Engineering", students: 567, hasBoardExam: false },
        { dept: "ME", fullName: "Mechanical Engineering", students: 512, hasBoardExam: true, passingRate: "66.99%", latestExamDate: "August 2025" },
        { dept: "MFE", fullName: "Manufacturing Engineering", students: 330, hasBoardExam: false },
        { dept: "MEE", fullName: "Mechatronics Engineering", students: 361, hasBoardExam: false },
      ],
    },
    contact: {
      id: "contact",
      title: "Contact",
      assignedGroup: "Pagayunan, Lhara Mei R",
      statusLabel: "RESERVED SECTION",
      email: "coe@example.edu",
      phone: "+63 000 000 0000",
      address: "Bulacan State University",
    },
    footer: {
      id: "footer",
      title: "Footer",
      assignedGroup: "Villareal, Trisha Mae",
      statusLabel: "RESERVED SECTION",
      links: [
        { label: "Privacy", href: "#" },
        { label: "Contact", href: "#contact" },
      ],
    },
  },
};

export type LandingPageData = typeof landingPageData;
