'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function Contact() {
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams
      );
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/0-jagadeesh-0',
      icon: FaGithub,
    },
    
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/0jagadeesh0',
      icon: FaLinkedin,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/0jagadeesh0',
      icon: FaTwitter,
    },
    {
      name: 'Email',
      url: 'mailto:jagadeeshkondra1@gmail.com',
      icon: FaEnvelope,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-primary dark:text-primary-light">Get in Touch</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-text-light dark:text-text-dark mb-8">
              I'm always interested in hearing about new projects and opportunities. 
              Feel free to reach out through the form or via social media.
            </p>

            <div className="flex gap-4 mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-light/80 dark:text-text-dark/80 hover:text-primary dark:hover:text-primary-light text-2xl"
                  aria-label={link.name}
                >
                  <link.icon />
                </a>
              ))}
            </div>

            <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-primary dark:text-primary-light">Location</h2>
              <p className="text-text-light dark:text-text-dark">
                Based in India
              </p>
              <p className="text-text-light dark:text-text-dark">
                Available for remote work worldwide
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-primary/10 dark:border-primary/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-primary/20 dark:border-primary/10 bg-white dark:bg-gray-700 text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-primary/20 dark:border-primary/10 bg-white dark:bg-gray-700 text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-primary/20 dark:border-primary/10 bg-white dark:bg-gray-700 text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-green-600 dark:text-green-400 text-center">
                  Message sent successfully!
                </p>
              )}

              {status === 'error' && (
                <p className="text-red-600 dark:text-red-400 text-center">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}