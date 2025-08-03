import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiDownload } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import Profile from '../assets/profile2.png';

const Hero = () => {
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/LalitSingh9933' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/lalitsingh33/' },
    { icon: <FiTwitter />, url: 'https://x.com/lalitsingh9933' },
    { icon: <HiOutlineMail />, url: 'https://mail.google.com/mail/?view=cm&fs=1&to=nlalitsingh2014@gmail.com' }
  ];

  return (
    <section id='home' className="relative min-h-screen overflow-hidden ">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-500/10 filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-purple-500/10 filter blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-emerald-500/10 filter blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-6">
        <div className="flex flex-col items-center gap-12 w-full">
          {/* Image/avatar - Now at the top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 to-green-400 blur-md opacity-30"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
                <img
                  src={Profile}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Text content - Centered below the image */}
          <div className="w-full space-y-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm <span className="text-[#52a388]">LALIT SINGH</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mt-4">
                Web Developer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto"
            >
              I build high-performance websites and web applications using modern technologies.
              Specialized in creating fast, responsive, and accessible user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-[#52a388] hover:bg-[#23775b] text-white rounded-lg font-medium transition-colors duration-300 flex items-center"
              >
                Contact Me
                <HiOutlineMail className="ml-2" />
              </a>
              {/* <a
                href="/resume.pdf"
                download
                className="px-6 py-3 bg-transparent border-2 border-gray-300 hover:border-[#52a388] dark:border-gray-600 dark:hover:border-[#52a388] text-gray-800 dark:text-white rounded-lg font-medium transition-colors duration-300 flex items-center"
              >
                Download CV
                <FiDownload className="ml-2" />
              </a> */}
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center gap-6 pt-4"
            >
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#52a388] dark:hover:text-[#52a388] text-2xl transition-colors duration-300"
                  aria-label={`Social link ${index + 1}`}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;