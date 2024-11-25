import { 
  Code2, FileCode, File, Box, Palette, 
  LayoutGrid, Braces, CircleEqual, Database, Library ,Server,Network,FileText,Wifi, Shield , TestTube  ,  Camera ,Paperclip,Cloud
} from 'lucide-react';

export const siteConfig = {
  name: "Taimur Ahmad",
  title: "MERN Stack Developer | Code. Build. Scale.",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  description: "I'm a passionate developer with expertise in building modern web applications. With a strong foundation in both frontend and backend technologies, I create seamless digital experiences that solve real-world problems.",
  skills: [
    { name: "HTML", icon: Code2, level: 90 },
    { name: "CSS", icon: Palette, level: 95 },
    { name: "Bootstrap", icon: Library, level: 90 },
    { name: "Tailwind CSS", icon: Palette, level: 90 },
    { name: "Material-UI", icon: LayoutGrid, level: 80 },
    { name: "JavaScript", icon: FileCode, level: 85 },
    { name: "React.js", icon: CircleEqual, level: 90 },
    { name: "React Query", icon: Database, level: 70 } ,
    { name: "Redux", icon: Database, level: 70 },
    { name: "TypeScript", icon: Braces, level: 70 },
    { name: "Next.js", icon: Box, level: 80 },
    { name: "Node.js", icon: Server, level: 75 },         // Add Node.js
    { name: "Express.js", icon: Network, level: 80 },      // Add Express.js
    { name: "MongoDB", icon: Database, level: 70 },        // Add MongoDB
    { name: "GraphQL", icon: FileText, level: 70 },        // Add GraphQL
    { name: "WebSockets", icon: Wifi, level: 65 },         // Add WebSockets
    { name: "JWT", icon: Shield, level: 75 },              // Add JWT Authentication
    { name: "Vercel", icon: Cloud, level: 75 },             // Add Heroku (Deployment)             // Add AWS (Cloud Services)
    { name: "OAuth", icon: Shield, level: 70 },              // Add OAuth Authentication
    { name: "RESTful API", icon: Server, level: 80 },       // Add RESTful API
    { name: "Mocha", icon: TestTube, level: 65 },           // Add Mocha (Testing Framework)
    { name: "Jest", icon: Camera, level: 70 },              // Add Jest (Testing Framework)
    { name: "Mongoose", icon: Database, level: 75 },        // Add Mongoose (ODM for MongoDB)
    { name: "Firebase", icon: Cloud, level: 70 },           // Add Firebase (Real-time Database)     // Add Redis (In-memory Database)
    { name: "Postman", icon: Paperclip, level: 80 },     
  ],
  projects: [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with real-time updates",
      tech: ["Next.js", "TypeScript", "Redux", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://example.com",
      image: "https://plus.unsplash.com/premium_photo-1683288706157-9913483dffc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWNvbW1lcmNlJTIwcGxhdGZvcm18ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Social Media Dashboard",
      description: "Real-time analytics and monitoring platform",
      tech: ["React", "Redux", "Material-UI", "Chart.js"],
      github: "https://github.com",
      live: "https://example.com",
      image: "https://plus.unsplash.com/premium_photo-1683977922495-3ab3ce7ba4e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNvY2lhbCUyMG1lZGlhJTIwZGFzaGJvYXJkfGVufDB8fDB8fHww"
    },
    {
      title: "Blogging Platform",
      description: "A dynamic blogging platform with an admin panel and rich text editor",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://example.com",
      image: "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ2dpbmclMjBwbGF0Zm9ybXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Task Management App",
      description: "A task management system to track progress with deadlines and priorities",
      tech: ["React", "Redux", "Firebase", "Material-UI"],
      github: "https://github.com",
      live: "https://example.com",
      image: "https://plus.unsplash.com/premium_photo-1681487867978-1b83ce2625c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFzayUyMG1hbmFnZW1lbnQlMjBhcHB8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Online Learning Portal",
      description: "An educational platform for online courses, quizzes, and video content",
      tech: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
      github: "https://github.com",
      live: "https://example.com",
      image: "https://plus.unsplash.com/premium_photo-1682464651356-3c6780eff00c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGVhcm5pbmclMjBQb3J0YWx8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Weather App",
      description: "A simple weather application displaying live data using a public API",
      tech: ["React", "Redux", "CSS", "OpenWeatherMap API"],
      github: "https://github.com",
      live: "https://example.com",
      image: "https://plus.unsplash.com/premium_photo-1677593850639-9f1e14e4524b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlciUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D"
    }
  ]





} as const;