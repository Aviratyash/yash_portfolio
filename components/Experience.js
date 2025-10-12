import React from 'react'


const experiences = [
{ role: 'Cybersecurity & Digital Forensics Intern', company: 'Cyber Secured India', date: '04/2025 – 06/2025', desc: 'Threat detection, penetration testing, and forensic simulations.' },
{ role: 'Cyber Security Intern', company: 'SkillRAACE', date: '05/2024 – 07/2024', desc: 'Security assessments in virtual environments.' },
{ role: 'Azure Technologies Intern', company: 'Microsoft and AICTE', date: '06/2023 – 08/2023', desc: 'Built cloud-based chatbot website and studied cloud security.' }
]


export default function Experience(){
return (
<section id="experience" className="card">
<h3 className="text-xl font-semibold">Experience</h3>
<div className="mt-4 space-y-4">
{experiences.map((e,i) => (
<div key={i} className="p-4 rounded-lg bg-vc-blue-800/40 border border-vc-blue-600">
<div className="flex items-center justify-between">
<div>
<div className="font-medium">{e.role}</div>
<div className="text-sm text-slate-400">{e.company}</div>
</div>
<div className="text-sm text-slate-400">{e.date}</div>
</div>
<p className="mt-2 text-slate-300 text-sm">{e.desc}</p>
</div>
))}
</div>
</section>
)
}
