import React from 'react'
import { siteMetadata } from '../app/config'
import clsx from 'clsx'


export default function Header(){
return (
<header className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-semibold">{siteMetadata.name}</h1>
<p className="text-sm text-slate-400">{siteMetadata.title}</p>
</div>
<div className="flex items-center gap-3">
<a href={siteMetadata.linkedin} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">LinkedIn</a>
<a href={siteMetadata.resume} className="text-slate-300 hover:text-white">Download CV</a>
</div>
</header>
)
}
