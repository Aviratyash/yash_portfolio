import React from 'react'
import { siteMetadata } from '../app/config'

export default function Hero(){
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
      <div className="md:col-span-2">
        <h2 className="text-4xl font-bold leading-tight">{siteMetadata.name}</h2>
        {/* Updated Paragraph Below */}
        <p className="mt-3 text-slate-300 max-w-xl">
          Hands-on experience in Security monitoring, log analysis, and incident response using SIEM (ELK, Splunk, Wazuh) and IDS/IPS. [cite: 8] Skilled in MITRE ATT&CK threat mapping and proactive threat hunting to build robust detection strategies. [cite: 10] Certified in Google Cybersecurity and ranked in Top 5% on TryHackMe. [cite: 11]
        </p>

        <div className="mt-6 flex gap-3">
          <a href="#projects" className="px-4 py-2 rounded-lg bg-vc-accent text-vc-blue-900 font-medium">See Projects</a>
          <a href={siteMetadata.resume} className="px-4 py-2 rounded-lg border border-vc-blue-600 text-slate-200">Download CV</a>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="w-44 h-44 rounded-full overflow-hidden border-2 border-vc-blue-600 card flex items-center justify-center">
          {/* Placeholder avatar - replace /public/avatar.jpg */}
          <img src="/avatar-placeholder.png" alt="Yash" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}
