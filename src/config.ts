export const siteConfig = {
  name: "Kieran 'K' Phang",
  title: "Robotics Engineer",
  description: "Engineering Portfolio website of Kieran Phang-Davey",
  accentColor: "#1d4ed8",

  social: {
    email: "Kphangda@asu.edu",
    linkedin: "https://www.linkedin.com/in/kieran-phang-davey/",
    github: "https://github.com/KieranPhang",
  },

  aboutMe:
    "Robotics engineering student seeking experience in manufacturing, automation, and microfactories. I’m passionate about building systems that are efficient, scalable, and reliable; whether that’s a production workflow or a rapid prototype. I enjoy solving problems, improving processes, and taking a project from idea to product.  My experience spans robotics, 3D printing, CAD design, microcontrollers, and lean manufacturing principles. I thrive on ownership, iteration, and making things work better than they did yesterday.",

  skills: [
    // Programming & data analysis
    "C++",
    "Python",
    "MATLAB",
    "Microsoft Excel",
    // Hardware & hands-on skills
    "Microcontrollers (PIC & Arduino)",
    "3D Printing",
    "Soldering",
    "Welding",
    // Design tools
    "SOLIDWORKS",
    "Fusion 360",
    "AutoCAD",
    "KiCad",
    // Other
    "Technical Writing & Reports",
    "Project Management"
  ],

  // ⬇️ LEFT UNCHANGED (you can edit later)
  projects: [
    {
      name: "Pontoon Picnic Table",
      description: "Designed and built a floating picnic table pontoon...",
      link: "/projects/pontoon-picnic-table", // no .html, no domain
      skills: ["Welding", "Project Management"],
    },

    {
      name: "Pyramid of Light",
      description:
        "At the request of a local DJ,  I built a pyramid of Light using PCV pipes, 3D printed connectors, and LED shop lights",
      link: "https://hirekieran.com/projects/",
      skills: ["SOLIDWORKS", "3D Printing", "Project Management"],
    },
    {
      name: "Water Opacity Sensor",
      description:
        "Designed and fabricated a PCB integrating a Curiosity Nano PIC and photoresistor to measure fluid clarity via light intensity; collaborated with a team to interface multiple subsystem boards with a master control PIC",
      link: "https://k-phang.github.io/",
      skills: ["KiCAD"],
    },
  ],

  experience: [
    {
      company: "Arizona State University",
      title: "Head Residential Assistant (RA)",
      dateRange: "Aug 2024 – Present",
      bullets: [
        "Supervise 7 RA staff, handle crisis management, and mentor residents to support safety and community-building.",
        "Streamline communication and collaboration across teams to align programming with organizational goals.",
        "Organize large-scale events, including a 475-attendee Halloween event with 70% year-over-year growth."
      ],
    },
    {
      company: "Singapore Armed Forces C4 Command (C4C)",
      title: "Logistics Coordinator | Corporal",
      dateRange: "Oct 2020 – Sep 2022",
      bullets: [
        "Developed systems for maintaining mission-critical communication equipment, achieving near-100% operational readiness.",
        "Coordinated logistical support for high-profile national events such as the Shangri-La Dialogue and National Day.",
        "Performed preventive equipment maintenance to extend lifespan, reduce downtime, and maintain readiness under tight deadlines."
      ],
    },
    {
      company: "Appco Group",
      title: "Sales Representative Team Leader",
      dateRange: "Mar 2019 – Jul 2019",
      bullets: [
        "Exceeded sales quotas by ~15% through door-to-door, street, and B2B sales.",
        "Led and coached team members to surpass revenue goals and improve performance.",
        "Improved team sales pitches and objection-handling strategies, increasing closing rates by 20%+."
      ],
    },
    {
      company: "National Boilermaking Services",
      title: "Welding Apprentice",
      dateRange: "Oct 2018 – Dec 2018",
      bullets: [
        "Developed basic welding techniques and contributed to manufacturing and repair projects.",
        "Assisted with fabrication tasks using essential shop tools in an industrial environment."
      ],
    },
    {
      company: "Chemistry Form Pte. Ltd.",
      title: "Design Intern",
      dateRange: "Nov 2015 – Dec 2015",
      bullets: [
        "Utilized CAD tools and Adobe Suite to create visuals and layouts for product exhibitions.",
        "Supported design workflows and helped deliver visually impactful marketing and display materials."
      ],
    },
  ],

  education: [
    {
      school: "Arizona State University, Mesa, AZ",
      degree: "B.S.E., Engineering (Robotics)",
      dateRange: "Expected Graduation May 2027",
      achievements: [
        "Current GPA: 3.3",
        "Relevant coursework: Engineering Design Project (PCB design, robotic arms & manipulators, 3D printing, team management).",
        "Additional coursework: Introduction to SOLIDWORKS, Electrical Engineering Fundamentals, Materials & Manufacturing, General Chemistry, and technical writing for engineering.",
      ],
    },
  ],
};
