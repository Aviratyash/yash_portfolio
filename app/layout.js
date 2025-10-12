import './globals.css'
import React from 'react'
import Header from '../components/Header'


export const metadata = {
title: 'Yash Ingole — Cybersecurity',
description: 'M.Sc Cybersecurity — Portfolio of Yash Ingole'
}


export default function RootLayout({ children }) {
return (
<html lang="en">
<body>
<div className="max-w-5xl mx-auto px-6 py-10">
<Header />
<main className="mt-8">{children}</main>
<footer className="mt-16 text-center text-sm text-slate-400">© {new Date().getFullYear()} Yash Ingole — Built with Next.js & Tailwind</footer>
</div>
</body>
</html>
)
}
