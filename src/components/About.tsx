import { motion } from "framer-motion";
import { User, MapPin, Calendar, Mail, Phone, Globe } from "lucide-react";
import * as React from "react";

const About = () => {
  const personalInfo = [
    { icon: MapPin, label: "Location", value: "San Juan City, PH" },
    { icon: Calendar, label: "Experience", value: "8+ Years" },
    { icon: Mail, label: "Email", value: "jaimeflores0815@gmail.com" },
    { icon: Phone, label: "Phone", value: "(0929)460-6692" },
    { icon: Globe, label: "Education", value: "BS Information Technology" },
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Image and Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-20 blur-xl"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-full flex items-center justify-center">
                  <User className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="space-y-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-dark-800 rounded-lg"
                >
                  <info.icon className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <div className="text-left">
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {info.label}
                    </p>
                    <p className="text-dark-900 dark:text-white font-semibold">
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-dark-900 dark:text-white">
              Web & Software Developer
            </h3>

            <p className="text-base sm:text-lg text-dark-600 dark:text-gray-300 leading-relaxed text-justify">
              I'm a dedicated Information Technology professional with over 8
              years of experience in software development, web applications, and
              mobile solutions. My journey in technology began with a strong
              foundation in Oracle technologies and has evolved to encompass
              modern web development frameworks and cloud solutions.
            </p>

            <p className="text-base sm:text-lg text-dark-600 dark:text-gray-300 leading-relaxed text-justify">
              I specialize in full-stack development using technologies like Go,
              PHP, TypeScript, React, and Node.js, with extensive experience in
              database management including Oracle, MySQL, and PostgreSQL. My
              approach combines traditional IT principles with modern
              development practices to deliver robust, scalable solutions.
            </p>

            <p className="text-base sm:text-lg text-dark-600 dark:text-gray-300 leading-relaxed text-justify">
              I've led development teams and managed critical systems for
              government agencies, demonstrating my ability to handle complex
              projects and mentor junior developers. My passion lies in creating
              innovative solutions that bridge the gap between business
              requirements and technical implementation.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                <div className="text-2xl font-bold text-primary-600">8+</div>
                <div className="text-sm text-dark-600 dark:text-gray-400">
                  Years Experience
                </div>
              </div>
              <div className="text-center p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                <div className="text-2xl font-bold text-primary-600">4+</div>
                <div className="text-sm text-dark-600 dark:text-gray-400">
                  Freelance Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
