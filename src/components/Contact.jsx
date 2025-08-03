import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';
import EmailForm from './EmailForm';

const Contact = () => {
  const contactMethods = [
    {
      icon: <FiMail className="text-3xl text-[#52a388]" />,
      title: "Email",
      info: "nlalitsingh2014@gmail.com",
      action: "https://mail.google.com/mail/?view=cm&fs=1&to=nlalitsingh2014@gmail.com"
    },
    {
      icon: <FiPhone className="text-3xl text-[#52a388]" />,
      title: "Phone",
      info: "+977 9864779019",
      action: "tel:+9779864779019"
    },
    {
      icon: <FiMapPin className="text-3xl text-[#52a388]" />,
      title: "Location",
      info: "Kathmandu, Nepal",
      action: "https://www.google.com/maps/place/Kathmandu"
    }
  ];

  const socialLinks = [
    {
      icon: <FaWhatsapp className="text-2xl" />,
      url: "https://wa.me/+9779864779019",
      name: "WhatsApp"
    },
    {
      icon: <FiGithub className="text-2xl" />,
      url: "https://github.com/LalitSingh9933",
      name: "GitHub"
    },
    {
      icon: <FiLinkedin className="text-2xl" />,
      url: "https://www.linkedin.com/in/lalitsingh33/",
      name: "LinkedIn"
    }
  ];

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background elements - moved z-index here */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/3 -left-20 w-64 h-64 rounded-full bg-blue-500/10 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-purple-500/10 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10"> {/* Changed to z-0 */}
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Get In <span className="text-[#52a388]">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-[#52a388] mx-auto mt-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 relative z-10"> {/* Added z-10 here */}
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="space-y-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#52a388]/10 dark:bg-[#52a388]/20 rounded-full">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{method.title}</h3>
                      <a 
                        href={method.action} 
                        className="text-gray-600 dark:text-gray-300 hover:text-[#52a388] transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {method.info}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Social Links */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#52a388]/10 dark:bg-[#52a388]/20 text-[#52a388] rounded-full hover:bg-[#52a388]/20 dark:hover:bg-[#52a388]/30 transition-colors duration-300"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Send Me a Message</h3>
              <EmailForm/>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;