import React from 'react'


const certs = [
'Google Cybersecurity Professional Certificate (Aug 2023)',
'Splunk - Introduction to Splunk Security Essentials (June 2025)',
'Certified AppSec Practitioner (Mar 2025)'
]


export default function Certificates(){
return (
<section id="certificates" className="card">
<h3 className="text-xl font-semibold">Certificates</h3>
<ul className="mt-3 list-disc list-inside text-slate-300">
{certs.map((c,i) => <li key={i}>{c}</li>)}
</ul>
</section>
)
}
