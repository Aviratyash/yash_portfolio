"use client";

import React from 'react'
import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: "Security Operations & Threat Detection (SecOps)",
    skills: ["SIEM (Elastic Stack/ELK, Splunk)", "IDS/IPS (Snort, Suricata)", "Log Analysis", "Threat Intelligence", "Security monitoring"]
  },
  {
    category: "Cloud Security",
    skills: ["Microsoft Azure technologies", "Amazon Aws", "Cloud security posture management"]
  },
  {
    category: "Cybersecurity & Penetration Testing",
    skills: ["Maltego", "Nmap", "Burp Suite", "Wireshark", "Metasploit", "Vulnerability Assessment"]
  },
  {
    category: "Digital Forensics & Incident Response",
    skills: ["Autopsy", "FTK Imager", "Network Traffic Analysis", "Malware Analysis"]
  },
  {
    category: "Threat Hunting & Attack Mapping",
    skills: ["MITRE ATT&CK Framework", "Malware Analysis (Static and Dynamic)", "Anomaly Detection"]
  },
  {
    category: "Programming & Scripting",
    skills: ["Python"]
  }
];

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
      <div className="mt-4 space-y-4">
        {skillCategories.map((cat) => (
          <div key={cat.category}>
            <h4 className="font-medium text-slate-300">{cat.category}</h4>
            <div className="mt-2 flex flex-wrap gap-3">
              {cat.skills.map(s => (
                <span key={s} className="px-3 py-1 rounded-full border border-vc-blue-600 text-sm">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
