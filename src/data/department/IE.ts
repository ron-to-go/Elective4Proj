const base = "/departments/IE";

export const IE = {
  code: "IE",
  title: "INDUSTRIAL ENGINEERING",
  subtitle: "Bachelor of Science in Industrial Engineering",

  theme: { accentHex: "#16a34a" },

  images: {
    heroLeft: `${base}/event.jpeg`,
    heroBig: `${base}/award.jpeg`,
    heroSmall1: `${base}/internship.jpeg`,
    heroSmall2: `${base}/internship2.png`,
    peo: `${base}/IE Dept.png`,
  },

  programOverview: {
    heading: "Program Overview",
    text: "Edit this Program Overview text for this department.",
    stats: { nonTeaching: 0, faculty: 11, students: 567 },
  },

  peo: {
    title: "Program Educational Objectives (PEO)",
    subtitle: "Within three to five years of graduation, Industrial Engineering alumni are expected to have achieved the following objectives:",
    bullets: ["Demonstrate their Industrial Engineering role in their field of work by applying expertise in production engineering, organization and decision systems, and ergonomics to meet the needs of industry, employers, and other relevant stakeholders.", 
              "Pursue lifelong learning and continuous professional development through advanced studies, certifications, training, or research to expand competencies and adapt to the evolving needs of the Industrial Engineering profession and the broader community.", 
              "Engage in community and societal initiatives to promote economic development and environmental conservation or restoration by applying Industrial Engineering solutions and innovations."],
  },

  so: {
    title: "Student Outcomes (SO)",
    subtitle: "By the time of graduation, students of the Industrial Engineering program are expected to demonstrate:",
    outcomes: [
      {
        icon: "💡",
        title: "Engineering Knowledge & Problem Analysis",
        text: `• Apply knowledge of mathematics, natural science, engineering fundamentals and an engineering specialization to the solution of complex industrial engineering problems.
              • Identify, formulate, research literature and analyze complex industrial engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences and engineering sciences.`
      },
      {
        icon: "📐",
        title: "Design, Development & Integration",
        text: `• Design solutions for complex industrial engineering problems and design systems, components or processes that meet specified needs with appropriate consideration for public health and safety, cultural, societal, and environmental considerations.
              • Ability to design, develop, implement, and improve integrated systems that include people, materials, information, equipment and energy.`
      },
      {
        icon: "🔬",
        title: "Investigation & Modern Tools",
        text: `• Conduct investigations of complex industrial engineering problems using research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of information to provide valid conclusions.
              • Create, select and apply appropriate techniques, resources, and modern engineering and IT tools, including prediction and modelling, to complex industrial engineering problems with an understanding of the limitations.`
      },
      {
        icon: "🌱",
        title: "Responsibility & Sustainability",
        text: `• Understand and evaluate the sustainability and impact of professional industrial engineering work in the solution of complex industrial engineering problems in societal and environmental context.
              • Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to professional industrial engineering practice and solutions to complex industrial engineering problems.`
      },
      {
        icon: "⚖️",
        title: "Professionalism, Ethics & Learning",
        text: `• Function effectively as an individual, and as a member or leader in diverse teams and in multi-disciplinary settings.
              • Apply ethical principles and commit to professional ethics and responsibilities and norms of industrial engineering practice.
              • Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.`
      },
      {
        icon: "💬",
        title: "Communication & Project Management",
        text: `• Communicate effectively on complex industrial engineering activities with the engineering community and with society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.
              • Demonstrate knowledge and understanding of engineering management principles and economic decision-making and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.`
      }
    ],
  },

  curriculum: {
  title: "Curriculum Overview",
  text: "The 2024 Revised Bachelor of Science in Industrial Engineering curriculum is designed to meet CMO 96 series of 2017 standards, totaling 196 units of technical and non-technical coursework.", // [cite: 6, 7, 42]
  years: [
    {
      id: "1st-year",
      label: "First Year",
      terms: [
        { 
          name: "First Semester", 
          headers: ["Code", "Course Title", "Lect. Hours", "Lab. Hours", "Units", "Pre-req", "Co-req"],
          courses: [
            { code: "MMW 101", title: "Mathematics in the Modern World", lec: 3, lab: 0, units: 3, prereq: "None", coreq: "None" }, 
            { code: "UTS 101", title: "Understanding the Self", lec: 3, lab: 0, units: 3, prereq: "None", coreq: "None" }, 
            { code: "PAL 101", title: "Panitikan at Lipunan", lec: 3, lab: 0, units: 3, prereq: "None", coreq: "None" }, 
            { code: "PCM 101", title: "Purposive Communication", lec: 3, lab: 0, units: 3, prereq: "None", coreq: "None" }, 
            { code: "ETH 101", title: "Ethics", lec: 3, lab: 0, units: 3, prereq: "None", coreq: "None" }, 
            { code: "COE 100", title: "Mathematics for Engineers", lec: 3, lab: 0, units: 3, prereq: "None", coreq: "None" }, 
            { code: "COE 101", title: "Introduction to Engineering", lec: 1, lab: 0, units: 1, prereq: "None", coreq: "None" }, 
            { code: "COE 102", title: "Calculus 1", lec: 3, lab: 0, units: 3, prereq: "None", coreq: "None" }, 
            { code: "COE 103", title: "Chemistry for Engineers - Lecture", lec: 3, lab: 0, units: 3, prereq: "None", coreq: "None" }, 
            { code: "COE 103L", title: "Chemistry for Engineers - Lab", lec: 0, lab: 3, units: 1, prereq: "None", coreq: "COE 103" }, 
            { code: "PE 10", title: "PATHFit 1", lec: 2, lab: 0, units: 2, prereq: "None", coreq: "None" }, 
            { code: "NSTP 10", title: "National Service Training Program 1", lec: 3, lab: 0, units: 3, prereq: "None", coreq: "None" },
            { code: "TOTAL", title: "", lec: 30, lab: 3, units: 31, prereq: "", coreq: "" } 
          ]
        },
        { 
          name: "Second Semester", 
          headers: ["Code", "Course Title", "Lect. Hours", "Lab. Hours", "Units", "Pre-req", "Co-req"],
          courses: [
            { code: "AE 101", title: "Academic English", lec: 3, lab: 0, units: 3, prereq: "None", coreq: "None" }, 
            { code: "RPH 101", title: "Reading in Philippine History", lec: 3, lab: 0, units: 3, prereq: "None", coreq: "None" },
            { code: "COE 105", title: "Calculus 2", lec: 3, lab: 0, units: 3, prereq: "COE 100, COE 102", coreq: "None" }, 
            { code: "COE 106", title: "Physics for Engineers - Lecture", lec: 3, lab: 0, units: 3, prereq: "None", coreq: "COE 105" },
            { code: "COE 106L", title: "Physics for Engineers - Lab", lec: 0, lab: 3, units: 1, prereq: "None", coreq: "COE 105" }, 
            { code: "IE 101", title: "Engineering Drawing", lec: 0, lab: 1, units: 3, prereq: "None", coreq: "None" }, 
            { code: "IE 102", title: "Computer Fundamentals & Programming", lec: 0, lab: 6, units: 2, prereq: "None", coreq: "None" },
            { code: "PE 11", title: "PATHFit 2", lec: 2, lab: 0, units: 2, prereq: "None", coreq: "None" }, 
            { code: "NSTP 11", title: "National Service Training Program 2", lec: 3, lab: 0, units: 3, prereq: "NSTP 10", coreq: "None" }, 
            { code: "TOTAL", title: "", lec: 17, lab: 12, units: 21, prereq: "", coreq: "" } 
          ]
        }
      ]
    },
    {
      id: "2nd-year",
      label: "Second Year",
      terms: [
        { 
          name: "First Semester", 
          headers: ["Code", "Course Title", "Lect. Hours", "Lab. Hours", "Units", "Pre-req", "Co-req"],
          courses: [
            { code: "COE 201", title: "Differential Equation", lec: 3, lab: 0, units: 3, prereq: "COE 105", coreq: "None" }, 
            { code: "TCW 101", title: "The Contemporary World", lec: 3, lab: 0, units: 3, prereq: "None", coreq: "None" }, 
            { code: "IE 201", title: "Engineering Mechanics", lec: 3, lab: 0, units: 3, prereq: "COE 106, COE 106L", coreq: "None" }, 
            { code: "IE 202", title: "Computer-Aided Drafting", lec: 0, lab: 3, units: 1, prereq: "IE 101", coreq: "None" }, 
            { code: "IE 203", title: "Principles of Economics", lec: 3, lab: 0, units: 3, prereq: "2nd Year Standing", coreq: "None" }, 
            { code: "IE 204", title: "Statistical Analysis for IE 1", lec: 3, lab: 0, units: 3, prereq: "COE 105", coreq: "None" }, 
            { code: "IE 205", title: "Industrial Organization & Management", lec: 3, lab: 0, units: 3, prereq: "2nd Year Standing", coreq: "None" }, 
            { code: "IE 206", title: "Industrial Materials & Processes", lec: 2, lab: 0, units: 2, prereq: "COE 103, COE 103L, COE 106, COE 106L, IE 101", coreq: "None" },
            { code: "IE 206L", title: "Industrial Materials & Processes Lab", lec: 0, lab: 3, units: 1, prereq: "None", coreq: "IE 206" }, 
            { code: "IE 207", title: "Public Speaking", lec: 3, lab: 0, units: 3, prereq: "2nd Year Standing", coreq: "None" }, 
            { code: "PE 12", title: "PATHFit 3", lec: 2, lab: 0, units: 2, prereq: "None", coreq: "None" }, 
            { code: "TOTAL", title: "", lec: 25, lab: 6, units: 27, prereq: "", coreq: "" } 
          ]
        },
        { 
          name: "Second Semester", 
          headers: ["Code", "Course Title", "Lect. Hours", "Lab. Hours", "Units", "Pre-req", "Co-req"],
          courses: [
            { code: "IE 208", title: "Environmental Science", lec: 3, lab: 0, units: 3, prereq: "COE 103, COE 103L", coreq: "None" }, 
            { code: "IE 209", title: "Advanced Math for Industrial Engineering", lec: 3, lab: 0, units: 3, prereq: "COE 201", coreq: "None" }, 
            { code: "IE 210", title: "Financial Accounting", lec: 3, lab: 0, units: 3, prereq: "IE 203", coreq: "None" }, 
            { code: "IE 211", title: "Statistical Analysis for Industrial Engineering 2", lec: 2, lab: 0, units: 2, prereq: "IE 204", coreq: "None" }, 
            { code: "IE 211L", title: "Statistical Analysis for Industrial Engineering 2 Lab", lec: 0, lab: 3, units: 1, prereq: "None", coreq: "IE 211" }, 
            { code: "IE 212", title: "Work Study and Measurement", lec: 3, lab: 0, units: 3, prereq: "IE 204, IE 205, IE 206, IE 206L", coreq: "None" }, 
            { code: "IE 212L", title: "Work Study & Measurement Lab", lec: 0, lab: 3, units: 1, prereq: "None", coreq: "IE 212" }, 
            { code: "RLW 101", title: "Life and Works of Rizal", lec: 3, lab: 0, units: 3, prereq: "None", coreq: "None" }, 
            { code: "AAP 101", title: "Art Appreciation", lec: 3, lab: 0, units: 3, prereq: "None", coreq: "None" }, 
            { code: "STS 101", title: "Science, Tech & Society", lec: 3, lab: 0, units: 3, prereq: "None", coreq: "None" }, 
            { code: "PE 13", title: "PATHFit 4", lec: 2, lab: 0, units: 2, prereq: "None", coreq: "None" } , 
            { code: "TOTAL", title: "", lec: 25, lab: 6, units: 27, prereq: "", coreq: "" } 
          ]
        }
      ]
    },
    {
      id: "3rd-year",
      label: "Third Year",
      terms: [
        { 
          name: "First Semester", 
          headers: ["Code", "Course Title", "Lect. Hours", "Lab. Hours", "Units", "Pre-req", "Co-req"],
          courses: [
            { code: "IE 301", title: "Operations Research 1", lec: 2, lab: 0, units: 2, prereq: "IE 102, IE 209", coreq: "None" }, 
            { code: "IE 301L", title: "Operations Research 1 Lab", lec: 0, lab: 3, units: 1, prereq: "None", coreq: "IE 301" }, 
            { code: "IE 302", title: "Quality Management System", lec: 3, lab: 0, units: 3, prereq: "IE 211, IE 211L, IE 212, IE 212L", coreq: "None" }, 
            { code: "IE 303", title: "Ergonomics 1", lec: 2, lab: 0, units: 2, prereq: "IE 211, IE 211L, IE 212, IE 212L, IE 202", coreq: "None" }, 
            { code: "IE 303L", title: "Ergonomics 1 Lab", lec: 0, lab: 3, units: 1, prereq: "None", coreq: "IE 303" }, 
            { code: "IE 304", title: "Managerial Accounting", lec: 3, lab: 0, units: 3, prereq: "IE 210", coreq: "None" }, 
            { code: "IE 305", title: "Organizational Behavior", lec: 3, lab: 0, units: 3, prereq: "3rd Year Standing", coreq: "None" }, 
            { code: "IE 306", title: "Thermodynamics", lec: 3, lab: 0, units: 3, prereq: "COE 106, COE 106L", coreq: "None" }, 
            { code: "IE 307", title: "Elementary Electrical Engineering", lec: 3, lab: 0, units: 3, prereq: "COE 106, COE 106L", coreq: "None" },
            { code: "IE 308", title: "Foreign Language 1", lec: 3, lab: 0, units: 3, prereq: "3rd Year Standing", coreq: "None" }, 
            { code: "SSP 101d", title: "The Entrepreneurial Mind", lec: 3, lab: 0, units: 3, prereq: "None", coreq: "None" }, 
            { code: "TOTAL", title: "", lec: 25, lab: 6, units: 27, prereq: "", coreq: "" } 
          ]
        },
        { 
          name: "Second Semester", 
          headers: ["Code", "Course Title", "Lect. Hours", "Lab. Hours", "Units", "Pre-req", "Co-req"],
          courses: [
            { code: "IE 309", title: "Operations Research 2", lec: 2, lab: 0, units: 2, prereq: "IE 211, IE 211L, IE 301, IE 301L", coreq: "None" }, 
            { code: "IE 309L", title: "Operations Research 2 Lab", lec: 0, lab: 3, units: 1, prereq: "None", coreq: "IE 309" }, 
            { code: "IE 310", title: "Operations Management", lec: 3, lab: 0, units: 3, prereq: "IE 301, IE 301L, IE 302", coreq: "None" },
            { code: "IE 310L", title: "Operations Management Lab", lec: 0, lab: 3, units: 1, prereq: "None", coreq: "IE 310" }, 
            { code: "IE 311", title: "Ergonomics 2", lec: 2, lab: 0, units: 2, prereq: "IE 303, IE 303L", coreq: "None" },
            { code: "IE 311L", title: "Ergonomics 2 Lab", lec: 0, lab: 3, units: 1, prereq: "None", coreq: "IE 311" }, 
            { code: "IE 312", title: "Engineering Economics", lec: 3, lab: 0, units: 3, prereq: "IE 304", coreq: "None" }, 
            { code: "IE 313", title: "Financial Management", lec: 3, lab: 0, units: 3, prereq: "IE 304", coreq: "None" }, 
            { code: "IE 314", title: "Basic Occupational Safety & Health", lec: 3, lab: 0, units: 3, prereq: "3rd Year Standing", coreq: "None" }, 
            { code: "IE 315", title: "Technopreneurship 101", lec: 3, lab: 0, units: 3, prereq: "3rd Year Standing", coreq: "None" },
            { code: "IE 316", title: "Foreign Language 2", lec: 3, lab: 0, units: 3, prereq: "IE 308", coreq: "None" }, 
            { code: "TOTAL", title: "", lec: 22, lab: 9, units: 25, prereq: "", coreq: "" } 
          ]
        }
      ]
    },
    {
      id: "summer",
      label: "Summer Term",
      terms: [
        { 
          name: "Summer Term", 
          headers: ["Code", "Course Title", "Lect. Hours", "Lab. Hours", "Units", "Pre-req", "Co-req"],
          courses: [
            { code: "IE 400", title: "IE Industry Immersion", lec: 0, lab: 250, units: 5, prereq: "IE 305, IE 306, IE 307, IE 309, IE 309 L, IE310, IE 310L, IE 311/311L, IE 312, IE 313, IE 314, IE 315, IE 201, IE 202, IE 207, IE 208, IE 101, COE 101, COE 100 ", coreq: "None" }, 
            { code: "TOTAL", title: "", lec: 0, lab: 250, units: 5, prereq: "", coreq: "" } 
          ]
        }
      ]
    },
    {
      id: "4th-year",
      label: "Fourth Year",
      terms: [
        { 
          name: "First Semester", 
          headers: ["Code", "Course Title", "Lect. Hours", "Lab. Hours", "Units", "Pre-req", "Co-req"],
          courses: [
            { code: "IE 401", title: "IE Capstone Project 1", lec: 1, lab: 0, units: 1, prereq: "IE 309, IE 309L, IE 310, IE 310L, IE 311, IE 311L, IE 312, IE 313, IE 314, IE 315, IE 316", coreq: "None" },
            { code: "IE 401F", title: "IE Capstone Project 1 Field", lec: 0, lab: 3, units: 1, prereq: "None", coreq: "IE 401" }, 
            { code: "IE 402", title: "Project Feasibility", lec: 2, lab: 0, units: 2, prereq: "IE 309, IE 309L, IE 310, IE 310L, IE 312, IE 313, IE 314, IE 315, IE 316", coreq: "None" },
            { code: "IE 402D", title: "Project Feasibility Design", lec: 0, lab: 3, units: 1, prereq: "None", coreq: "IE 402" }, 
            { code: "IE 403", title: "Supply Chain Management", lec: 3, lab: 0, units: 3, prereq: "IE 310, IE 310L", coreq: "None" }, 
            { code: "IE 404", title: "Information System", lec: 3, lab: 0, units: 3, prereq: "IE 104", coreq: "IE 403" }, 
            { code: "IE 405", title: "Systems Engineering", lec: 3, lab: 0, units: 3, prereq: "IE 309, IE 309L, IE 310, IE 310L", coreq: "None" }, 
            { code: "IE 406", title: "IE Elective 1", lec: 3, lab: 0, units: 3, prereq: "None", coreq: "IE 401" }, 
            { code: "TOTAL", title: "", lec: 15, lab: 6, units: 17, prereq: "", coreq: "" } 
          ]
        },
        { 
          name: "Second Semester", 
          headers: ["Code", "Course Title", "Lect. Hours", "Lab. Hours", "Units", "Pre-req", "Co-req"],
          courses: [
            { code: "IE 407D", title: "IE Capstone Project Field 2", lec: 0, lab: 3, units: 1, prereq: "IE 401, IE 401F", coreq: "None" }, 
            { code: "IE 408", title: "Plant Visit and Seminars", lec: 0, lab: 6, units: 2, prereq: "None", coreq: "IE 407D" }, 
            { code: "IE 409", title: "Engineering Laws and Ethics", lec: 3, lab: 0, units: 3, prereq: "IE 305, IE 313", coreq: "None" }, 
            { code: "IE 410", title: "IE Elective 2", lec: 3, lab: 0, units: 3, prereq: "None", coreq: "IE 407D" }, 
            { code: "IE 411", title: "IE Elective 3", lec: 3, lab: 0, units: 3, prereq: "None", coreq: "IE 407D" }, 
            { code: "IE 412", title: "IE Elective 4", lec: 3, lab: 0, units: 3, prereq: "None", coreq: "IE 407D" }, 
            { code: "IE 413", title: "Comprehensive Examination", lec: 0, lab: 3, units: 1, prereq: "IE 402, IE 403, IE 404, IE 405", coreq: "IE 407D" }, 
            { code: "TOTAL", title: "", lec: 12, lab: 12, units: 16, prereq: "", coreq: "" } 
          ]
        }
      ]
    }
  ]
},

  laboratories: {
    title: "Laboratories",
    description: "Explore our dedicated learning spaces equipped with modern industrial tools and systems.",
    rooms: [
      {
        name: "Industrial Engineering Laboratory",
        roomNumber: "COE2 Room 102",
        images: [
          `${base}/lab1.jpg`,
          `${base}/lab2.jpg`,
          `${base}/lab3.jpg`
        ]
      }
    ]
  },

  faculty: {
    title: "Faculty",
    members: [
      { 
        name: "Engr. Jeremy Laurence M. Bañez", 
        role: "Program Chair, IE Department",
        image: `${base}/BAÑEZ_Picture (2).JPG`
      },
      { 
        name: "Engr. Ivy Mar J. Ramos", 
        role: "Faculty Member, IE Department",
        image: `${base}/Ivy Mar Ramos (2).png`
      },
      { 
        name: "Engr. Hazel A. Caparas", 
        role: "Extension Coordinator, IE Department",
        image: `${base}/HAZEL A. CAPARAS.jpg`
      },
      { 
        name: "Engr. Marianne B. Calayag", 
        role: "Research Coordinator, IE Department",
        image: `${base}/Pic_Calayag, Marianne (1).jpg`
      },
      { 
        name: "Engr. Raph John P. Miranda", 
        role: "Faculty Member, IE Department",
        image: `${base}/Miranda Raph John0140 (1).jpg`
      },
      { 
        name: "Engr. Rick Donald S. Manzon", 
        role: "Faculty Member, IE Department",
        image: `${base}/MANZON, RICK DONALD S._5848 CP-2 (1).JPG`
      },
      { 
        name: "Engr. Steven C. Co Jr.", 
        role: "Faculty Member, IE Department",
        image: `${base}/CO JR STEVEN0074 (1).jpg`
      },
      { 
        name: "Engr. Juan C. Tecson", 
        role: "Faculty Member, IE Department",
        image: `${base}/Tecson Juan C (2).jpg`
      },
      { 
        name: "Engr. Dyan G. Rodriguez", 
        role: "Faculty Member, IE Department",
        image: `${base}/Dyan Rodriguez.jpg`
      },
      { 
        name: "Engr. Jasper Kevin C. Dionisio", 
        role: "Faculty Member, IE Department",
        image: `${base}/DIONISIO JASPER0136 (1).jpg`
      },
      { 
        name: "Engr. Christian Lance P. Arojado", 
        role: "Alumni Coordinator, IE Department",
        image: `${base}/Arojado Christian Lance0626.jpg`
      }
    ],
  },

  careers: {
    title: "Career Opportunities",
    subtitle: "Edit careers subtitle here.",
    cards: [
  {
    icon: "📦",
    title: "Operations & Supply Chain",
    text: `• Operations Manager / Research Analyst
• Logistics & Supply Chain Manager
• Planning Engineer
• Productivity Consultant / Specialist`
  },
  {
    icon: "📊",
    title: "Systems & Data Analysis",
    text: `• Systems Analyst 
• Data / Information Analyst
• Management System Engineer
• Methods Analyst / Engineer`
  },
  {
    icon: "⚙️",
    title: "Quality, Design & Human Factors",
    text: `• Quality Assurance Engineer 
• Design Engineer
• Ergonomist
• Process Improvement Consultant`
  },
  {
    icon: "🚀",
    title: "Leadership & Innovation",
    text: `• Project Engineer 
• Technopreneur
• Manufacturing Engineer 
• Customer Service Engineer `
  },
  {
    icon: "🎓",
    title: "Research & Academics",
    text: `• Research Engineer 
• Educator`
  }
],
  },
};
