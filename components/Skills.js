import React from 'react'


const skills = [
'ELK / Elastic Stack', 'Splunk', 'Wazuh', 'Snort', 'Suricata', 'Python', 'Azure', 'AWS', 'Nmap', 'Burp Suite', 'Wireshark'
]


export default function Skills(){
return (
<section id="skills" className="card">
<h3 className="text-xl font-semibold">Skills</h3>
<div className="mt-4 flex flex-wrap gap-3">
{skills.map(s => (
<span key={s} className="px-3 py-1 rounded-full border border-vc-blue-600 text-sm">{s}</span>
))}
</div>
</section>
)
}
