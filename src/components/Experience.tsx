import { motion } from "framer-motion";
import { Calendar, MapPin, Building, ExternalLink } from "lucide-react";
import * as React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "IT Engineer / Software Engineer",
      company: "Fundamental IT Solutions",
      location: "Philippines",
      period: "04/2024 - 03/2025",
      description:
        "Specializes in developing software, websites, and mobile applications. Led development of client solutions and ensured quality and performance of applications.",
      achievements: [
        "Developed tailored software solutions for various client requirements",
        "Ensured quality and performance of client websites and mobile applications",
        "Collaborated with clients to understand business needs and technical requirements",
        "Implemented best practices for software development and testing",
      ],
      technologies: [
        "Go",
        "TypeScript",
        "React",
        "Node.js",
        "Mobile Development",
        "Web Development",
      ],
    },
    {
      title: "Computer Programmer III (Team Leader)",
      company: "LAND TRANSPORTATION FRANCHISING AND REGULATORY BOARD (LTFRB)",
      location: "Philippines",
      period: "07/2023 - 06/2024",
      description:
        "Sectoral agency regulating land-based public transportation. Led development team and created critical systems for government operations.",
      achievements: [
        "Designed and developed web applications for franchising operations",
        "Led creation of Franchise Information System (FIS)",
        "Managed development team and project timelines",
        "Implemented critical systems for government regulatory processes",
      ],
      technologies: [
        "Oracle Forms",
        "PL/SQL",
        "Oracle Database",
        "Web Development",
        "Team Leadership",
        "Project Management",
      ],
    },
    {
      title: "Front-End Engineer",
      company: "1Bit Software Development Corporation",
      location: "Philippines",
      period: "10/2022 - 11/2022",
      description:
        "Software provider in the Philippines. Created responsive web and mobile applications based on UI/UX design specifications.",
      achievements: [
        "Created responsive web and mobile applications based on UI/UX design",
        "Integrated frontend applications with Back-End APIs",
        "Implemented modern web development practices and responsive design",
        "Collaborated with design and backend teams for seamless integration",
      ],
      technologies: [
        "React",
        "JavaScript",
        "HTML/CSS",
        "Mobile Development",
        "API Integration",
        "Responsive Design",
      ],
    },
    {
      title: "Jr Analyst Programmer",
      company: "Fly Asian International Corporation",
      location: "Philippines",
      period: "03/2022 - 10/2022",
      description:
        "Global online gaming platform and developer. Developed and maintained API servers and web projects for gaming applications.",
      achievements: [
        "Developed and maintained API Server for gaming platform",
        "Created web projects for gaming applications",
        "Provided technical support for development team",
        "Implemented database solutions and API endpoints",
      ],
      technologies: [
        "PHP",
        "JavaScript",
        "API Development",
        "Database Management",
        "Web Development",
        "Technical Support",
      ],
    },
    {
      title: "Programmer",
      company: "PCN Promopro Inc.",
      location: "Philippines",
      period: "06/2021 - 07/2021",
      description:
        "Pioneer in the promotions marketing industry. Created and developed online web applications and e-commerce websites.",
      achievements: [
        "Created and developed an Online Web Application",
        "Built E-commerce Website for marketing promotions",
        "Implemented database solutions for business operations",
        "Provided technical solutions for marketing automation",
      ],
      technologies: [
        "PHP",
        "HTML/CSS",
        "JavaScript",
        "E-commerce",
        "Database Design",
        "Web Development",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="section-padding bg-gray-50 dark:bg-dark-800"
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
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-dark-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            My professional journey in software development, showcasing growth,
            achievements, and the diverse projects I've contributed to.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto px-4">
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${experience.title}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-16 bg-primary-300 dark:bg-primary-700"></div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12">
                {/* Timeline Dot */}
                <div className="relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                    <Building className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="card p-6">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                          {experience.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-sm text-dark-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            {experience.company}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {experience.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {experience.period}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-dark-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-dark-900 dark:text-white mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {experience.achievements.map(
                          (achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="text-dark-600 dark:text-gray-300 text-sm flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download Resume */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href="#" className="btn-primary inline-flex items-center gap-2">
            <ExternalLink className="w-5 h-5" />
            Download Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
