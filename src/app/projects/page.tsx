'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'A full-stack web application built with Next.js, TypeScript, and Tailwind CSS.',
      image: '/project1.jpg',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/project1',
      demo: 'https://project1-demo.com',
    },
    {
      title: 'Project 2',
      description: 'An e-commerce platform with real-time updates and payment integration.',
      image: '/project2.jpg',
      tags: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/yourusername/project2',
      demo: 'https://project2-demo.com',
    },
    // Add more projects as needed
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
        <p className="text-lg text-text-light dark:text-text-dark mb-12 max-w-3xl">
          Here are some of the projects I've worked on. Each project represents a unique challenge 
          and demonstrates different aspects of my technical skills.
        </p>

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
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-light/80 dark:text-text-dark/80 hover:text-primary dark:hover:text-primary-light"
                  >
                    <FaExternalLinkAlt className="text-lg" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 