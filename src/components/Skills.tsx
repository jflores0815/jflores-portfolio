import { motion } from "framer-motion";
import {
  Code,
  Database,
  Cloud,
  Palette,
  Smartphone,
  Globe,
} from "lucide-react";
import * as React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Go", level: 90, color: "from-blue-500 to-blue-600" },
        { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-700" },
        { name: "Python", level: 70, color: "from-green-500 to-green-600" },
        { name: "PHP", level: 90, color: "from-purple-500 to-purple-600" },
        { name: "Java", level: 70, color: "from-orange-500 to-orange-600" },
        {
          name: "JavaScript",
          level: 90,
          color: "from-yellow-500 to-yellow-600",
        },
      ],
    },
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        { name: "React.js", level: 90, color: "from-blue-500 to-blue-600" },
        {
          name: "HTML/CSS/SASS",
          level: 90,
          color: "from-orange-500 to-orange-600",
        },
        { name: "Three.js", level: 75, color: "from-green-500 to-green-600" },
        {
          name: "Responsive Design",
          level: 85,
          color: "from-cyan-500 to-cyan-600",
        },
      ],
    },
    {
      title: "Backend & Frameworks",
      icon: Code,
      skills: [
        { name: "Node.js", level: 85, color: "from-green-500 to-green-600" },
        {
          name: "Gin Framework",
          level: 80,
          color: "from-blue-500 to-blue-600",
        },
        {
          name: "API Development",
          level: 88,
          color: "from-purple-500 to-purple-600",
        },
        {
          name: "Microservices",
          level: 75,
          color: "from-indigo-500 to-indigo-600",
        },
        { name: "Laravel", level: 85, color: "from-gray-700 to-gray-800" },
      ],
    },
    {
      title: "Databases & Systems",
      icon: Database,
      skills: [
        {
          name: "Oracle System & PL/SQL",
          level: 90,
          color: "from-red-500 to-red-600",
        },
        { name: "MySQL", level: 85, color: "from-blue-500 to-blue-600" },
        { name: "MSSQL", level: 80, color: "from-green-500 to-green-600" },
        { name: "PostgreSQL", level: 75, color: "from-blue-600 to-blue-700" },
        { name: "Redis", level: 70, color: "from-orange-500 to-orange-600" },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: Cloud,
      skills: [
        { name: "Docker", level: 80, color: "from-blue-500 to-blue-600" },
        { name: "Git", level: 85, color: "from-gray-700 to-gray-800" },
        {
          name: "Linux Ubuntu Server",
          level: 75,
          color: "from-orange-500 to-orange-600",
        },
        { name: "NGINX", level: 70, color: "from-green-500 to-green-600" },
        { name: "Linode", level: 90, color: "from-blue-500 to-blue-600" },
        {
          name: "Oracle VM VirtualBox",
          level: 75,
          color: "from-purple-500 to-purple-600",
        },
      ],
    },
    {
      title: "Oracle Technologies",
      icon: Database,
      skills: [
        {
          name: "Oracle Forms & Reports",
          level: 90,
          color: "from-red-500 to-red-600",
        },
        {
          name: "Oracle Database Admin",
          level: 85,
          color: "from-orange-500 to-orange-600",
        },
        {
          name: "PL/SQL Development",
          level: 88,
          color: "from-blue-500 to-blue-600",
        },
        {
          name: "Oracle IDS Forms",
          level: 80,
          color: "from-purple-500 to-purple-600",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
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
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-dark-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            A comprehensive set of technical skills that enable me to build
            robust, scalable, and user-friendly applications across various
            platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-4">
                  <category.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-dark-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-primary-600">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: 0.5 + skillIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-8">
            Other Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-4">
            {[
              "C/C++",
              "Postman",
              "XAMPP/WampServer",
              "Laragon",
              "Oracle Forms Builder",
              "Oracle Reports Builder",
              "Linux Ubuntu Server",
              "API Development",
              "NGINX",
              "Oracle VM VirtualBox",
              "System Analysis",
              "Database Design",
              "Web Development",
              "Mobile Development",
              "Automation",
              "Technical Support",
              "Team Leadership",
              "Project Management",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-white dark:bg-dark-700 text-dark-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
