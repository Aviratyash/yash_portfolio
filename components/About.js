import React from 'react'


export default function About(){
return (
<section id="about" className="card">
<h3 className="text-xl font-semibold">About</h3>
<p className="mt-3 text-slate-200">I am a cybersecurity practitioner with hands-on experience in security monitoring, log analysis, incident response, and penetration testing. I have a theoretical understanding of ISO 27001 and PCI DSS, and practical experience with cloud security and detection engineering.</p>


<div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
<div>
<strong>Education</strong>
<p className="text-sm text-slate-300">M.Sc Cybersecurity — Amity University Rajasthan (SGPA: 8.7)</p>
</div>
<div>
<strong>Location</strong>
<p className="text-sm text-slate-300">Jaipur, Rajasthan</p>
</div>
<div>
<strong>Contact</strong>
<p className="text-sm text-slate-300">yashingole2003@gmail.com</p>
</div>
</div>
</section>
)
}
