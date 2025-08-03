import { motion } from 'framer-motion';
import { FiBook, FiCode, FiLayers } from 'react-icons/fi';
import { FaGraduationCap, FaFigma, FaAndroid } from 'react-icons/fa';
import { VscVscode } from "react-icons/vsc";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import { SiCanva, SiMysql } from "react-icons/si";
import AboutImage from '../assets/AboutPhoto.png';

const About = () => {
  const features = [
    {
      icon: <FaGraduationCap className="text-3xl text-[#52a388]" />,
      title: 'Education',
      description: 'Bachelor of Information Management (TU)'
    },
    {
      icon: <FiCode className="text-3xl text-[#52a388]" />,
      title: 'Languages/ DB',
      description: 'JavaScript, Python, Java, Kotlin, MongoDB, MySQL, PostgreSQL'
    },
    {
      icon: <FiLayers className="text-3xl text-[#52a388]" />,
      title: 'Framework/ Libraries',
      description: 'React, Django, Express, Tailwind, Bootstrap'
    }
  ];

  const tools = [
    { icon: <VscVscode className="text-2xl" />, name: "VS Code" },
    { icon: <FaFigma className="text-2xl" />, name: "Figma" },
    { icon: <SiCanva className="text-2xl" />, name: "Canva" },
    { icon: <FaAndroid className="text-2xl" />, name: "Android Studio" },
    { icon: <DiMongodb className="text-2xl" />, name: "MongoDB" },
    { icon: <SiMysql className="text-2xl" />, name: "MySQL" },
    { icon: <DiPostgresql className="text-2xl" />, name: "PostgreSQL" }
  ];

  return (
    <section id="about" className="relative  scroll-mt-20">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-purple-500/10 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* About me */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white">
            About <span className="text-[#52a388]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[#52a388] mx-auto mt-4"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 flex justify-center "
          >
            <div className="relative w-full max-w-md md:h-80 lg:w-full lg:h-full">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-400 to-green-400 blur-md opacity-30"></div>
              <div className="relative w-full h-full rounded-lg overflow-hidden border-4 border-gray-700 dark:border-gray-300">
                <img
                  src={AboutImage}
                  alt="About me"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold dark:text-white">
              Hello! <span className='text-[#52a388]'>I'M Lalit Singh</span>
            </h3>

            <p className="text-lg dark:text-gray-300">
              I'm a passionate web developer specializing in building modern, responsive websites
              and web applications. My expertise focuses on creating optimized digital experiences
              through efficient code and performance-driven solutions.
            </p>

            <p className="text-lg dark:text-gray-300">
              With comprehensive knowledge of both frontend and backend technologies, I develop
              full-stack solutions that combine technical excellence with intuitive user interfaces
              for seamless web experiences.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h4 className="text-xl font-bold dark:text-white mb-2 flex justify-center">{feature.title}</h4>
                  <p className="dark:text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Tools Section */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-bold dark:text-white mb-4 flex items-center">
                <FiBook className="mr-2 text-[#52a388]" />
                Tools I Use
              </h4>
              <div className="flex flex-wrap gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-2 bg-[#52a388]/10 dark:bg-[#52a388]/20 px-4 py-2 rounded-full"
                  >
                    <span className="text-[#52a388]">{tool.icon}</span>
                    <span className="dark:text-gray-300 text-sm">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;