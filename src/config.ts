export const siteConfig = {
  name: "Kieran 'K' Phang",
  title: "Full Stack Roboticist",
  description:
    "Kieran Phang-Davey is a full stack roboticist and AI integrator specializing in lateral innovation, taking existing tools and building them into robotics and engineering workflows that lacked them.",
  accentColor: "#1d4ed8",

  social: {
    email: "Kphangda@asu.edu",
    linkedin: "https://www.linkedin.com/in/kieran-phang-davey/",
    github: "https://github.com/KieranPhang",
  },

  aboutMe:
    "Full stack roboticist working across fabrication, embedded systems, and industrial robot programming, with a specialty in lateral innovation: taking tools and methods that already exist and building them into workflows that lacked them. The clearest proof is bringing an ABB Robotics service office into a more AI-forward way of working: delivering the division's AI training, driving internal AI assistant adoption across the team, and standing up a shared knowledge-vault system for team context. I graduate May 2027 with a BS in Robotics Engineering from ASU and I am interviewing now for full-time robotics, automation, and AI-integration roles. Singapore citizen, H-1B1 eligible: no lottery, no cap pressure, so the hiring process works like hiring a domestic candidate.",

  skills: [
    // Industrial robotics
    "ABB RAPID",
    "RobotStudio & FlexPendant",
    "WorkObject & TCP Calibration",
    "Offline Programming (OLP)",
    // Programming & data
    "Python",
    "C",
    "Flask",
    "Software Testing (pytest)",
    "MATLAB",
    "Excel",
    // Hardware & hands-on skills
    "Microcontrollers (ESP32, PIC, & Arduino)",
    "Embedded Systems",
    "3D Printing",
    "Soldering",
    "Welding",
    // Design tools
    "SOLIDWORKS",
    "Fusion 360",
    "AutoCAD",
    "KiCad",
    // Electronics & tools
    "PLECS",
    "Oscilloscope",
    // Other
    "Technical Documentation",
    "Project Management",
    "LLM Workflows",
  ],

  projects: [
    {
    name: "RobotDraw",
    description: "SVG-to-RAPID converter for six-axis ABB industrial robots. A Python and Flask tool that turns vector artwork into readable RAPID drawing programs with safe lift and traversal moves, then estimates run time. Hardware-validated on an IRB 1100 across five drawings, including one of roughly 3,000 strokes.",
    link: "/projects/robotdraw",
    skills: ["RAPID (ABB robot programming)", "RobotStudio", "Python", "Flask", "Industrial Robot Programming", "Offline Programming (OLP)"],
    featured: true
  },
  {
    name: "Yumi TTS",
    description: "Voice-driven control for a physical ABB YuMi (IRB 14000). A fully local wake-word speech pipeline parses a spoken command, confirms it, and dispatches it over a socket protocol to RAPID on the robot. Running on the physical arm, backed by 44 green Python tests.",
    link: "/projects/yumi-tts",
    skills: ["Python", "Speech-to-Text", "Socket Programming", "RAPID (ABB robot programming)", "Industrial Robot Programming", "Software Testing (pytest)"],
    featured: true
  },
  {
    name: "Water Opacity Sensor",
    description: "PIC-based optical sensor PCB measuring fluid clarity via light intensity.",
    link: "/projects/water-opacity-sensor",
    image: "/images/projects/WOS/WOS_PCBB.jpg",
    skills: ["KiCad", "C", "Microcontrollers (ESP32, PIC, & Arduino)", "Soldering", "Technical Documentation", "Embedded Systems"],
    featured: true
  },
  {
    name: "C3 COSMIC Challenge – Cable Braiding Machine",
    description: "Mechatronic cable-braiding prototype for in-space manufacturing, focused on integration and CAD.",
    link: "/projects/c3-cosmic-cable-braiding-machine",
    image: "/images/projects/C3/C3_Hero.png",
    skills: ["Mechatronics", "Systems", "CAD", "Technical Documentation", "Project Management"],
    featured: false
  },
  {
    name: "Pontoon Picnic Table",
    description: "Designed and built a $100 pontoon picnic table and stress-tested it on Arizona’s Salt River for 4 hours. Custom welded barrel brackets, pickup-legal transport, and no tip in 300 lb seesaw tests.",
    link: "/projects/pontoon-picnic-table",
    image: "/images/projects/pontoon/Pontoon_Hero.png",
    skills: ["Welding", "Fabrication", "Design for Constraints", "Project Management"],
    featured: false

  },
  {
    name: "ABB Lifter Force Analysis Study",
    description: "Structural statics study of two industrial scissor lifts analyzed during my robotics internship. Force multiplication, a full joint reaction map, and every load-path check against a 1000 kg target, with an honest punch list of open items. Independently re-derived by two adversarial verification passes.",
    link: "/projects/abb-lifter",
    image: "/images/projects/abb-lifter/fig18-stroke-hold.png",
    skills: ["Statics", "Structural Analysis", "Mechanical Engineering", "Python", "Technical Documentation"],
    featured: false
  },
  {
    name: "rapid-lint",
    description: "A geometric linter for offline-generated ABB RAPID. It reconstructs every TCP path from the program text and asserts geometric invariants, catching frame-sign, orientation, and axis-mapping defects at the desk before robot time. Built after a real RobotDraw bug pressed a marker into the table. Pre-release, with 66 green tests.",
    link: "/projects/rapid-lint",
    skills: ["Python", "RAPID (ABB robot programming)", "Static Analysis", "Software Testing (pytest)", "Offline Programming (OLP)"],
    featured: false
  },
  {
    name: "K's Koi Mod",
    description: "A self-built Forge 1.16.5 mini-mod that adds koi fish to Minecraft. Koi spawn in water and school toward a player holding craftable pellets, and breed along a nine-colour ladder with three patterns each. Built end to end as a proof-of-workflow for a larger mod, and compiled to a loadable jar.",
    link: "/projects/koi-mod",
    skills: ["Java", "Minecraft Forge", "Gradle", "Blockbench", "Game Modding"],
    featured: false
  },
  {
    name: "Pyramid of Light",
    description: "Built a modular LED pyramid stage prop in 9 days using PVC, 3D printed connectors, and shop lights.",
    link: "/projects/Pyramid-of-Light",
    image: "/images/projects/pyramid/Pyramid_Hero.jpg",
    skills: ["SOLIDWORKS", "3D Printing", "Project Management"],
    featured: false
},
    {
    name: "APEX: Automated Plant Executive Intelligence",
    description: "A local decision-workflow prototype for semiconductor packaging (OSAT) operations. It compresses factory signals into executive-ready briefings, demonstrated on a synthetic dataset. Prototype quality, not deployed.",
    link: "/projects/APEX",
    skills: ["LLM", "Data Analysis", "Project Management"],
    featured: false
}



  ],

  experience: [
    {
      company: "ABB Robotics",
      title: "Engineering Intern",
      dateRange: "May 2026 – Present",
      bullets: [
        "Programmed Delta, SCARA, 4-axis, and 6-axis robots in RAPID across RobotStudio and live controller environments, covering motion planning, WorkObject and TCP calibration, digital I/O, and multi-robot coordination.",
        "Performed QC testing, functional verification, and shipment inspection on ABB industrial robots; conducted hands-on preventative maintenance including oil changes on live systems.",
        "Independently developed RobotDraw, a Python/Flask tool converting SVG files to ABB RAPID programs using WorkObject-based plane calibration & automated path generation; validated via 5596-stroke programs in RobotStudio.",
      ],
    },
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
        "Current GPA: 3.34",
        "Relevant coursework: Engineering Design Project (PCB design, robotic arms & manipulators, 3D printing, team management).",
        "Additional coursework: Introduction to SOLIDWORKS, Electrical Engineering Fundamentals, Materials & Manufacturing, General Chemistry, and technical writing for engineering.",
      ],
    },
  ],
};
