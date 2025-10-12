"use client";

import React from 'react'
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function About(){
  return (
    <motion.section 
      id="about" 
      className="card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <h3 className="text-xl font-semibold">About</h3>
      {/* Updated paragraph below */}
      <p className="mt-3 text-slate-200">
        [cite_start]A cybersecurity professional with hands-on experience in Security Monitoring, log analysis, and incident response using SIEM (ELK, Splunk, Wazuh) and IDS/IPS (Snort, Suricata)[cite: 8]. [cite_start]I have a theoretical understanding of ISO 27001 and PCI DSS for compliance alignment and am skilled in MITRE ATT&CK threat mapping and proactive threat hunting[cite: 9, 10].
      </p>
      
      {/* Updated education section below */}
      <div className="mt-6 border-t border-vc-blue-600/60 pt-6">
        <h4 className="text-lg font-semibold">Education</h4>
        <div className="mt-3 space-y-4">
          <div>
            [cite_start]<div className="font-medium">M.Sc Cybersecurity (2026) [cite: 26, 32]</div>
            [cite_start]<p className="text-sm text-slate-300">Amity University Rajasthan — SGPA: 8.7 [cite: 26, 27]</p>
          </div>
          <div>
            [cite_start]<div className="font-medium">B.Sc Forensic Science (2024) [cite: 28, 34]</div>
            [cite_start]<p className="text-sm text-slate-300">Government Institute of Forensic Science — Percentage: 71.19 [cite: 28]</p>
          </div>
          <div>
            [cite_start]<div className="font-medium">Senior Secondary (Class 12) (2021) [cite: 29, 36]</div>
            [cite_start]<p className="text-sm text-slate-300">Gandhi city junior college — Percentage: 93.3 [cite: 29, 30]</p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
