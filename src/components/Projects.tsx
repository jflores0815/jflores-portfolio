import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Eye,
  Code,
  // Smartphone,
  Globe,
} from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const projects = [
    {
      title: "Al Mashoor",
      description:
        "Developed a website for Al Mashoor Domestic Workers Services Center a licensed recruitment agency with 20+ years of industry experience. ",
      image: "/api/placeholder/600/400",
      technologies: [
        "HTML",
        "Laravel",
        "PHP",
        "CSS",
        "MySQL",
        "Linode",
        "Nginx",
      ],
      category: "Full-Stack",
      categoryIcon: Globe,
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Dentistry in 3D (threejs)",
      description:
        "Web App that loads 3D teeth models, allows individual tooth color changes. Advanced 3D visualization and interactive dental modeling application.",
      image: "/api/placeholder/600/400",
      technologies: [
        "Node.js",
        "TypeScript",
        "Three.js",
        "3D Graphics",
        "WebGL",
        "Interactive UI",
      ],
      category: "Full-Stack",
      categoryIcon: Globe,
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "A&J Boutique",
      description:
        "Online Reservation System - Designed and created an E-Commerce website for boutique management with reservation capabilities and inventory tracking.",
      image: "/api/placeholder/600/400",
      technologies: [
        "PHP",
        "HTML",
        "SQL",
        "E-commerce",
        "Reservation System",
        "Inventory Management",
      ],
      category: "Full-Stack",
      categoryIcon: Globe,
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Library Management System",
      description:
        "Comprehensive library management system using Oracle Forms, Reports Builder, and SQL Plus. Lead developer managing information processes for librarians.",
      image: "/api/placeholder/600/400",
      technologies: [
        "Oracle Forms",
        "Oracle Reports",
        "PL/SQL",
        "Database Design",
        "System Analysis",
        "Oracle Database",
      ],
      category: "Full-Stack",
      categoryIcon: Code,
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    // {
    //   title: "Franchise Information System (FIS)",
    //   description:
    //     "Government system for managing land transportation franchising operations. Led development team in creating critical regulatory applications.",
    //   image: "/api/placeholder/600/400",
    //   technologies: [
    //     "Oracle Forms",
    //     "PL/SQL",
    //     "Oracle Database",
    //     "Government Systems",
    //     "Team Leadership",
    //     "Project Management",
    //   ],
    //   category: "Full-Stack",
    //   categoryIcon: Globe,
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   featured: false,
    // },
    // {
    //   title: "Gaming Platform API",
    //   description:
    //     "Developed and maintained API Server for global online gaming platform. Created web projects and provided technical support for gaming applications.",
    //   image: "/api/placeholder/600/400",
    //   technologies: [
    //     "PHP",
    //     "JavaScript",
    //     "API Development",
    //     "Gaming Platform",
    //     "Database Management",
    //     "Technical Support",
    //   ],
    //   category: "Backend",
    //   categoryIcon: Code,
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   featured: false,
    // },
    // {
    //   title: "E-commerce Marketing Platform",
    //   description:
    //     "Online web application and e-commerce website for promotions marketing. Automated marketing processes and business operations.",
    //   image: "/api/placeholder/600/400",
    //   technologies: [
    //     "PHP",
    //     "HTML/CSS",
    //     "JavaScript",
    //     "E-commerce",
    //     "Marketing Automation",
    //     "Database Design",
    //   ],
    //   category: "Full-Stack",
    //   categoryIcon: Globe,
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   featured: false,
    // },
  ];

  const categories = ["All", "Full-Stack", "Backend", "3D Graphics"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="section-padding bg-white dark:bg-dark-900"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-dark-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            A showcase of my recent work, demonstrating my skills in full-stack
            development, mobile applications, and modern web technologies.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-4"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-primary-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-dark-800 text-dark-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`card overflow-hidden ${
                project.featured ? "ring-2 ring-primary-500" : ""
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.categoryIcon className="w-16 h-16 text-primary-600 dark:text-primary-400" />
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <project.categoryIcon className="w-5 h-5 text-primary-600" />
                  <span className="text-sm text-primary-600 font-medium">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-dark-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-dark-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary text-center py-2 px-4 text-sm"
                  >
                    <Eye className="w-4 h-4 mr-2 inline" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-secondary text-center py-2 px-4 text-sm"
                  >
                    <Github className="w-4 h-4 mr-2 inline" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/jflores0815"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <ExternalLink className="w-5 h-5" />
            View More Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
