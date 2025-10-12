"use client";

import React from 'react'
import { motion } from 'framer-motion';

const experiences = [
  { 
    role: 'Cybersecurity and Digital forensics intern', 
    company: 'Cyber Secured India', 
    date: '04/2025 – 06/2025', 
    desc: 'Gained practical experience in threat detection, penetration testing, cloud fundamentals and forensic investigations through real world simulations.' 
  },
  { 
    role: 'Cyber Security Intern', 
    company: 'SkillRAACE', 
    date: '05/2024 – 07/2024', 
    desc: 'Assessed multifaceted cybersecurity protocols within virtual environments at SKILLRAACE over a span of three months' 
  },
  { 
    role: 'Azure Technologies Intern', 
    company: 'Microsoft', 
    date: '06/2023 – 08/2023', 
    desc: 'Utilized Microsoft azure technologies to build and deployed Al bot based website. Developed foundational understanding of cloud security aspects within the Azure environment.' 
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

export default function Experience(){
  return (
    <motion.section 
      id="experience" 
      className="card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <h3 className="text-xl font-semibold">Experience</h3>
      <div className="mt-4 space-y-4">
        {experiences.map((e,i) => (
          <motion.div key={i} className="p-4 rounded-lg bg-vc-blue-800/40 border border-vc-blue-600" variants={itemVariants}>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">{e.role}</div>
                <div className="text-sm text-slate-400">{e.company}</div>
              </div>
              <div className="text-sm text-slate-400">{e.date}</div>
            </div>
            <p className="mt-2 text-slate-300 text-sm">{e.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
