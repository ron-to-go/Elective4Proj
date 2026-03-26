const base = "/departments/EE";

export const EE = {
  code: "EE",
  title: "ELECTRICAL ENGINEERING",
  subtitle: "Bachelor of Science in Electrical Engineering",

  theme: {
    accentHex: "#FF4500",
  },

  images: {
    heroLeft: `${base}/lente.png`,
    heroBig: `${base}/cover.png`,
    heroSmall1: `${base}/passing.png`,
    heroSmall2: `${base}/logo.png`,
    peo: `${base}/ee-logo.png`,
    watermark: `${base}/watermark.png`
  },

  programOverview: {
    subtitle: "Program Overview",
    contents: [
      {
        heading: "Introduction",
        text: "The Bachelor of Science in Electrical Engineering (BSEE) program at Bulacan State University is one of the college’s long-standing flagship programs, first offered in 1978 during a major phase of academic expansion in engineering. Since then, the university has continuously strengthened its engineering education through curricular enhancement, faculty development, and steady improvement of laboratories and instructional facilities. These institutional advancements contributed to national recognition for academic excellence, including strong licensure performance and accreditation achievements. The BSEE program is among BulSU’s engineering offerings that have attained Level IV accreditation under AACCUP, demonstrating adherence to rigorous national quality standards."
      },
      {
        heading: "Program Description",
        text: "The BSEE curriculum provides students with a strong foundation in electrical engineering theory supported by extensive hands-on applications. Major areas of study include power systems, electronics, control engineering, and renewable energy technologies, preparing students to design, analyze, operate, and maintain electrical systems in various industrial and technological settings."
      },
      {
        heading: "Graduate Expectations",
        text: "Graduates of the BSEE program are expected to demonstrate strong professional competence in key areas of electrical engineering practice, particularly in fields such as power systems engineering, renewable energy applications, instrumentation and control, and facilities and building systems engineering."
      }
    ],
    stats: {
      nonTeaching: 0,
      faculty: 16,
      students: 512
    }
  },

  peo: {
    title: "Program Educational Objectives (PEO)",
    subtitle: "Three to five years after graduation, BulSU’s Electrical Engineering graduates will:",
    bullets: [
      "Exhibit professional competence in electrical engineering practice and in key areas of specialization—such as Power Systems Engineering, Renewable Energy Engineering, Instrumentation and Control Engineering, and Facilities and Building Systems Engineering—effectively applying these competencies to meet the technological, industrial, and energy-sector needs of the country.",
      "Actively pursue lifelong learning through professional licensure, specialized training, and advanced studies, enabling them to adapt to emerging technologies and contribute to the development of sustainable and innovative energy solutions that address the evolving needs of local communities and industries.",
      "Contribute to the socio-economic advancement of the country by participating in community-oriented initiatives related to rural electrification, energy efficiency, environmental sustainability, and technological development, working collaboratively with local government units, industries, and civic organizations."
    ]
  },

  so: {
    title: "Student Outcomes (SO)",
    subtitle: "",
    outcomes: [
      {
        title: "A",
        text: "An ability to identify, formulate, and solve complex engineering problems using principles of mathematics, science, and engineering.",
        iconUrl: "https://www.svgrepo.com/show/385261/engineering-helmet-cog.svg"
      },
      {
        title: "B",
        text: "An ability to apply engineering design to produce solutions that meet specified needs while considering public health, safety, welfare, and global, cultural, social, environmental, and economic factors.",
        iconUrl: "https://www.svgrepo.com/show/486371/bulb-filled.svg"
      },
      {
        title: "C",
        text: "An ability to communicate effectively with a range of audiences, both in written and oral forms.",
        iconUrl: "https://www.svgrepo.com/show/311056/people-audience.svg"
      },
      {
        title: "D",
        text: "An ability to recognize ethical and professional responsibilities in engineering practice and make informed judgments that consider global, economic, environmental, and societal impacts.",
        iconUrl: "https://www.svgrepo.com/show/163020/heart-in-hands.svg"
      },
      {
        title: "E",
        text: "An ability to function effectively in teams, providing leadership, creating collaborative environments, setting goals, planning tasks, and meeting objectives.",
        iconUrl: "https://www.svgrepo.com/show/43640/team-leader.svg"
      },
      {
        title: "F",
        text: "An ability to develop and conduct experiments, analyze and interpret data, and use engineering judgment to draw conclusions.",
        iconUrl: "https://www.svgrepo.com/show/485751/lab.svg"
      },
      {
        title: "G",
        text: "An ability to acquire and apply new knowledge, using appropriate learning strategies, recognizing the need for continuous professional development.",
        iconUrl: "https://www.svgrepo.com/show/374935/knowledge-base.svg"
      },
      {
        title: "H",
        text: "An ability to use modern engineering tools, techniques, and computing technologies necessary for electrical engineering practice.",
        iconUrl: "https://www.svgrepo.com/show/198090/gear.svg"
      },
      {
        title: "I",
        text: "An ability to apply advanced mathematics, sciences, and engineering sciences to model, analyze, design, and implement electrical systems.",
        iconUrl: "https://www.svgrepo.com/show/447780/science.svg"
      },
      {
        title: "J",
        text: "An understanding of contemporary issues and emerging technologies in electrical engineering.",
        iconUrl: "https://www.svgrepo.com/download/112258/thinking.svg"
      }
    ]
  },

  curriculum: {
    title: "Curriculum Overview",
    text: "The 2024 Revised Bachelor of Science in Electrical Engineering curriculum...",
    years: [
      {
        id: "1st-Year", label: "First Year",
        terms: [
          {
            name: "First Semester",
            courses: [
              { code: "COE 102", title: "Calculus 1 (Differential Calculus)", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "None", coreq: "None" }, 
              { code: "COE 103", title: "Chemistry for Engineers", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "None", coreq: "None" }, 
              { code: "COE 103L", title: "Chemistry for Engineers - Lab", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "None", coreq: "None" }, 
              { code: "ETH 101", title: "Ethics", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "None", coreq: "None" }, 
              { code: "MMW 101", title: "Mathematics in the Modern World", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "None", coreq: "None" }, 
              { code: "UTS 101", title: "Understanding the Self", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "None", coreq: "None" }, 
              { code: "COE 100", title: "Mathematics for Engineers", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "None", coreq: "None" }, 
              { code: "COE 101", title: "Introduction to Engineering", lab_units: 0, lab_hours: 0, lec_units: 1, lec_hours: 1, prereq: "None", coreq: "None" }, 
              { code: "PAL 101", title: "GE Elective 1 (Panitikan at Lipunan)", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "None", coreq: "None" }, 
              { code: "PCM 101", title: "Purposive Communication", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "None", coreq: "None" }, 
              { code: "PE 10", title: "PATHFit 1", lab_units: 0, lab_hours: 0, lec_units: 2, lec_hours: 2, prereq: "None", coreq: "None" }, 
              { code: "NSTP 10", title: "National Service Training Program 1", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "None", coreq: "None" }, 
              { code: "TOTAL", title: "", lab_units: 1, lab_hours: 3, lec_units: 27, lec_hours: 30, prereq: "", coreq: "" }, 
            ]
          },
          {
            name: "Second Semester",
            courses: [
              { code: "COE 104", title: "Calculus 2", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "COE 102", coreq: "None" }, 
              { code: "EE 100", title: "Mathematics for Electrical Engineers", lab_units: 0, lab_hours: 0, lec_units: 2, lec_hours: 2, prereq: "COE 100", coreq: "None" }, 
              { code: "EE 101", title: "EE Orientation", lab_units: 0, lab_hours: 0, lec_units: 2, lec_hours: 2, prereq: "COE 101", coreq: "None" }, 
              { code: "EE 102D", title: "EE Drawing", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "None", coreq: "None" }, 
              { code: "COE 105", title: "Physics for Engineers", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "COE 102", coreq: "COE 104" }, 
              { code: "COE 105L", title: "Physics for Engineers - Lab", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "COE 102", coreq: "COE104, COE105" }, 
              { code: "RPH 101", title: "Readings in Philippine History", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "None", coreq: "None" }, 
              { code: "TCW 101", title: "The Contemporary World", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "None", coreq: "None" }, 
              { code: "AAP 101", title: "Art Appreciation", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "None", coreq: "None" }, 
              { code: "COE 106", title: "Engineering Data Analysis", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "COE 102", coreq: "None" }, 
              { code: "PE 11", title: "PATHFit 2", lab_units: 0, lab_hours: 0, lec_units: 2, lec_hours: 2, prereq: "PE 10", coreq: "None" }, 
              { code: "NSTP 11", title: "National Service Training Program 2", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "NSTP 10", coreq: "None" }, 
              { code: "TOTAL", title: "", lab_units: 2, lab_hours: 6, lec_units: 24, lec_hours: 27, prereq: "", coreq: "" },
            ]
          }
        ]
      },

      {
        id: "2nd-Year", label: "Second Year",
        terms: [
          {
            name: "First Semester",
            courses: [
              { code: "COE 201", title: "Differential Equations", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "COE 104 / EE 100", coreq: "None" }, 
              { code: "EE 201", title: "Electrical Circuits 1", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "EE 100, EE 101, COE 104, COE 105/105L", coreq: "EE 201L" }, 
              { code: "EE 201L", title: "Electrical Circuits 1 - Lab", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "EE 100, EE 101, COE 104, COE 105/105L", coreq: "EE 201" }, 
              { code: "EE 202", title: "Engineering Mechanics", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "COE 105/105L", coreq: "None" }, 
              { code: "EET 203D", title: "Electrical Engineering Technology", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "EE 101", coreq: "EE 201/201L" }, 
              { code: "EE 204", title: "Basic Thermodynamics", lab_units: 0, lab_hours: 0, lec_units: 2, lec_hours: 2, prereq: "COE 105/105L", coreq: "None" }, 
              { code: "EE 205L", title: "Computer Programming", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "None", coreq: "None" }, 
              { code: "EE 206L", title: "Computer-Aided Drafting", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "EE 102D", coreq: "None" }, 
              { code: "RLW 101", title: "Life and Works of Rizal", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "None", coreq: "None" }, 
              { code: "AE 101", title: "GE Elective 2 (Academic English)", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "None", coreq: "None" }, 
              { code: "SSP 101d", title: "GE Elective 3 (The Entrepreneurial Mind)", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "None", coreq: "None" }, 
              { code: "PE 12", title: "PATHFit 3", lab_units: 0, lab_hours: 0, lec_units: 2, lec_hours: 2, prereq: "PE 11", coreq: "None" }, 
              { code: "TOTAL", title: "", lab_units: 4, lab_hours: 12, lec_units: 22, lec_hours: 22, prereq: "", coreq: "" }, 
            ]
          },
          {
            name: "Second Semester",
            courses: [
              { code: "EE 208", title: "Engineering Math for EE", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "COE 201", coreq: "None" }, 
              { code: "EE 209", title: "Fundamentals of Deformable Bodies", lab_units: 0, lab_hours: 0, lec_units: 2, lec_hours: 2, prereq: "EE 202", coreq: "None" }, 
              { code: "EE 210", title: "Electrical Circuits 2", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "EE 201/201L", coreq: "None" }, 
              { code: "EE 210L", title: "Electrical Circuits 2 - Lab", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "EE 201/201L", coreq: "EE 201" }, 
              { code: "EE 211", title: "Electronic Circuits: Devices and Analysis", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "EE 201/201L", coreq: "None" }, 
              { code: "EE 211L", title: "Electronic Circuits: Devices and Analysis - Lab", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "EE 201/201L", coreq: "EE 211" }, 
              { code: "EE 212", title: "Fluid Mechanics", lab_units: 0, lab_hours: 0, lec_units: 2, lec_hours: 2, prereq: "COE 105/105L", coreq: "None" }, 
              { code: "EE 213", title: "Electromagnetics", lab_units: 0, lab_hours: 0, lec_units: 2, lec_hours: 2, prereq: "COE 105/105L, COE 201", coreq: "None" }, 
              { code: "EE 214", title: "Environmental Science and Engineering", lab_units: 0, lab_hours: 0, lec_units: 2, lec_hours: 2, prereq: "None", coreq: "None" }, 
              { code: "EE 215", title: "Information Technology", lab_units: 0, lab_hours: 0, lec_units: 2, lec_hours: 2, prereq: "EE 205L, EE 206L", coreq: "None" }, 
              { code: "EE 216", title: "Engineering Economics", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "COE 106", coreq: "None" }, 
              { code: "STS 101", title: "Science, Technology and Society", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "None", coreq: "None" }, 
              { code: "PE 13", title: "PATHFit 4", lab_units: 0, lab_hours: 0, lec_units: 2, lec_hours: 2, prereq: "PE 12", coreq: "None" }, 
              { code: "TOTAL", title: "", lab_units: 2, lab_hours: 6, lec_units: 27, lec_hours: 27, prereq: "", coreq: "" },
            ]
          }
        ]
      },

      {
        id: "3rd-Year", label: "Third Year",
        terms: [
          {
            name: "First Semester",
            courses: [
              { code: "EE 300", title: "EE Law, Codes and Professional Ethics", lab_units: 0, lab_hours: 0, lec_units: 2, lec_hours: 2, prereq: "ETH 101", coreq: "None" }, 
              { code: "EE 301", title: "Electrical Circuits 3", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "EE 210/210L", coreq: "None" }, 
              { code: "EE 301L", title: "Electrical Circuits 3 - Lab", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "EE 210/210L", coreq: "EE 301" }, 
              { code: "EE 302", title: "Electrical Machines 1", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "EE 213, EE 210/210L", coreq: "None" }, 
              { code: "EE 302L", title: "Electrical Machines 1 - Lab", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "EE 213, EE 210/210L", coreq: "EE 302" }, 
              { code: "EE 303", title: "Numerical Methods and Analysis", lab_units: 0, lab_hours: 0, lec_units: 2, lec_hours: 2, prereq: "EE 208", coreq: "None" }, 
              { code: "EE 303L", title: "Numerical Methods and Analysis - Lab", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "EE 208", coreq: "EE 303" }, 
              { code: "EE 304", title: "Logic Circuits and Switching Theory", lab_units: 0, lab_hours: 0, lec_units: 2, lec_hours: 2, prereq: "EE 211/211L", coreq: "None" }, 
              { code: "EE 304L", title: "Logic Circuits and Switching Theory - Lab", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "EE 211/211L", coreq: "EE 304" }, 
              { code: "EE 306", title: "Industrial Electronics", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "EE 211/211L", coreq: "None" }, 
              { code: "EE 306L", title: "Industrial Electronics - Lab", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "EE 211/211L", coreq: "EE 306" }, 
              { code: "EE 307", title: "Fundamentals of Electronic Communications", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "EE 211/211L", coreq: "None" }, 
              { code: "TOTAL", title: "", lab_units: 5, lab_hours: 15, lec_units: 18, lec_hours: 18, prereq: "", coreq: "" }, 
            ]
          },
          {
            name: "Second Semester",
            courses: [
              { code: "EE 309", title: "Electrical Machines 2", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "EE 302/302L", coreq: "None" },
              { code: "EE 309L", title: "Electrical Machines 2 Lab", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "EE 302/302L", coreq: "EE 309" },
              { code: "EE 310", title: "Electrical Apparatus and Devices", lab_units: 0, lab_hours: 0, lec_units: 2, lec_hours: 2, prereq: "EE 301/310L", coreq: "None" },
              { code: "EE 310L", title: "Electrical Apparatus and Devices Lab", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "EE 301/310L", coreq: "EE 310" },
              { code: "EE 311", title: "Microprocessor Systems", lab_units: 0, lab_hours: 0, lec_units: 2, lec_hours: 2, prereq: "EE 304/304L", coreq: "None" },
              { code: "EE 311L", title: "Microprocessor Systems Lab", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "EE 304/304L", coreq: "EE 311" },
              { code: "EE 313", title: "Basic Occupational Safety and Health", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "EE 300", coreq: "None" },
              { code: "EE 314", title: "Feedback Control Systems", lab_units: 0, lab_hours: 0, lec_units: 2, lec_hours: 2, prereq: "EE 208, EE 211/211L", coreq: "None" },
              { code: "EE 314L", title: "Feedback Control Systems Lab", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "EE 208, EE 211/211L", coreq: "EE 314" },
              { code: "EE 315", title: "Materials Science and Engineering", lab_units: 0, lab_hours: 0, lec_units: 2, lec_hours: 2, prereq: "COE 103/103L, EE 209", coreq: "None" },
              { code: "EE 316", title: "Electrical Equipment Operation and Maintenance", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "EE 301/301L", coreq: "None" },
              { code: "EE 317", title: "Management of Engineering Projects", lab_units: 0, lab_hours: 0, lec_units: 2, lec_hours: 2, prereq: "EE 216", coreq: "None" },
              { code: "EE 318", title: "Research Methods", lab_units: 0, lab_hours: 0, lec_units: 2, lec_hours: 2, prereq: "COE 106", coreq: "EE 309/309L" },
              { code: "TOTAL", title: "", lab_units: 4, lab_hours: 12, lec_units: 21, lec_hours: 21, prereq: "", coreq: "" },
            ]
          }
        ]
      },

      {
        id: "summer", label: "Summer Term",
        terms: [
          {
            name: "Summer Session",
            courses: [
              { code: "OJT 400", title: "On the Job Training (OJT)", lab_units: 5, lab_hours: 250, lec_units: 0, lec_hours: 0, prereq: "EE 300, EE 301/301L, EE 302/302L, EE 303/303L, EE 304/304L, EE 306/306L, EE 307, EE 309/309L, EE 310/310L, EE 311/311L, EE 313, EE 314/314L, EE 315, EE 316, EE 317, EE 318", coreq: "None" },
              { code: "TOTAL", title: "", lab_units: 5, lab_hours: 250, lec_units: 0, lec_hours: 0, prereq: "", coreq: "" },
            ]
          }
        ]
      }, 
      
      {
        id: "4th-Year", label: "Fourth Year",
        terms: [
          {
            name: "First Semester",
            courses: [
              { code: "EE 401", title: "Electrical Standards and Practices", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "EE 313", coreq: "None" },
              { code: "EE 401L", title: "Electrical Standards and Practices Lab", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "EE 313", coreq: "EE 401" },
              { code: "EE 403", title: "EE Elective 1 (Renewable Energy)", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "EE 214", coreq: "EE 401/401L" },
              { code: "EE 404D", title: "Research Methods Design", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "EE 318", coreq: "None" },
              { code: "EE 405", title: "Instrumentation and Control", lab_units: 0, lab_hours: 0, lec_units: 2, lec_hours: 2, prereq: "EE 314/314L", coreq: "None" },
              { code: "EE 405L", title: "Instrumentation and Control Lab", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "EE 314/314L", coreq: "EE 405" },
              { code: "EE 406", title: "Technopreneurship", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "EE 317", coreq: "EE 404D" },
              { code: "EE 407", title: "MATH Correlation", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "EE 309/309L, EE 310/310L, EE 311/311L, EE 313, EE 314/314L, EE 315, EE 316, EE 317, EE 318", coreq: "None" },
              { code: "EE 408", title: "ESAS Correlation", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "EE 309/309L, EE 310/310L, EE 311/311L, EE 313, EE 314/314L, EE 315, EE 316, EE 317, EE 318", coreq: "None" },
              { code: "EE 409", title: "Power Systems Analysis", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "EE 303/303L", coreq: "EE 401/401L" },
              { code: "EE 409L", title: "Power Systems Analysis Lab", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "EE 303/303L", coreq: "EE 401/401L, EE 409" },
              { code: "TOTAL", title: "", lab_units: 6, lab_hours: 18, lec_units: 14, lec_hours: 14, prereq: "None", coreq: "None" },
            ]
          },
          {
            name: "Second Semester",
            courses: [
              { code: "EE 410", title: "Electrical Systems and Illumination Engineering Design", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "EE 309/309L, EE 401/401L", coreq: "None" },
              { code: "EE 410D", title: "Electrical Systems and Illumination Engineering Design Lab", lab_units: 2, lab_hours: 6, lec_units: 0, lec_hours: 0, prereq: "EE 309/309L, EE 401/401L", coreq: "EE 410" },
              { code: "EE 411", title: "EE Elective 2 (Power System Protection)", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "EE 403", coreq: "None" },
              { code: "EE 412D", title: "Research Project or Capstone Design Project", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "EE 404D", coreq: "None" },
              { code: "EE 413F", title: "Fieldtrip and Seminars", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "None", coreq: "EE 412D" },
              { code: "EE 414D", title: "Fundamentals of Power Plant Engineering", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "EE 403, EE 409/409L", coreq: "None" },
              { code: "EE 415", title: "Distribution System and Substation Design", lab_units: 0, lab_hours: 0, lec_units: 2, lec_hours: 2, prereq: "EE 409/409L", coreq: "EE 414/414D" },
              { code: "EE 415D", title: "Distribution System and Substation Design Lab", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "EE 409/409L", coreq: "EE 414/414D, EE 415" },
              { code: "EE 417", title: "EEPS Correlation", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "EE 407, EE 408", coreq: "None" },
              { code: "TOTAL", title: "", lab_units: 7, lab_hours: 21, lec_units: 8, lec_hours: 8, prereq: "None", coreq: "None" }
            ]
          }
        ]
      },
    ],
    bullets: [
      {
        title: "Pre‑Engineering Formation (Early Curriculum Stages)",
        text: "The curriculum begins with a solid foundation in mathematics, natural sciences, computing, and introductory engineering, providing students with the analytical tools needed to engage with more advanced electrical engineering coursework. These early subjects align with the OBE mandate for structured progression, ensuring that learners acquire the core reasoning, communication skills, and ethical awareness necessary for subsequent technical learning.  \tGeneral education courses complement these technical foundations by strengthening students' communication, critical‑thinking, and societal awareness—competencies later applied in laboratory work, design activities, and collaborative problem‑solving tasks. The College’s sustained curricular development philosophy ensures that these foundational courses support not only academic progression but also student readiness for higher‑level engineering thinking."
      },
      {
        title: "Core Electrical Engineering Scaffold (Intermediate Stages)",
        text: "Following the foundational courses, students advance into core electrical engineering subjects, which define the discipline’s analytical and technical structure: \n\n <b>•\tCircuits & Electronics</b> – development of analytical and design skills for linear circuits and electronic devices, supported by laboratory measurement and data interpretation activities.\n\n<b>•\tSignals, Controls, and Instrumentation</b> – introduction to signal behavior, feedback systems, and measurement frameworks essential to automation and monitoring applications. \n\n<b>•\tElectromagnetics & Energy Conversion</b> – principles of electric and magnetic fields, electrical machines, and conversion processes forming the basis for power and systems engineering.  The OBE framework requires that teaching strategies and assessments in these courses directly map to student outcomes (problem‑solving, experimentation, communication, design under constraints, etc.) and are monitored for CQI."
      },
      {
        title: "Professional Tracks and Application Domains (Advanced Stages)",
        text: "At advanced levels, students engage in applied and domain‑specific learning consistent with publicly published descriptions of BulSU’s BSEE areas: \n\n <b>•\tPower Systems Engineering</b> – study of generation, transmission, distribution, system protection, and grid operations. \n\n<b>•\tRenewable Energy & Sustainable Technologies</b> – topics related to emerging energy systems and efficiency, aligned with evolving national industry needs.\n\n<b>•\tControl Systems & Instrumentation</b> – automation, sensors, and process control for industrial applications. Laboratories, design activities, and project‑based learning strengthen students’ ability to work in teams, communicate effectively, apply modern engineering tools, and make ethical and contextual engineering decisions—all outcomes required under the College’s OBE structure."
      },
      {
        title: "Integrative Experiences, Industry Linkages, and Continuous Improvement",
        text: "The curriculum culminates in integrative learning experiences, where students synthesize knowledge from foundational, core, and advanced courses to propose and implement engineering solutions. These activities serve as capstone‑style demonstrations of students’ readiness for practice within the competencies defined by the OBE framework. \t \tThe program incorporates industry‑aligned applications, encouraging students to engage with challenges relevant to local power, industrial, and community contexts. Such alignment reflects the College’s commitment to program relevance and responsiveness, supported by ongoing curricular enhancement efforts.  CQI mechanisms ensure that feedback from assessments, stakeholders, and performance data continually refine the curriculum and instructional strategies."
      }
    ]
  },

  laboratories: {
    title: "Laboratories",
    items: [
      {
        name: "NAME OF LABORATORY 1",
        description: "Short description of the laboratory's focus and activities.",
        photo: `${base}/logo.png`
      },
      {
        name: "NAME OF LABORATORY 2",
        description: "Short description of the laboratory's focus and activities.",
        photo: `${base}/logo.png`

      },
      {
        name: "NAME OF LABORATORY 3",
        description: "Short description of the laboratory's focus and activities.",
        photo: `${base}/logo.png`
      }
    ]
  },

  faculty: {
    title: "Faculty",
    members: [
      { 
        name: "Engr. Eleazer C. Nabong", 
        role: "Program Chair",
        photo: `${base}/nabong.png`
      },
      { 
        name: "Engr. Arjay R. Alba", 
        role: "Faculty",
        photo: `${base}/alba.png`
      },
      { 
        name: "Engr. Dennis L. Aguirre", 
        role: "Faculty" ,
        photo: `${base}/aguirre.png`
      },
      { 
        name: "Engr. Reynaldo C. Alejandria", 
        role: "Faculty" ,
        photo: `${base}/alejandria.png`
      },
      { 
        name: "Engr. Ronan Cadmiel C. Castro", 
        role: "Faculty" ,
        photo: `${base}/castro.png`
      },
      // { 
      //   name: "Engr. John Byrone A. Clavio", 
      //   role: "Faculty" ,
      //   photo: `${base}/logo.png`
      // },
      { 
        name: "Engr. John Paul V. Dela Cruz", 
        role: "Faculty" ,
        photo: `${base}/dela_cruz.png`
      },
      { 
        name: "Engr. Jovita SP. Domingo", 
        role: "Faculty" ,
        photo: `${base}/domingo.png`
      },
      { 
        name: "Engr. Riah Ann DR. Fermin-Cayanan", 
        role: "Faculty",
        photo: `${base}/cayanan.png` 
      },
      { 
        name: "Engr. Nhowel F. Jimenez", 
        role: "Faculty",
        photo: `${base}/jimenez.png`
      },
      { 
        name: "Engr. Mark Adrian R. Lunaria", 
        role: "Faculty" ,
        photo: `${base}/lunaria.png`
      },
      // { 
      //   name: "Engr. Erwin DR. Magsakay", 
      //   role: "Faculty" ,
      //   photo: `${base}/logo.png`
      // },
      { 
        name: "Engr. Mark Louie D. Martinez", 
        role: "Faculty",
        photo: `${base}/martinez.png`
      },
      { 
        name: "Engr. Rogelio C. Pimentel", 
        role: "Faculty" ,
        photo: `${base}/pimentel.png`
      },
      { 
        name: "Engr. Anthony T. Reyes", 
        role: "Faculty" ,
        photo: `${base}/reyes.png`
      },
      { 
        name: "Engr. Ronel I. Serrano", 
        role: "Faculty" ,
        photo: `${base}/serrano.png`
      },
      { 
        name: "Engr. Allan Clark H. Timoteo", 
        role: "Faculty" ,
        photo: `${base}/timoteo.png`
      },
      { 
        name: "Engr. Diane H. Villanueva", 
        role: "Faculty" ,
        photo: `${base}/villanueva.png`
      },
    ]
  },

  careers: {
    title: "Career Opportunities",
    subtitle: "Edit careers subtitle here.",
    categories: [
      {
        title: "Power and Energy Sector Careers",
        cards: [
          {
            icon: "⚡",
            title: "Power Systems Engineer",
            text: "Designs, analyzes, and maintains transmission, distribution, and grid systems; also works on renewable energy integration and grid stability."
          },
          {
            icon: "📐",
            title: "Electrical Design Engineer (Power)",
            text: "Creates electrical plans for buildings, facilities, and industrial plants, including load analysis, fault studies, and protective device coordination."
          },
          {
            icon: "🏭",
            title: "Power Plant / Substation Engineer",
            text: "Assists in operations, protection, testing, and maintenance of generating plants and substations."
          },
          {
            icon: "🌞",
            title: "Grid Connections / Renewable Energy Engineer",
            text: "Works on connecting solar farms, wind projects, and energy storage systems to the grid."
          }
        ]
      },
      {
        title: "Electronics, Controls, and Automation Careers",
        cards: [
          {
            icon: "🔌",
            title: "Electronics Engineer (Devices & Systems)",
            text: "Builds or tests electronic circuits, embedded systems, and electronics."
          },
          {
            icon: "🤖",
            title: "Control Systems Engineer",
            text: "Designs and maintains automation systems and robotics."
          },
          {
            icon: "🧠",
            title: "Embedded Systems / Microprocessor Engineer",
            text: "Develops firmware and embedded hardware for IoT devices."
          },
          {
            icon: "🔋",
            title: "Power Electronics Engineer",
            text: "Works on inverters, converters, motor drives, and EV chargers."
          }
        ]
      },
      {
        title: "Industrial, Manufacturing, and Maintenance Careers",
        cards: [
          {
            icon: "🏗️",
            title: "Industrial / Plant Electrical Engineer",
            text: "Oversees electrical systems in factories and industrial plants."
          },
          {
            icon: "🛠️",
            title: "Maintenance and Reliability Engineer",
            text: "Ensures reliability and safety of electrical equipment."
          },
          {
            icon: "🏢",
            title: "Facilities and Building Systems Engineer",
            text: "Designs and maintains electrical systems in large facilities."
          }
        ]
      },
      {
        title: "Research, Development, Consulting, and Academia",
        cards: [
          {
            icon: "🔬",
            title: "Research & Development (R&D) Engineer",
            text: "Works on new technologies in electronics, power systems, and automation."
          },
          {
            icon: "📊",
            title: "Technical Consultant / Engineering Analyst",
            text: "Provides consulting in energy efficiency and power quality."
          },
          {
            icon: "🎓",
            title: "Academic Instructor / Trainer",
            text: "Graduates may teach engineering subjects with further studies."
          }
        ]
      },
      {
        title: "Emerging and High-Growth Career Paths",
        cards: [
          {
            icon: "🌱",
            title: "Renewable Energy Systems Engineer",
            text: "Designs solar PV, wind, and battery energy storage systems."
          },
          {
            icon: "📡",
            title: "Smart Grid / Energy Management Engineer",
            text: "Works on smart meters, automation, and energy data analytics."
          },
          {
            icon: "🚗",
            title: "Electric Vehicle (EV) and Charging Infrastructure Engineer",
            text: "Develops EV drivetrains and DC fast charging systems."
          }
        ]
      }
    ]
  }
};