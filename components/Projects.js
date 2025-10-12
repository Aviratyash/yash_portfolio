import React from 'react'


const projects = [
{ title: 'Cloud Security Posture Management (CSPM) Tool', date: '06/2025', desc: 'Python-based tool to detect common AWS misconfigurations.' },
{ title: 'Autonomous Cyber Defense Agent', date: '07/2025 – 10/2025', desc: 'AI agent automating parts of the cyber defense lifecycle (MVP).' },
{ title: 'ML Based API Threat Detection', date: '01/2025 – 05/2025', desc: 'ML system to detect API threats like DDoS & abuse.' }
]


export default function Projects(){
return (
<section id="projects" className="card">
<h3 className="text-xl font-semibold">Projects</h3>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
{projects.map((p,i) => (
<article key={i} className="p-4 rounded-lg bg-vc-blue-800/30 border border-vc-blue-600">
<h4 className="font-medium">{p.title}</h4>
<div className="text-sm text-slate-400">{p.date}</div>
<p className="mt-2 text-slate-300 text-sm">{p.desc}</p>
<div className="mt-3">
<a href="#" className="text-sm text-vc-accent">View repo</a>
</div>
</article>
))}
</div>
</section>
)
}
