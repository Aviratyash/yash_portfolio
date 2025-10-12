"use client";

import React from 'react'
import { motion } from 'framer-motion';

const skills = [
  'ELK / Elastic Stack', 'Splunk', 'Wazuh', 'Snort', 'Suricata', 'Python', 'Azure', 'AWS', 'Nmap', 'Burp Suite', 'Wireshark'
]

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Skills(){
  return (
    <motion.section 
      id="skills" 
      className="card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <h3 className="text-xl font-semibold">Skills</h3>
      <div className="mt-4 flex flex-wrap gap-3">
        {skills.map(s => (
          <span key={s} className="px-3 py-1 rounded-full border border-vc-blue-600 text-sm">{s}</span>
        ))}
      </div>
    </motion.section>
  )
}
