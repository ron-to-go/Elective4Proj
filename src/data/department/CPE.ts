const base = "/departments/CPE"; // public folder path

export const CPE = {
  code: "CPE",
  title: "COMPUTER ENGINEERING",
  subtitle: "Bachelor of Science in Computer Engineering",

  theme: { accentHex: "#2563eb" },

  images: {
    heroLeft: `${base}/R3_pubmat.jpg`,
    heroBig: `${base}/Collo_team_samp.jpg`,
    heroSmall1: `${base}/quizzers_sample.jpg`,
    heroSmall2: `${base}/DSC_1611.JPG`,
    peo: `${base}/temp_peo.png`,
    watermark: `${base}/Dean_Off_samp.jpg`,
  },

  hero: {
    university: "Bulacan State University • College of Engineering",
    description: "The Bachelor of Science in Computer Engineering program builds competence in embedded systems, hardware-software integration, and network infrastructure through high-impact research and industry-aligned practice.",
    stats: [
      { label: "AACCUP accreditation", value: "Level II", highlight: true },
      { label: "Proposed Units", value: "182", highlight: false },
      { label: "Engineering Excellence", value: "Top 10", highlight: false }
    ]
  },

  links: {
    explore: "#",
    performance: "#"
  },

  programOverview: {
    heading: "Program Overview",
    text: "The Bachelor of Science in Computer Engineering program at Bulacan State University integrates computer science and electronics engineering to prepare students in designing and developing computer-based systems. It focuses on both hardware and software, covering areas such as embedded systems, programming, and computer architecture. Graduates are equipped to solve real-world engineering problems and pursue careers in IT, telecommunications, and electronics industries.",
    stats: [
      { value: "92%", label: "Passing Rate", highlight: true },
      { value: "40+", label: "Industry Partners", highlight: false },
      { value: "10", label: "Specialized Labs", highlight: false },
    ],
    mission: "To produce competent computer engineers equipped with the knowledge, skills, and values necessary to excel in the global technology landscape through innovative research and community extension.",
    vision: "A premier hub for Computer Engineering education, recognized for technological innovation and for producing ethically responsible professionals.",
  },

  peo: {
    title: "Program Educational Objectives",
    subtitle: "Three to five years after graduation, BulSU BSCpE alumni shall:",
    items: [
      { 
        title: "Engineering Foundations", 
        text: "To equip the graduates with a strong foundation in the basic physical and engineering sciences which could be a tool in planning, designing, development, management, and maintenance of computer systems." 
      },
      { 
        title: "Technical Expertise", 
        text: "To prepare graduates to lead in the design, analysis and applications of hardware and software computing structures for professional Computer Engineering career." 
      },
      { 
        title: "Leadership & Research", 
        text: "To arm the graduates to be knowledgeable of human, financial, physical and resource management and equip them with essential graduate research skills, specializing in one of the Computer Engineering fields." 
      },
      { 
        title: "Professional Ethics", 
        text: "To promote the holistic growth of the graduates by providing them with opportunities to enhance not only their vocational skills but also their life perspectives and value-system." 
      },
      { 
        title: "Innovation & Inquiry", 
        text: "To develop critical thinking and scientific inquiry through active participation and research endeavors." 
      },
      { 
        title: "Nation-Building", 
        text: "To promote a strong sense of nationalism through productive involvement in extension and community outreach programs." 
      }
    ],
  },

  so: {
    title: "Student Outcomes",
    subtitle: "By the time of graduation, the students of the Computer Engineering program shall have the ability to:",
    outcomes: [
      { title: "SO 1", text: "Apply knowledge of mathematics and science to solve complex engineering problems;" },
      { title: "SO 2", text: "Design and conduct experiments, as well as to analyze and interpret data;" },
      { title: "SO 3", text: "Design a system, component or process to meet desired needs with realistic constraints such as economic, environmental, social, political, ethical, health and safety, manufacturability, and sustainability, in accordance with standards;" },
      { title: "SO 4", text: "Function on multidisciplinary teams;" },
      { title: "SO 5", text: "Identify, formulate, and solve complex engineering problems;" },
      { title: "SO 6", text: "Understand the professional and ethical responsibility;" },
      { title: "SO 7", text: "Communicate effectively;" },
      { title: "SO 8", text: "Have a broad education necessary to understand the impact of engineering solutions in a global, economic, environmental, and societal context;" },
      { title: "SO 9", text: "Recognition of the need for, and an ability to engage in life-long learning;" },
      { title: "SO 10", text: "Knowledge of contemporary issues;" },
      { title: "SO 11", text: "Use techniques, skills and modern engineering tools necessary for engineering practices;" },
      { title: "SO 12", text: "Have a knowledge of understanding of engineering and management principles as a member and leader in a team, to manage projects and in multidisciplinary environments." },
    ],
  },

  curriculum: {
    title: "Curriculum Overview",
    text: "The BSCpE curriculum at BulSU transitioned to a four-year program in 2018. It is designed to balance general engineering sciences, hardware-software integration, and professional specialization.",
    
    bullets: [
        "Mathematics & Sciences: Calculus (1 & 2), Differential Equations, Physics for Engineers, and Chemistry.",
        "Core Engineering: Programming Logic & Design, Computer Fundamentals, and Circuits.",
        "Major/Professional Courses: Digital Logic Design, Operating Systems, Computer Architecture, Data Communications and Networking, and Microprocessors.",
        "Capstone/Thesis: A significant portion of the final years is dedicated to a design project or undergraduate thesis (similar to your current pork freshness project).",
    ],
    
    // Interactive Tab Data
    yearLevels: [
      {
        year: "1st Year",
        title: "Engineering Fundamentals",
        totalUnits: 23,
        subjects: [
          { name: "Calculus 1 & 2", units: 6 },
          { name: "Chemistry & Physics for Engineers", units: 8 },
          { name: "Computer Fundamentals & Programming", units: 3 },
          { name: "Engineering Drawing & CAD", units: 2 },
          { name: "General Education (Math, Self, NSTP)", units: 4 },
        ],
      },
      {
        year: "2nd Year",
        title: "Core Hardware & Logic",
        totalUnits: 24,
        subjects: [
          { name: "Differential Equations & Discrete Math", units: 6 },
          { name: "Fundamentals of Electronic Circuits", units: 4 },
          { name: "Object-Oriented Programming", units: 3 },
          { name: "Logic Circuits and Switching Theory", units: 4 },
          { name: "Data Structures & Algorithm Analysis", units: 3 },
          { name: "Engineering Mechanics", units: 4 },
        ],
      },
      {
        year: "3rd Year",
        title: "System Integration",
        totalUnits: 21,
        subjects: [
          { name: "Microprocessors & Microcontrollers", units: 4 },
          { name: "Computer Architecture & Organization", units: 3 },
          { name: "Data Communications & Networking", units: 4 },
          { name: "Operating Systems & Software Eng.", units: 6 },
          { name: "Digital Signal Processing", units: 4 },
        ],
      },
      {
        year: "4th Year",
        title: "Specialization & Capstone",
        totalUnits: 18,
        subjects: [
          { name: "Artificial Intelligence & IoT", units: 6 },
          { name: "Computer Systems Security", units: 3 },
          { name: "CpE Laws and Professional Ethics", units: 3 },
          { name: "CpE Practice and Design 1 & 2 (Thesis)", units: 6 },
        ],
      },
    ]
  },

  laboratories: {
    title: "Laboratories",
    // Updated to CPE specific labs
    items: ["CISCO Networking Lab", "Microprocessor & Embedded Systems Lab", "Software Engineering Lab", "Electronics & Logic Circuits Lab"],
  },

  calendar: {
    title: "Upcoming Events & Defenses",
    subtitle: "Stay updated with the latest department activities, seminar schedules, and critical capstone defense dates.",
    events: [
      {
        id: "evt-1",
        date: "2026-03-18", // Format: YYYY-MM-DD
        title: "CpE Design Project 1: Final Defense",
        type: "defense", // "defense" or "event"
        time: "08:00 AM - 05:00 PM",
        location: "COE2 Building, Rooms 203-204"
      },
      {
        id: "evt-2",
        date: "2026-03-24",
        title: "Final Examinations Day 1",
        type: "event",
        time: "All Day",
        location: "Hostel"
      },
      {
        id: "evt-3",
        date: "2026-04-10",
        title: "Seminar",
        type: "event",
        time: "12:00 NN - 05:00 PM",
        location: "BSU Hostel"
      },
      {
        id: "evt-4",
        date: "2026-05-15",
        title: "Lorem Ipsum",
        type: "defense",
        time: "Lorem Ipsum",
        location: "Lorem Ipsum"
      }
    ]
  },

  faculty: {
    title: "Faculty",
    members: [
      { 
        name: "Engr. Maria Lorena SP. Villena", 
        role: "Program Chair, Faculty",
        imageUrl: "/departments/CPE/faculty/lorena_villena.jpg"
      },
      { 
        name: "Engr. Alexander M. Aquino", 
        role: "Faculty",
        imageUrl: "/departments/CPE/faculty/alexander_aquino.jpg"
      },
      { 
        name: "Dr. Lech Walesa M. Navarra", 
        role: "Faculty",
        imageUrl: "/departments/CPE/faculty/lech_navarra.jpg"
      },
      { 
        name: "Engr. Bernard G. Yasay", 
        role: "Faculty",
        imageUrl: "/departments/CPE/faculty/bernard_yasay.jpg"
      },
      { 
        name: "Engr. Catherine V. Dela Cruz", 
        role: "Faculty",
        imageUrl: "/departments/CPE/faculty/catherine_delacruz.jpg"
      },
      { 
        name: "Engr. Richard Y. Dela Cruz", 
        role: "Faculty",
        imageUrl: "/departments/CPE/faculty/richard_delacruz.jpg"
      },
      { 
        name: "Dr. Ma. Magdalena V. Gatdula", 
        role: "University Registrar, Faculty",
        imageUrl: "/departments/CPE/faculty/magdalena_gatdula.jpeg"
      },
      { 
        name: "Dr. Monaliza S. Jimenez", 
        role: "Faculty",
        imageUrl: "/departments/CPE/faculty/monaliza_jimenez.png"
      },
      { 
        name: "Engr. Julius Vincent M. Abanel", 
        role: "Part-Time Instructor, Faculty",
        imageUrl: "/departments/CPE/faculty/julius_abanel.JPG"
      },
      { 
        name: "Engr. Arlyne Joy De Jesus", 
        role: "Part-Time Instructor, Faculty",
        imageUrl: "/departments/CPE/faculty/arlyne_dejesus.jpg"
      },
      { 
        name: "Engr. Januarius Cruz", 
        role: "Part-Time Instructor, Faculty",
        imageUrl: "/departments/CPE/faculty/januarius_cruz.jpg"
      },
      { 
        name: "Engr. Jannine Solana Muñoz", 
        role: "Part-Time Instructor, Faculty",
        imageUrl: "/departments/CPE/faculty/jannine_munoz.jpg"
      },
      { 
        name: "Engr. Hiroyoshi DG. Arai", 
        role: "Part-Time Instructor, Faculty",
        imageUrl: "/departments/CPE/faculty/hiroyoshi_arai.jpg"
      },
      { 
        name: "Engr. Robert Justin S. Chavez", 
        role: "Faculty",
        imageUrl: "/departments/CPE/faculty/robert_chavez.jpg"
      },
      { 
        name: "Engr. Alberto C. Cruz Jr.", 
        role: "Faculty",
        imageUrl: "../departments/CPE/faculty/alberto_cruz.jpeg"
      },
      { 
        name: "Engr. Maria Ana G. Dangan", 
        role: "Guest Lecturer, Faculty",
        imageUrl: "../departments/CPE/faculty/maria_dangan.jpeg"
      },
      { 
        name: "Engr. Sheila May M. Liwag", 
        role: "Guest Lecturer, Faculty",
        imageUrl: "/departments/CPE/faculty/sheila_liwag.jpg"
      },
    ],
  },

  careers: {
    title: "Career Opportunities",
    subtitle: "Graduates of the BSCpE program are highly sought after in various technology sectors.",
    // Updated to CPE specific careers
    cards: [
      { icon: "💻", title: "Software Engineer", text: "Design, develop, and test software applications, embedded systems, and enterprise solutions." },
      { icon: "🌐", title: "Network Administrator", text: "Configure, maintain, and secure complex computer networks and IT infrastructures for organizations." },
      { icon: "🤖", title: "IoT / Embedded Systems Developer", text: "Build and program microcontrollers and smart devices that bridge the gap between hardware and software." },
    ],
  },
};