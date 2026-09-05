export const portfolioData = {
  name: "Dinesh Kadel",
  role: "Fullstack Developer",
  location: "Kathmandu, Bagmati Province, Nepal",
  email: "dineshkadel11@email.com",
  github: "https://github.com/dines-1",
  linkedin: "https://www.linkedin.com/in/dinesh-kadel-7aa589292/",
  twitter: "https://twitter.com/dineshkadel",

  education: [
    {
      degree: "Bachelor in Computer Application (BCA)",
      school: "Tribhuvan University - National College of Computer Studies",
      location: "Kathmandu, Nepal",
      period: "2023 — Ongoing",
      year: "3rd Year",
      status: "ongoing",
      icon: "fa-graduation-cap"
    },
    {
      degree: "+2 Science ",
      school: "Bageshwori Secondary School",
      location: "Dhading, Malekhu",
      period: "2021 — 2023",
      status: "completed",
      icon: "fa-school"
    }
  ],

  skills: [
    {
      category: "Frontend",
      icon: "fa-desktop",
      skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
      variant: "default"
    },
    {
      category: "Backend",
      icon: "fa-server",
      skills: ["Node.js", "Express.js", "NestJS", "REST APIs", "TypeScript", "Socket.io", "JWT", "Java", "PHP"],
      variant: "sky"
    },
    {
      category: "Database",
      icon: "fa-database",
      skills: ["MongoDB", "Mongoose", "SQL", "PostgreSQL"],
      variant: "default"
    },
    {
      category: "Tools",
      icon: "fa-wrench",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Docker", "Linux", "Kubernetes"],
      variant: "sky"
    }
  ],

  projects: [
    {
      name: "Learning Management System",
      description: "Full-featured online store with course listings, Category management, JWT auth, and payment integration with ESewa. Built with the MERN stack.",
      gradient: "from-cyan-900/30 to-blue-900/30",
      iconColor: "text-sky",
      stack: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/dines-1/Learning_Management_System_",
      demo: "#"
    },
    {
      name: "Echo - Chat Application",
      description: "Real-time messaging app using Socket.io with rooms, private messages, and live online status indicators.",
      gradient: "from-green-900/30 to-emerald-900/30",
      iconColor: "text-green",
      stack: ["React", "Express", "Socket.io"],
      github: "#",
      demo: "#"
    },
    {
      name: "Task Manager API",
      description: "RESTful API built with NestJS and TypeScript. Features JWT auth, CRUD operations, and role-based access control.",
      gradient: "from-purple-900/30 to-indigo-900/30",
      iconColor: "text-sky-light",
      stack: ["NestJS", "TypeScript", "MongoDB"],
      github: "#",
      demo: null
    },
    {
      name: "HomeCare Service",
      description: "A web-based application for booking household services . Features Authentication, browse services, book appointments,admin control and make payments through integrated payment gateways. ",
      gradient: "from-green-900/30 to-emerald-900/30",
      iconColor: "text-green",
      stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/dines-1/Local_household_service_booking",
      demo: "#"
    },
    ,
    {
      name: "E-commerce Website: Saasto Bazaar",
      description: "A web-based application for online shopping . Features Authentication, browse products, add to cart,admin control and make payments through integrated payment gateways. ",
      gradient: "from-green-900/30 to-emerald-900/30",
      iconColor: "text-green",
      stack: ["HTML", "Tailwind CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/dines-1/E_commerce-_website-About_-local-_mart",
      demo: "#"
    },
  ],

  about: {
    description: [
      "Hi, I'm a fullstack developer and BCA student at National College of Computer Studies, Tribhuvan University. I'm passionate about building scalable web applications and enjoy working across the entire stack — from designing databases to building responsive frontends.",
      "I'm always exploring new technologies and love turning ideas into real products. Outside of code, I enjoy open source contributions and connecting with the developer community."
    ]
  },

  interests: ["Web Dev", "APIs", "Open Source", "UI/UX", "CI/CD", "AI/ML"]
};