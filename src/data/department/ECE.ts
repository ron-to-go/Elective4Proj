const base = "/departments/ECE";

const facultyMembers = [
  { name: "Engr. Arjay R. Alba", role: "Dean", image: `${base}/engr_alba-removebg-preview.png` },
  { name: "Engr. Rhian Ann Dr. Fermin-Cayanan", role: "Associate Dean", image: `${base}/engr_fermin-removebg-preview.png` },
  { name: "Engr. Donald M. Lapiguera", role: "Department Chair", image: `${base}/engr_donald.png` },
  { name: "Engr. Mervin E. Albalate", role: "Unit Head", image: `${base}/engr_albalate.png` },
  { name: "Engr. Russell N. Alfonso, Ph.D, PECE, ASEAN Engr.", role: "Faculty", image: `${base}/engr_russel.png` },
  { name: "Engr. Hillario A. Calinao, Jr.", role: "Faculty", image: `${base}/engr_hilario.png` },
  { name: "Engr. Jeffrey V. Cayetano", role: "Faculty", image: `${base}/engr_cayetano.png` },
  { name: "Engr. Dennis R. Dela Cruz", role: "Faculty", image: `${base}/engr_delacruz.jpg` },
  { name: "Engr. Reagan L. Galvez", role: "Faculty", image: `${base}/engr_galvez.png` },
  { name: "Engr. Nemuel Norman F. Giron", role: "Faculty", image: `${base}/engr_giron.png` },
  { name: "Engr. Albert Ian R. Javier", role: "Faculty", image: `${base}/engr_javier.png` },
  { name: "Engr. Amor A. Lacara", role: "Faculty", image: `${base}/engr_lacara.png` },
  { name: "Dr. Marlon C. Leyesa, PECE", role: "Faculty", image: `${base}/engr_leyesa.png` },
  { name: "Prof. Oliver R. Mariano, PECE, ASEAN Engr.", role: "Faculty", image: `${base}/engr_galvez.png` },
  { name: "Engr. Evangelyn C. Samson", role: "Faculty", image: `${base}/engr_samson.png` },
  { name: "Engr. Benjamin L. Santa Maria Jr.", role: "Faculty", image: `${base}/engr_santamaria.png` },
  { name: "Engr. Paul Ryan A. Santiago", role: "Faculty", image: `${base}/engr_santiago.png` },
  { name: "Engr. Rina S.P. Santiago", role: "Faculty", image: `${base}/engr_rina_santiago.png` },
  { name: "Dr. Christian S. Fajardo, PECE, ASEAN Engr.", role: "Guest Lecturer", image: `${base}/engr_fajardo.png` },
  { name: "Engr. Richard R. Garcia, PECE, ASEAN, ACPE, APEC Engr.", role: "Guest Lecturer", image: `${base}/engr_garcia.png` },
  { name: "Engr. Rannie D.S. Salvador", role: "Guest Lecturer", image: `${base}/engr_salvador.png` },
  { name: "Engr. Patrick John Z. Dayrit, PECE", role: "Guest Lecturer", image: `${base}/engr_dayrit.png` },
  { name: "Engr. Janette C. Centeno", role: "Faculty", image: `${base}/engr_centeno.png` },
  { name: "Engr. Dion Michael Mendoza", role: "Faculty", image: `${base}/engr_mendoza.png` },
];

export const ECE = {
  code: "ECE",
  title: "ELECTRONICS ENGINEERING",
  subtitle: "Bachelor of Science in Electronics Engineering",

  theme: { accentHex: "#8B65CF" },

  images: {
    heroLeft: `${base}/huawei_cloud.jpg`,
    heroBig: `${base}/horizon.jpg`,
    heroSmall1: `${base}/daungan.jpg`,
    heroSmall2: `${base}/ece_horizon.jpg`,
    peo: `${base}/peo.jpg`,
    ece_logo: `${base}/ece_logo.png`,
  },

  peo: {
    title: "Program Educational Objectives (PEO)",
    subtitle: "BulSU Electronics Engineering graduates are expected to apply technical competence, continue growing professionally, and contribute responsibly to industry and society.",
    bullets: [
      "Graduates will demonstrate their electronics engineering role in their field of work to cope with the needs and demands of the industry.",
      "Graduates will pursue lifelong learning through engagement and participation in continued professional development that expands their skills to adapt to the changing needs of the electronics engineering profession and community.",
      "Graduates will engage in community efforts for economic progress and/or environmental conservation/restoration."
    ],
  },

  so: {
    title: "Student Outcomes (SO)",
    subtitle: "The program ensures that students achieve specific competencies by the time of graduation.",
    outcomes: [
      { title: "a.", text: "Apply knowledge of mathematics, natural science, engineering fundamentals and an engineering specialization to the solution of complex engineering problems." },
      { title: "b.", text: "Conduct investigations of complex engineering problems using research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of information to provide valid conclusions." },
      { title: "c.", text: "Design solutions for complex engineering problems and design systems, components or processes that meet specified needs with appropriate consideration for public health and safety, cultural, societal, and environmental considerations." },
      { title: "d.", text: "Function effectively as an individual, and as a member or leader in diverse teams and in multi-disciplinary settings." },
      { title: "e.", text: "Identify, formulate, research literature and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences and engineering sciences." },
      { title: "f.", text: "Apply ethical principles and commit to professional ethics and responsibilities and norms of engineering practice." },
      { title: "g.", text: "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions." },
      { title: "h.", text: "Understand and evaluate the sustainability and impact of professional engineering work in the solution of complex engineering problems in societal and environmental context." },
      { title: "i.", text: "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change." },
      { title: "j.", text: "Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to professional engineering practice and solutions to complex engineering problems." },
      { title: "k.", text: "Create, select and apply appropriate techniques, resources, and modern engineering and IT tools, including prediction and modelling, to complex engineering problems with an understanding of the limitations." },
      { title: "l.", text: "Demonstrate knowledge and understanding of engineering management principles and economic decision-making and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments." },
      { title: "m.", text: "Understand at least one specialized field of Electronics Engineering practice." },
    ],
  },

  curriculum: {
    title: "Curriculum Overview",
    text: "Revised 2024 Curriculum based on CMO 101, series of 2017.",
    years: [
      {
        id: "1st-year",
        label: "1st Year",
        terms: [
          {
            name: "First Semester",
            courses: [
              { code: "MMW 101", title: "Mathematics in the Modern World", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "" },
              { code: "UTS 101", title: "Understanding the Self", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "" },
              { code: "PAL 101", title: "Panitikan at Lipunan", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "" },
              { code: "PCM 101", title: "Purposive Communication", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "" },
              { code: "ETH 101", title: "Ethics", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "" },
              { code: "COE 100", title: "Mathematics for Engineers", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "" },
              { code: "COE 101", title: "Introduction to Engineering", lab_units: 0, lab_hours: 0, lec_units: 1, lec_hours: 1, prereq: "" },
              { code: "COE 102", title: "Calculus 1", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "" },
              { code: "COE 103", title: "Chemistry for Engineers", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "" },
              { code: "COE 103L", title: "Chemistry for Engineers (Laboratory)", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, coreq: "COE 103" },
              { code: "PE 10", title: "PATHFit 1", lab_units: 0, lab_hours: 0, lec_units: 2, lec_hours: 2, prereq: "" },
              { code: "NSTP 10", title: "National Service Training Program 1", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "" },
              { code: "TOTAL", title: "Total Units", lab_units: 1, lab_hours: 3, lec_units: 30, lec_hours: 30 }
            ]
          },
          {
            name: "Second Semester",
            courses: [
              { code: "AE 101", title: "Academic English", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "" },
              { code: "STS 101", title: "Science, Technology, and Society", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "" },
              { code: "TCW 101", title: "The Contemporary World", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "" },
              { code: "COE 104", title: "Calculus 2", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "COE 102" },
              { code: "COE 105", title: "Physics for Engineers", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "COE 102", coreq: "COE 104" },
              { code: "COE 105L", title: "Physics for Engineers (Laboratory)", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "COE 102", coreq: "COE 104, COE 105" },
              { code: "ECE 101L", title: "Computer-Aided Design", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "" },
              { code: "ECE 102", title: "Materials Science and Engineering", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "COE 103, COE 103L" },
              { code: "ECE 103", title: "Physics 2", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "COE 102", coreq: "COE 105, COE 105L" },
              { code: "ECE 103L", title: "Physics 2 (Laboratory)", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "COE 102", coreq: "COE 105, COE 105L, ECE 103" },
              { code: "PE 11", title: "PATHFit 2", lab_units: 0, lab_hours: 0, lec_units: 2, lec_hours: 2, prereq: "PE 10" },
              { code: "NSTP 11", title: "National Service Training Program 2", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "NSTP 10" },
              { code: "TOTAL", title: "Total Units", lab_units: 3, lab_hours: 9, lec_units: 26, lec_hours: 26 }
            ]
          }
        ]
      },
      {
        id: "2nd-year",
        label: "2nd Year",
        terms: [
          {
            name: "First Semester",
            courses: [
              { code: "RPH 101", title: "Readings in Philippine History", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "" },
              { code: "COE 201", title: "Differential Equations", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "COE 104" },
              { code: "ECE 201", title: "Engineering Economics", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "COE 100" },
              { code: "ECE 202", title: "Circuits 1", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "ECE 103, ECE 103L" },
              { code: "ECE 202L", title: "Circuits 1 (Laboratory)", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "ECE 103, ECE 103L", coreq: "ECE 202" },
              { code: "ECE 203", title: "Electronics 1: Electronic Devices and Circuits", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "ECE 103, ECE 103L", coreq: "ECE 202, ECE 202L" },
              { code: "ECE 203L", title: "Electronics 1L (Laboratory)", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "ECE 103, ECE 103L", coreq: "ECE 202, ECE 202L, ECE 203" },
              { code: "ECE 204", title: "ECE Laws, Contracts, Ethics, Standards, and Safety", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "" },
              { code: "ECE 205", title: "Electronics Shop and Practices", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "ECE 103, ECE 103L" },
              { code: "ECE 206L", title: "Computer Programming (OOP)", lab_units: 2, lab_hours: 6, lec_units: 0, lec_hours: 0, prereq: "ECE 101L" },
              { code: "PE 12", title: "PATHFit 3", lab_units: 0, lab_hours: 0, lec_units: 2, lec_hours: 2, prereq: "PE 11" },
              { code: "TOTAL", title: "Total Units", lab_units: 5, lab_hours: 15, lec_units: 20, lec_hours: 20 }
            ]
          },
          {
            name: "Second Semester",
            courses: [
              { code: "AAP 101", title: "Art Appreciation", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "" },
              { code: "ECE 207", title: "Advanced Engineering Mathematics for ECE", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "COE 201" },
              { code: "ECE 207L", title: "Advanced Engineering Math (Lab)", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "COE 201", coreq: "ECE 207" },
              { code: "ECE 208", title: "Circuits 2", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "ECE 202, ECE 202L" },
              { code: "ECE 208L", title: "Circuits 2 (Laboratory)", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "ECE 202, ECE 202L", coreq: "ECE 208" },
              { code: "ECE 209", title: "Electronics 2: Circuit Analysis and Design", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "ECE 203, ECE 203L" },
              { code: "ECE 209L", title: "Electronics 2L (Laboratory)", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "ECE 203, ECE 203L", coreq: "ECE 209" },
              { code: "ECE 210", title: "Communications 1: Principles", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "ECE 203, ECE 203L", coreq: "ECE 209, ECE 209L" },
              { code: "ECE 210L", title: "Communications 1L (Laboratory)", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "ECE 203, ECE 203L", coreq: "ECE 209, ECE 209L, ECE 210" },
              { code: "ECE 211", title: "Electromagnetics", lab_units: 0, lab_hours: 0, lec_units: 4, lec_hours: 4, prereq: "COE 105, COE 105L, COE 201, ECE 103, ECE 103L" },
              { code: "PE 13", title: "PATHFit 4", lab_units: 0, lab_hours: 0, lec_units: 2, lec_hours: 2, prereq: "PE 12" },
              { code: "TOTAL", title: "Total Units", lab_units: 4, lab_hours: 12, lec_units: 21, lec_hours: 21 }
            ]
          }
        ]
      },
      {
        id: "3rd-year",
        label: "3rd Year",
        terms: [
          {
            name: "First Semester",
            courses: [
              { code: "SSP 101D", title: "The Entrepreneurial Mind", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "" },
              { code: "ECE 301", title: "Digital Electronics 1", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "ECE 203, ECE 203L" },
              { code: "ECE 301L", title: "Digital Electronics 1L (Lab)", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "ECE 203, ECE 203L", coreq: "ECE 301" },
              { code: "ECE 302", title: "Electronics 3: Systems and Design", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "ECE 209, ECE 209L" },
              { code: "ECE 302L", title: "Electronics 3L (Lab)", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "ECE 209, ECE 209L", coreq: "ECE 302" },
              { code: "ECE 303", title: "Signals, Spectra, and Signal Processing", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "ECE 207, ECE 207L" },
              { code: "ECE 303L", title: "Signals Processing (Lab)", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "ECE 207, ECE 207L", coreq: "ECE 303" },
              { code: "ECE 304", title: "Communications 2: Modulation & Coding", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "ECE 210, ECE 210L" },
              { code: "ECE 304L", title: "Communications 2L (Lab)", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "ECE 210, ECE 210L", coreq: "ECE 304" },
              { code: "ECE 305", title: "Engineering Data Analysis", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "COE 100" },
              { code: "ECE 306", title: "Engineering Management", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "ECE 201" },
              { code: "TOTAL", title: "Total Units", lab_units: 4, lab_hours: 12, lec_units: 21, lec_hours: 21 }
            ]
          },
          {
            name: "Second Semester",
            courses: [
              { code: "ECE 307", title: "Environmental Science and Engineering", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "COE 103, COE 103L" },
              { code: "ECE 308", title: "Communications 3: Data Communications", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "ECE 304, ECE 304L" },
              { code: "ECE 308L", title: "Communications 3L (Lab)", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "ECE 304, ECE 304L", coreq: "ECE 308" },
              { code: "ECE 309", title: "Communications 4: Transmission Media", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "ECE 211, ECE 304, ECE 304L" },
              { code: "ECE 309L", title: "Communications 4L (Lab)", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "ECE 211, ECE 304, ECE 304L", coreq: "ECE 309" },
              { code: "ECE 310", title: "Digital Electronics 2: Microprocessor", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "ECE 206L, ECE 301, ECE 301L" },
              { code: "ECE 310L", title: "Digital Electronics 2L (Lab)", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "ECE 206L, ECE 301, ECE 301L", coreq: "ECE 310" },
              { code: "ECE 311", title: "Feedback and Control Systems", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "ECE 207, ECE 207L" },
              { code: "ECE 311L", title: "Feedback and Control (Lab)", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "ECE 207, ECE 207L", coreq: "ECE 311" },
              { code: "ECE 312", title: "Methods of Research", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "ECE 305" },
              { code: "TOTAL", title: "Total Units", lab_units: 4, lab_hours: 12, lec_units: 18, lec_hours: 18 }
            ]
          },
        ]
      },
      {
        id: "Mid-Year",
        label: "Mid Year",
        terms: [
          {
            name: "Midyear",
            courses: [
              { 
              code: "ECE-OJT 400", 
              title: "Electronics Engineering Immersion / On the Job Training (OJT)", 
              lab_units: 0.0, 
              lec_units: 5.0, 
              hours: 250,
              prereq: "ECE 201, ECE 302, ECE 302L, ECE 305, ECE 306, ECE 307, ECE 308, ECE 308L, ECE 309, ECE 309L, ECE 310, ECE 310L, ECE 311, ECE 311L, ECE 312" 
            }
            ]
          }
        ]
      },
      {
        id: "4th-year",
        label: "4th Year",
        terms: [
          {
            name: "First Semester",
            courses: [
              { code: "ECE 401", title: "Technopreneurship", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "ECE 201, ECE 306" },
              { code: "ECE 402", title: "Design 1/Capstone Project 1", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "Complete ECE 3rd Year Subjects" },
              { code: "ECE 403", title: "Advanced Communication System", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "ECE 309, ECE 309L" },
              { code: "ECE 403L", title: "Advanced Comm System (Lab)", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "ECE 309, ECE 309L", coreq: "ECE 403" },
              { code: "ECE 404", title: "Advanced Programming for ECE", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "ECE 310, ECE 310L" },
              { code: "ECE 404L", title: "Advanced Programming (Lab)", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "ECE 310, ECE 310L", coreq: "ECE 404" },
              { code: "ECE 405", title: "ICT Infrastructure", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "ECE 308, ECE 308L" },
              { code: "ECE 405L", title: "ICT Infrastructure (Lab)", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "ECE 308, ECE 308L", coreq: "ECE 405" },
              { code: "ECE 406", title: "ECE Correlation 1: Mathematics", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "Senior Standing" },
              { code: "ECE 407", title: "ECE Correlation 2: Electronics", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "Senior Standing" },
              { code: "TOTAL", title: "Total Units", lab_units: 6, lab_hours: 18, lec_units: 12, lec_hours: 12 }
            ]
          },
          {
            name: "Second Semester",
            courses: [
              { code: "RLW 101", title: "Life and Works of Rizal", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "" },
              { code: "ECE 408", title: "ECE Plant Visits/Seminars", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "ECE 402" },
              { code: "ECE 409", title: "Design 2/Capstone Project 2", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "ECE 402" },
              { code: "ECE 410", title: "ECE Correlation 3: GEAS", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "Senior Standing" },
              { code: "ECE 411", title: "ECE Correlation 4: EST", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "Senior Standing" },
              { code: "ECE 412", title: "Electronics Ancillary System", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "ECE 302, ECE 302L" },
              { code: "ECE 412L", title: "Ancillary System (Lab)", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "ECE 302, ECE 302L", coreq: "ECE 412" },
              { code: "ECE 413", title: "Advanced Networking", lab_units: 0, lab_hours: 0, lec_units: 3, lec_hours: 3, prereq: "ECE 403, 403L" },
              { code: "ECE 413L", title: "Advanced Networking (Lab)", lab_units: 1, lab_hours: 3, lec_units: 0, lec_hours: 0, prereq: "ECE 403, 403L", coreq: "ECE 413" },
              { code: "TOTAL", title: "Total Units", lab_units: 6, lab_hours: 18, lec_units: 9, lec_hours: 9 }
            ]
          }
        ]
      }
    ]
  },
  laboratories: {
  title: "Laboratories",
  items: [
    { 
      name: "Microprocessors Lab", 
      image: `${base}/watermark.png`
    },
    { 
      name: "Communication Systems Lab", 
      image: `${base}/watermark.png`
    },
    { 
      name: "Electronics Circuits Lab", 
      image: `${base}/watermark.png`
    },
  ],
},

  faculty: {
    title: "Faculty",
    members: facultyMembers,
  },

  programOverview: {
    heading: "Program Overview",
    text: "The Bachelor of Science in Electronics Engineering at Bulacan State University produces globally competitive engineers by merging rigorous mathematical analysis with hands-on training in cutting-edge fields like Robotics, Artificial Intelligence, and Cybersecurity. Guided by a distinguished faculty of Professional and ASEAN Engineers, the program empowers students to design research-based solutions that address complex industry demands while prioritizing ethical practice and environmental sustainability. Our graduates consistently excel in licensure examinations and emerge as innovative leaders prepared to drive economic progress in the rapidly evolving global technological landscape.",
    stats: { nonTeaching: 0, faculty: facultyMembers.length, students: 462 },
  },

  careers: {
    title: "Career Opportunities",
    subtitle: "The versatility of Electronics Engineering allows graduates to pursue diverse career paths.",
    cards: [
      { icon: "🌐", title: "Telecommunications", text: "Designing and maintaining wireless networks, fiber optics, and satellite communication systems." },
      { icon: "📟", title: "Semiconductor Industry", text: "Developing microchips and integrated circuits (ICs) used in almost all modern electronics." },
      { icon: "🖥️", title: "Information and Communications Technology (ICT)", text: "Managing the hardware and networking infrastructure that keeps businesses and data centers running." },
      { icon: "📡", title: "Broadcasting Industry", text: "Engineering the transmission systems for radio, television, and digital streaming media." },
      { icon: "✈️", title: "Aeronautics", text: "Specializing in the electronic flight control systems and 'avionics' inside aircraft." },
      { icon: "🛰️", title: "Space Engineering", text: "Developing radiation-hardened circuitry and communication arrays for satellites." },
      { icon: "🧭", title: "Navigation", text: "Designing GPS, radar, and sonar systems for maritime and land-based positioning." },
      { icon: "🎖️", title: "Military", text: "Creating secure communication hardware and advanced defense weaponry." },
      { icon: "🤖", title: "Robotics and Automation", text: "Building smart machines and assembly lines for manufacturing." },
      { icon: "🧠", title: "Artificial Intelligence", text: "Designing specialized hardware and edge-computing devices for neural networks." },
      { icon: "🛡️", title: "Cybersecurity", text: "Protecting hardware and embedded systems from physical and remote intrusions." },
      { icon: "⚡", title: "Power Electronics", text: "Converting and controlling electrical power for electric vehicles and solar inverters." },
      { icon: "🏥", title: "Biomedical Electronics", text: "Designing life-saving medical devices like pacemakers and MRI machines." },
      { icon: "📈", title: "Marketing and Sales", text: "Bridging the gap between complex hardware products and client needs." },
      { icon: "💡", title: "Technopreneurs", text: "Starting technology-based businesses or launching innovative hardware products." },
      { icon: "🏦", title: "Banking and Finance", text: "Applying analytical skills to technical risk assessment for tech investments." },
      { icon: "🏗️", title: "Construction (Sign & Seal)", text: "Designing and certifying auxiliary and safety systems for large buildings." },
      { icon: "🕹️", title: "Instrumentation & Control", text: "Managing the sensors and feedback loops that regulate industrial plants." },
      { icon: "⚖️", title: "Government", text: "Regulating telecommunications standards or working in science departments." },
      { icon: "💼", title: "Management", text: "Leading engineering teams and overseeing technical project lifecycles." },
      { icon: "🔍", title: "Research", text: "Discovering new materials or methods to push the boundaries of physics." },
      { icon: "🎓", title: "Academe", text: "Educating the next generation of engineers as a professor or researcher." },
    ],
  },
};