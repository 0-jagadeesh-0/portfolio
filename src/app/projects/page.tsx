'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'Word Counter CLI',
      description: 'A command-line tool built with Go for counting words in text files.',
      image: '/word-counter-cli.png',
      tags: ['Go', 'CLI'],
      github: 'https://github.com/0-jagadeesh-0/word-counter-cli'
    },
    {
      title: 'Hotel Booking System',
      description: 'A full-stack hotel booking platform with room availability checking and automated room assignment system.',
      image: '/hotel-booking.png',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      github: 'https://github.com/0-jagadeesh-0/hotel-booking-application-frontend'
    },
    {
      title: 'ShopHere',
      description: 'E-commerce platform with user authentication, cart management, and admin dashboard for inventory control.',
      image: '/shop-here.png',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      github: 'https://github.com/0-jagadeesh-0/shophere',
      demo: 'https://shop-here-app.vercel.app'
    },
    {
      title: 'Sorting Visualizer',
      description: 'A sorting algorithm visualizer built with html, css, and javascript.',
      image: '/sorting-visualizer.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/0-jagadeesh-0/Sorting-Visualizer',
      demo: 'https://0-jagadeesh-0.github.io/Sorting-Visualizer/'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-primary dark:text-primary-light">My Projects</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-primary/10 dark:border-primary/20"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-primary dark:text-primary-light">{project.title}</h3>
                <p className="text-text-light/80 dark:text-text-dark/80 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-light/80 dark:text-text-dark/80 hover:text-primary dark:hover:text-primary-light"
                  >
                    <FaGithub className="text-xl" />
                    <span>Source Code</span>
                  </a>
                  {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-light/80 dark:text-text-dark/80 hover:text-primary dark:hover:text-primary-light"
                  >
                    <FaExternalLinkAlt className="text-lg" />
                    <span>Live Demo</span>
                  </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 
