"use client";

import React from 'react'
import { motion } from 'framer-motion';

const projects = [
  { 
    title: 'Cloud Security Posture Management (CSPM) Tool', 
    date: '06/2025', 
    desc: 'A lightweight python based CSPM tool design to detect common AWS security misconfigurations.' 
  },
  { 
    title: 'Autonomous Cyber Defense Agent', 
    date: '07/2025 – 10/2025', 
    desc: 'An Al-powered agent (MVP) that automates the cyber defense lifecycle with minimal human oversight.' 
  },
  { 
    title: 'ML Based API Threat Detection', 
    date: '01/2025 – 05/2025', 
    desc: 'ML based system that uses trained models to detect API Threat like DDoS, API abuse etc' 
  },
  {
    title: 'Static website with chatbot deployment', 
    date: '06/2023', 
    desc: 'Utilized Microsoft Azure cloud technologies to build a cloud-based website and implemented an Al bot for more functionality' 
  }
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Projects(){
  return (
    <motion.section 
      id="projects" 
      className="card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <h3 className="text-xl font-semibold">Projects</h3>
      <div className="mt-4 grid sm:grid-cols-2 gap-4">
        {projects.map((p,i) => (
          <motion.article key={i} className="p-4 rounded-lg bg-vc-blue-800/30 border border-vc-blue-600" variants={itemVariants}>
            <h4 className="font-medium">{p.title}</h4>
            <div className="text-sm text-slate-400">{p.date}</div>
            <p className="mt-2 text-slate-300 text-sm">{p.desc}</p>
            <div className="mt-3">
              <a href="#" className="text-sm text-vc-accent">View repo</a>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}
