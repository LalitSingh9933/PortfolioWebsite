import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import ecommerce from '../assets/e-commerce.jpg'
import note from '../assets/note.webp'

const Project = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A full-featured e-commerce platform with product listings, cart functionality, and secure checkout.",
      tags: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      codeUrl: "#",
      image: ecommerce
    },
    {
       title: "Note Taking App",
      description: "A modern note-taking application with rich text editing, cloud sync, and organizational features.",
      tags: ["React", "MongoDB", "Node.js", "Tailwind"],
      liveUrl: "#",
      codeUrl: "#",
      image: note
    },
   
    // ... other projects
  ];

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Background elements - moved behind content */}
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
            My <span className="text-[#52a388]">Works</span>
          </h2>
          <div className="w-20 h-1 bg-[#52a388] mx-auto mt-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 text-xs bg-[#52a388]/10 dark:bg-[#52a388]/20 text-[#52a388] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-[#52a388] hover:bg-[#23775b] text-white rounded-lg transition-colors duration-300"
                  >
                    <FiExternalLink className="mr-2" />
                    Live Demo
                  </a>
                  <a 
                    href={project.codeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 hover:border-[#52a388] text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-300"
                  >
                    <FiGithub className="mr-2" />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 relative z-10"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-[#52a388] hover:bg-[#23775b] text-white rounded-lg font-medium transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;