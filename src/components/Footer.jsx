import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiPhone } from 'react-icons/fi';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/LalitSingh9933', name: 'GitHub' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/lalitsingh33/', name: 'LinkedIn' },
    { icon: <FiTwitter />, url: 'https://x.com/lalitsingh9933', name: 'Twitter' },
    { icon: <FaWhatsapp />, url: 'https://wa.me/+9779864779019', name: 'WhatsApp' }
  ];

  const quickLinks = [
    { name: 'Home', url: '#home' },
    { name: 'Services', url: '#services' },
    { name: 'Projects', url: '#projects' },
    { name: 'Contact', url: '#contact' }
  ];

  return (
    <footer className="relative dark:text-gray-300 pt-20 pb-10 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/3 -left-20 w-64 h-64 rounded-full bg-blue-500/10 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-purple-500/10 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold dark:text-white">LALIT</h3>
            <p className=" text-gray-800 dark:text-gray-400">
           Web Developer creating responsive, modern websites with full-stack functionality and database integration.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-gray-800 dark:text-gray-400 hover:text-[#52a388] text-xl transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-400">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className= "text-gray-800 dark:text-gray-400 hover:text-[#52a388] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-400">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FiMail className="text-[#52a388]" />
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nlalitsingh2014@gmail.com" className= "text-gray-800 dark:text-gray-400 hover:text-[#52a388] transition-colors duration-300">
                  Nlalitsingh2014@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="text-[#52a388]" />
                <a href="tel:+9779864779019" className= "text-gray-800 dark:text-gray-400 hover:text-[#52a388] transition-colors duration-300">
                  +977 9864779019
                </a>
              </div>
            </div>
          </motion.div>
        
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400"
        >
          <p>© {new Date().getFullYear()} Lalit. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;