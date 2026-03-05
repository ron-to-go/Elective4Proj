export type LandingSectionData = {
  id: string;
  title: string;
  assignedGroup: string;
  statusLabel: string;
};

export type LandingHeroData = {
  eyebrow: string;
  title: string;
  description: string;
  primaryButtonLabel: string;
  primaryButtonHref: string;
};

export const landingPageData: {
  hero: LandingHeroData;
  sections: {
    missionVision: LandingSectionData;
    departmentGrid: LandingSectionData;
    news: LandingSectionData;
    facilities: LandingSectionData;
    statistics: LandingSectionData;
    contact: LandingSectionData;
    footer: LandingSectionData;
  };
} = {
  hero: {
    eyebrow: "LANDING PAGE • HERO SECTION",
    title: "Bulacan State University\nCollege of Engineering",
    description:
      "This hero block is active for your group. Other landing sections are placeholders and should be implemented by their assigned groups.",
    primaryButtonLabel: "Enter Department Pages",
    primaryButtonHref: "/departments",
  },
  sections: {
    missionVision: {
      id: "mission-vision",
      title: "Mission & Vision",
      assignedGroup: "Roxas, Aiam Airron L",
      statusLabel: "RESERVED SECTION",
    },
    departmentGrid: {
      id: "department-grid",
      title: "Department Grid",
      assignedGroup: "Pagdanganan, Arviella S",
      statusLabel: "RESERVED SECTION",
    },
    news: {
      id: "news",
      title: "News",
      assignedGroup: "Dela Cruz, Richter Vhon C",
      statusLabel: "RESERVED SECTION",
    },
    facilities: {
      id: "facilities",
      title: "Facilities",
      assignedGroup: "Jones, Colleen Iris P",
      statusLabel: "RESERVED SECTION",
    },
    statistics: {
      id: "statistics",
      title: "Statistics",
      assignedGroup: "Pascual, Alyssa S.",
      statusLabel: "RESERVED SECTION",
    },
    contact: {
      id: "contact",
      title: "Contact",
      assignedGroup: "Pagayunan, Lhara Mei R",
      statusLabel: "RESERVED SECTION",
    },
    footer: {
      id: "footer",
      title: "Footer",
      assignedGroup: "Villareal, Trisha Mae",
      statusLabel: "RESERVED SECTION",
    },
  },
};
