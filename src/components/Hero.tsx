import { motion } from "framer-motion";
import { ChevronDown, Download, Mail } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 to-transparent"></div>
      </div>

      <div className="container-custom text-center relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-600 dark:text-primary-400 font-medium mb-4"
          >
            👋 Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-dark-900 dark:text-white mb-4 md:mb-6 px-4"
          >
            Jaime Flores
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-dark-700 dark:text-gray-300 mb-6 md:mb-8 px-4"
          >
            Information Technology Professional
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-dark-600 dark:text-gray-400 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
          >
            To establish a career in information technology where I can
            demonstrate the learning outcomes of the Information Technology
            program/system. Passionate about developing software, websites, and
            mobile applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16 px-4"
          >
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
            {/* <button className="btn-secondary inline-flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download CV
            </button> */}
            <a
              href="/assets/resume/FLORES_RESUME.pdf"
              download="FLORES_RESUME.pdf"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <button
              onClick={scrollToAbout}
              className="text-dark-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 animate-bounce-slow"
            >
              <ChevronDown className="w-6 h-6" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 sm:top-20 left-4 sm:left-10 w-3 h-3 sm:w-4 sm:h-4 bg-primary-400 rounded-full opacity-60"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-32 sm:top-40 right-4 sm:right-20 w-2 h-2 sm:w-3 sm:h-3 bg-primary-300 rounded-full opacity-60"
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-32 sm:bottom-40 left-4 sm:left-20 w-2 h-2 bg-primary-500 rounded-full opacity-60"
      />
    </section>
  );
};

export default Hero;
