import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Certificates from '../components/Certificates'
import Contact from '../components/Contact'


export default function Home() {
return (
<div className="space-y-16">
<Hero />
<About />
<Skills />
<Experience />
<Projects />
<Certificates />
<Contact />
</div>
)
}
