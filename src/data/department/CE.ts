const base = "/departments/CE"; // public folder path

export const CE = {
  code: "CE",
  title: "CIVIL ENGINEERING",
  subtitle: "Bachelor of Science in",

  theme: { accentHex: "#1F3A4D", primaryGold: "#D4AF37" },

  images: {
    heroCarousel: [
      `${base}/hero1.png`,
      `${base}/hero2.png`,
      `${base}/hero3.png`,
      `${base}/hero4.png`,
      `${base}/hero5.png`,
    ],
    peo: `${base}/peo.png`,
    watermark: `${base}/watermark.png`,
  },

  programOverview: {
    heading: "Program Overview",
    subheading: "Cultivating Excellence, Engineering the Future",
    text: "The Bachelor of Science in Civil Engineering (BSCE) program of Bulacan State University prepares students to become competent civil engineers with strong foundations in mathematics, science, and engineering principles, and specialized knowledge in structural engineering, construction engineering and management, and transportation engineering.\n\nThe program develops the ability to solve complex problems, design sustainable solutions, use modern engineering tools, and work effectively in multidisciplinary teams while upholding professional and ethical standards. It also promotes lifelong learning and continuous development, enabling graduates to contribute to industry, community development, and environmental sustainability.",
    stats: { 
      faculty: "Licensed Engineers",
      accreditation: "AACCUP Level IV",
      ched: "COPC No. 034, s. 2016"
    },
  },

  licensureExam: {
    eyebrow: "EXCELLENCE",
    title: "Licensure Examination for Civil Engineers (CELE)",
    subtitle: "Consistently delivering high performance in professional licensure examinations.",
    performanceGraphs: [
      "/departments/CE/graph1.png",
      "/departments/CE/graph2.png",
    ],
    results: [
      {
        period: "April 2025",
        stats: [
          { label: "First Time Takers", value: "68.97%" },
          { label: "Institutional Rating", value: "47.46%" },
          { label: "National Passing Rate", value: "29.21%" },
        ],
      },
      {
        period: "November 2025",
        stats: [
          { label: "First Time Takers", value: "66.67%" },
          { label: "Institutional Rating", value: "31.03%" },
          { label: "National Passing Rate", value: "30.39%" },
        ],
      },
    ],
  },

  peo: {
    eyebrow: "MISSION ORIENTED",
    title: "Program Educational Objectives",
    subtitle: "The graduates of the Civil Engineering program are expected to achieve the following within a few years of graduation:",
    objectives: [
      {
        id: "PEO 1",
        title: "Professional Expertise",
        description: "Demonstrate their Civil Engineering role in their field of work by applying expertise in structural engineering, construction and engineering management, and transportation engineering to meet the needs of industry, employers, and technology-focused organizations."
      },
      {
        id: "PEO 2",
        title: "Lifelong Learning",
        description: "Pursue lifelong learning and continuous professional development through advanced studies, certifications, training, or research to expand competencies and adapt to the evolving needs of the Civil Engineering profession and the broader community."
      },
      {
        id: "PEO 3",
        title: "Societal Contribution",
        description: "Engage in community and societal initiatives to promote economic development and environmental conservation or restoration by applying Civil Engineering solutions and innovations."
      }
    ]
  },

  so: {
    eyebrow: "COMPETENCIES",
    title: "Student Outcomes",
    subtitle: "By the time of graduation, the students of the Civil Engineering program shall have the ability to:",
    outcomes: [
      { title: "a", subtitle: "Knowledge Application", text: "Apply knowledge of mathematics, natural science, engineering fundamentals and an engineering specialization to the solution of complex engineering problems." },
      { title: "b", subtitle: "Research & Investigation", text: "Conduct investigations of complex engineering problems using research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of information to provide valid conclusions." },
      { title: "c", subtitle: "Solution Design", text: "Design solutions for complex engineering problems and design systems, components or processes that meet specified needs with appropriate consideration for public health and safety, cultural, societal, and environmental considerations." },
      { title: "d", subtitle: "Teamwork & Leadership", text: "Function effectively as an individual, and as a member or leader in diverse teams and in multi-disciplinary settings." },
      { title: "e", subtitle: "Problem Analysis", text: "Identify, formulate, research literature and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences and engineering sciences." },
      { title: "f", subtitle: "Ethical Responsibility", text: "Apply ethical principles and commit to professional ethics and responsibilities and norms of engineering practice." },
      { title: "g", subtitle: "Effective Communication", text: "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions." },
      { title: "h", subtitle: "Sustainability Impact", text: "Understand and evaluate the sustainability and impact of professional engineering work in the solution of complex engineering problems in societal and environmental context." },
      { title: "i", subtitle: "Lifelong Learning", text: "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change." },
      { title: "j", subtitle: "Contextual Reasoning", text: "Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to professional engineering practice and solutions to complex engineering problems." },
      { title: "k", subtitle: "Modern Tools", text: "Create, select and apply appropriate techniques, resources, and modern engineering and IT tools, including prediction and modelling, to complex engineering problems with an understanding of the limitations." },
      { title: "l", subtitle: "Management & Decision-making", text: "Demonstrate knowledge and understanding of engineering management principles and economic decision-making and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments." },
      { title: "m", subtitle: "Specialized Field", text: "Understand at least one specialized field of Civil Engineering practice." },
    ],
  },

  curriculum: {
    eyebrow: "ACADEMIC JOURNEY",
    title: "Program Curriculum",
    description: "Our curriculum is structured to provide a balance between theoretical knowledge and practical application. It includes core engineering courses, specialized electives, and hands-on laboratory experiences.",
    highlights: [
      "Strong foundation in Mathematics and Basic Sciences",
      "Comprehensive Core Civil Engineering Courses",
      "Specialized Electives in Various Tracks",
      "Integration of Design and Research Projects",
    ],
    years: [
      { year: "First Year", semesters: ["1st Semester", "2nd Semester"] },
      { year: "Second Year", semesters: ["1st Semester", "2nd Semester"] },
      { year: "Third Year", semesters: ["1st Semester", "2nd Semester"] },
      { year: "Fourth Year", semesters: ["1st Semester", "2nd Semester"] },
    ],
    tracks: [
      { name: "Construction Engineering and Management", file: "BSCE - CONSTRUCTION ENGINEERING AND MANAGEMENT-CONTENTS NOTED.pdf" },
      { name: "Structural Engineering", file: "BSCE - STRUCTURAL ENGINEERING-CONTENTS NOTED.pdf" },
      { name: "Transportation Engineering", file: "BSCE - TRANSPORTATION ENGINEERING-CONTENTS NOTED.pdf" },
    ],
  },

  careers: {
    eyebrow: "FUTURE PATHS",
    title: "Career Opportunities",
    subtitle: "The Civil Engineering program offers specialized areas that allow students to develop expertise in key fields of engineering practice and prepare for diverse career opportunities in industry, government, and research.",
    cards: [
      { 
        icon: "📐", 
        title: "Structural Engineering", 
        text: "Focuses on the analysis and design of buildings, bridges, and infrastructure systems to ensure strength, stability, and safety." 
      },
      { 
        icon: "🏗️", 
        title: "Construction Engineering and Management", 
        text: "Covers project planning, scheduling, cost estimation, and management of construction projects to ensure efficient execution." 
      },
      { 
        icon: "🌉", 
        title: "Transportation Engineering", 
        text: "Deals with the planning, design, and operation of transportation systems such as roads, highways, and traffic networks." 
      },
    ],
  },

  facilitiesAndActivities: {
    eyebrow: "RESOURCES",
    title: "Facilities & Activities",
    description: "Empowering students through advanced experimental learning and cutting-edge research environments.",
    facilitiesImages: [
      `${base}/lab1.png`,
      `${base}/lab2.png`,
      `${base}/lab3.png`,
      `${base}/lab4.png`,
      `${base}/lab5.png`,
      `${base}/lab6.png`,
    ],
    activitiesImages: [
      `${base}/act1.png`,
      `${base}/act2.png`,
      `${base}/act3.png`,
      `${base}/act4.png`,
      `${base}/act5.png`,
      `${base}/act6.png`,
    ],
    items: ["Materials Testing Lab", "Geotechnical Engineering Lab", "Hydraulics and Water Resources Lab", "Surveying and Geomatics Lab"],
  },

  faculty: {
    eyebrow: "LEADERSHIP",
    title: "Faculty",
    organizationalCharts: [
      "/departments/CE/chart1.png",
      "/departments/CE/chart2.png",
    ],
    members: [
      { name: "Engr. Joyce C. Evangelista", role: "Program Chair", image: `${base}/Evangelista.png` },
      { name: "Engr. Maureen Therese A. Balayan", role: "Faculty", image: `${base}/Balayan.png` },
      { name: "Engr. Romualdo S. Caluag", role: "Faculty", image: `${base}/Caluag.png` },
      { name: "Engr. Camille Aira Espiritu", role: "Faculty", image: `${base}/Espiritu.png` },
      { name: "Engr. Sarah M. Faustino", role: "Faculty", image: `${base}/Faustino.png` },
      { name: "Dr. Cecilia A. Geronimo", role: "Faculty", image: `${base}/Geronimo.png` },
      { name: "Engr. Renato G. Gopez", role: "Faculty", image: `${base}/Gopez.png` },
      { name: "Engr. Radger Teddy L. Manuel", role: "Faculty", image: `${base}/Manuel.png` },
      { name: "Engr. Resette Nicole L. Meneses", role: "Faculty", image: `${base}/Meneses.png` },
      { name: "Engr. Merricris U. Pangilinan", role: "SIP Coordinator", image: `${base}/Pangilinan.png` },
      { name: "Engr. Marbel D. Perez", role: "Faculty", image: `${base}/Perez.png` },
      { name: "Engr. Jennie C. Roque", role: "Faculty", image: `${base}/Roque.png` },
      { name: "Engr. Florence T. Samonte", role: "Faculty", image: `${base}/Samonte.png` },
      { name: "Engr. June-June P. Santos", role: "Faculty", image: `${base}/Santos.png` },
    ],
  },
};
