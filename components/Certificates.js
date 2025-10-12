"use client";

import React from 'react'
import { motion } from 'framer-motion';

const certs = [
  'Google AI Essentials (Google - July 2025)',
  'Introduction to Splunk Security Essentials (Splunk - June 2025)',
  'Cybersecurity Analyst (C3SA) (Cyberwarfare Labs - March 2025)',
  'Certified AppSec Practitioner (The SecOps Group - March 2025)',
  'Career Essentials in Cybersecurity (Microsoft - July 2024)',
  'The Cybersecurity Threat Landscape (LinkedIn - June 2024)',
  'Python for Beginners (Udemy - June 2024)',
  'Web Hacking and Penetration Testing (Udemy - May 2024)',
  'Mastercard - Cybersecurity Job Simulation (Mastercard - March 2024)',
  'Google Cybersecurity Professional Certificate (Google - August 2023)',
]

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Certificates(){
  return (
    <motion.section 
      id="certificates" 
      className="card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <h3 className="text-xl font-semibold">Certificates</h3>
      <ul className="mt-3 list-disc list-inside text-slate-300 space-y-1">
        {certs.map((c,i) => <li key={i}>{c}</li>)}
      </ul>
    </motion.section>
  )
}
