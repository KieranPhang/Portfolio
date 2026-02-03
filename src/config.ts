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
    "Robotics-focused engineering student building real hardware across fabrication, embedded systems, and system integration. Interested in manufacturing, automation, and rapid prototyping, with a bias toward shipping and iterative improvement.",

  skills: [
    // Programming & data analysis
    "C",
    "Python",
    "MATLAB",
    "Excel",
    // Hardware & hands-on skills
    "Microcontrollers (ESP32, PIC, & Arduino)",
    "3D Printing",
    "Soldering",
    "Welding",
    // Design tools
    "SOLIDWORKS",
    "Fusion 360",
    "AutoCAD",
    "KiCad",
    // Other
    "Technical Documentation",
    "Project Management"
  ],

  projects: [
    {
    name: "Water Opacity Sensor",
    description: "PIC-based optical sensor PCB measuring fluid clarity via light intensity. ",
    link: "/projects/water-opacity-sensor",
    image: "/images/projects/WOS/WOS_PCBB",
    skills: ["KiCad", "PIC", "Embedded"],
  },
  {
    name: "C3 COSMIC Challenge – Cable Braiding Machine",
    description: "Mechatronic cable-braiding prototype for in-space manufacturing, focused on integration and CAD.",
    link: "/projects/c3-cosmic-cable-braiding-machine",
    image: "/projects/c3-cosmic-cable-braiding-machine/thumbnail.jpg",
    skills: ["Mechatronics", "Systems", "CAD"],
  },
  {
    name: "Pontoon Picnic Table",
    description: "Designed and built a $100 pontoon picnic table and stress-tested it on Arizona’s Salt River for 4 hours. Custom welded barrel brackets, pickup-legal transport, and no tip in 300 lb seesaw tests.",
    link: "/projects/pontoon-picnic-table",
    image: "/images/projects/pontoon/Pontoon_Hero.png",
    skills: ["Welding", "Fabrication", "Design for Constraints", "Project Management"],
  },
  
  ],

  experience: [
    {
      company: "Arizona State University",
      title: "Head Residential Assistant (RA)",
      dateRange: "Aug 2024 – Jan 2025",
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
      degree: "B.S.E., Engineering (Robotics Specialization)",
      dateRange: "Expected Graduation May 2027",
      achievements: [
        "Current GPA: 3.14",
        "Relevant coursework: Engineering Design Project (PCB design, robotic arms & manipulators, 3D printing, team management).",
        "Additional coursework: Introduction to SOLIDWORKS, Electrical Engineering Fundamentals, Materials & Manufacturing, General Chemistry, and technical writing for engineering.",
      ],
    },
  ],
};
