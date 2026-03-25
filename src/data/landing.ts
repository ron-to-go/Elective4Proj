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
      highlights: ["Lorem", "Ispum", "Dolor"],
      images: [
        { 
          url: "/departments/MFE/facilities/COE2.png", 
          caption: "Facility 1" 
        },
        { 
          url: "/departments/MFE/facilities/COE2-204.png",  
          caption: "Facility 2" 
        },
        { 
          url: "/departments/MFE/facilities/COE2-07.png", 
          caption: "Facility 3"  
        },
        { 
          url: "/departments/MFE/facilities/NATIVIDAD.png", 
          caption: "Facility 4" 
        },
        { 
          url: "/departments/MFE/facilities/NH401.png", 
          caption: "Facility 5" 
        },
        { 
          url: "/departments/MFE/facilities/NH402.png", 
          caption: "Facility 6" 
        },
        { 
          url: "/departments/MFE/facilities/NH403.png", 
          caption: "Facility 7" 
        },
      ],
    },
    statistics: {
      id: "statistics",
      title: "Statistics",
      assignedGroup: "Pascual, Alyssa S.",
      statusLabel: "RESERVED SECTION",
      stats: [
        { label: "Programs", value: "8" },
        { label: "Students", value: "0" },
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
