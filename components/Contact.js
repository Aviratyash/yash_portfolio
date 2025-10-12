import React from 'react'
import { siteMetadata } from '../app/config'


export default function Contact(){
return (
<section id="contact" className="card">
<h3 className="text-xl font-semibold">Contact</h3>
<div className="mt-3 grid sm:grid-cols-2 gap-4">
<div>
<p className="text-slate-300">Email: <a href={`mailto:${siteMetadata.email}`} className="text-vc-accent">{siteMetadata.email}</a></p>
<p className="text-slate-300 mt-2">LinkedIn: <a href={siteMetadata.linkedin} target="_blank" rel="noreferrer" className="text-vc-accent">Profile</a></p>
</div>
<div>
<form action="#" className="space-y-3">
<input placeholder="Your name" className="w-full p-2 rounded bg-vc-blue-900/40 border border-vc-blue-600" />
<input placeholder="Your email" className="w-full p-2 rounded bg-vc-blue-900/40 border border-vc-blue-600" />
<textarea placeholder="Message" className="w-full p-2 rounded bg-vc-blue-900/40 border border-vc-blue-600" rows="4"></textarea>
<button className="px-4 py-2 rounded-lg bg-vc-accent text-vc-blue-900">Send</button>
</form>
</div>
</div>
</section>
)
}
