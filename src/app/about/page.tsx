'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Java', 'SQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Linux'] },
  ];

  const experience = [
    {
      title: 'Software Engineer',
      company: 'Payroo',
      duration: '2024 - Present',
      description: [
        'Developed and maintained full-stack web applications using React and Node.js',
        'Improved application performance by 40% through code optimization',
        'Collaborated with cross-functional teams to deliver high-quality solutions'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Nimblework',
      duration: '2023 - 2024',
      description: [
        'Built responsive web interfaces using React and TypeScript',
        'Implemented RESTful APIs using Node.js and Express',
        'Participated in code reviews and agile development processes'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4"
      >
        <h1 className="text-4xl font-bold mb-8 text-primary dark:text-primary-light">About Me</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <p className="text-lg text-text-light dark:text-text-dark">
              Hi! I'm a passionate software engineer with a deep love for creating elegant solutions to complex problems. 
              My journey in tech has equipped me with a diverse skill set and a keen eye for detail.
            </p>
            <p className="text-lg text-text-light dark:text-text-dark">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing my knowledge with the developer community.
            </p>
          </div>
          <div className="relative h-64 md:h-auto">
            <div className="bg-primary/20 dark:bg-primary/10 rounded-lg p-2 transform rotate-3 h-full">
              {/* Replace the src with your actual image */}
              <Image
                src="/profile-pic.png"
                alt="Profile picture"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary dark:text-primary-light">Work Experience</h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-primary/10 dark:border-primary/20"
              >
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">{job.title}</h3>
                <p className="text-primary dark:text-primary-light font-medium">{job.company}</p>
                <p className="text-text-light/60 dark:text-text-dark/60 mb-4">{job.duration}</p>
                <ul className="space-y-2">
                  {job.description.map((point, i) => (
                    <li key={i} className="text-text-light/80 dark:text-text-dark/80 flex items-start">
                      <span className="text-primary dark:text-primary-light mr-2">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary dark:text-primary-light">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-primary/10 dark:border-primary/20"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary dark:text-primary-light">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="text-text-light dark:text-text-dark">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-primary dark:text-primary-light">Education</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-primary/10 dark:border-primary/20">
            <ul className="space-y-4">
              <li className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">National Institute of Technology, Agartala</h3>
                <p className="text-primary/80 dark:text-primary-light/80">Bachelor's in Electronics & Communication Engineering</p>
                <p className="text-text-light/60 dark:text-text-dark/60">2019 - 2023</p>
              </li>
            </ul>
          </div>
        </section>
      </motion.div>
    </div>
  );
} 