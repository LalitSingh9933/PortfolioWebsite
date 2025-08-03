import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiSmartphone, FiDatabase, FiVideo } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: <FiCode className="text-3xl text-[#52a388]" />,
      title: "Web Development",
      description: "Custom websites built with modern technologies like React, Next.js, and Tailwind CSS for optimal performance and user experience.",
      items: ["React Development", "Responsive Design", "Performance Optimization"]
    },
    {
      icon: <FiLayout className="text-3xl text-[#52a388]" />,
      title: "UI/UX Design",
      description: "Beautiful interfaces designed with user experience in mind, creating intuitive and engaging digital products.",
      items: ["Wireframing", "Prototyping", "User Testing"]
    },
    {
      icon: <FiDatabase className="text-3xl text-[#52a388]" />,
      title: "Backend Development",
      description: "Robust server-side solutions with proper architecture and database management.",
      items: ["Express", "Django","Next.js"]
    },
  ];

  return (
    <section id="services" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/3 -left-20 w-64 h-64 rounded-full bg-blue-500/10 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-purple-500/10 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-0">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            My <span className="text-[#52a388]">Services</span>
          </h2>
          <div className="w-20 h-1 bg-[#52a388] mx-auto mt-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            I offer comprehensive solutions to bring your digital ideas to life with quality and precision.
          </p>
        </motion.div>
        {/* Services Grid */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-whit">
          {services.map((service, index) => (
            <motion.div
              key={index}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700 "
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[#52a388]/10 dark:bg-[#52a388]/20 rounded-full">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2 text-left">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-[#52a388] rounded-full mr-3"></span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Have a project in mind? Let's discuss how I can help!
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-[#52a388] hover:bg-[#23775b] text-white rounded-lg font-medium transition-colors duration-300"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default Services;