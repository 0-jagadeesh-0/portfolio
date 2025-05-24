'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedText from '@/components/ui/AnimatedText';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-24 bg-background-light dark:bg-background-dark">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center w-full max-w-7xl px-4">
        
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-3 sm:space-y-4 lg:space-y-6 text-center"
        >
          <AnimatedText
            text="Hi, I'm Jagadeesh"
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-text-light dark:text-text-dark"
          />
          <AnimatedText
            text="Software Engineer & Full Stack Developer"
            className="text-base lg:text-2xl text-primary dark:text-primary-light font-normal lg:font-semibold"
            delay={0.2}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm sm:text-base lg:text-lg text-text-light/75 dark:text-text-dark/75 w-full leading-relaxed sm:leading-relaxed lg:leading-loose font-normal"
          >
            I build exceptional digital experiences that combine elegant design with robust functionality.
            Passionate about creating innovative solutions that make a difference.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <Link
              href="/projects"
              className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-primary text-primary dark:text-primary-light dark:border-primary-light rounded-lg hover:bg-primary/5 dark:hover:bg-primary-light/5 transition-colors"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[400px] lg:h-[500px] order-first lg:order-last flex items-center justify-center"
        >
          <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full border-4 border-primary dark:border-primary-light p-2 bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10">
            <Image
              src="/profile-pic.png"
              alt="Hero Image"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
} 