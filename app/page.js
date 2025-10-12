"use client";

import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Certificates from '../components/Certificates'
import Contact from '../components/Contact'

// Animation variants for the container to orchestrate the children's animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 // This will make each child animate 0.2s after the previous one
    }
  }
};

// Animation variants for each section (the children)
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function Home() {
  return (
    <motion.div
      className="space-y-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}><Hero /></motion.div>
      <motion.div variants={itemVariants}><About /></motion.div>
      <motion.div variants={itemVariants}><Skills /></motion.div>
      <motion.div variants={itemVariants}><Experience /></motion.div>
      <motion.div variants={itemVariants}><Projects /></motion.div>
      <motion.div variants={itemVariants}><Certificates /></motion.div>
      <motion.div variants={itemVariants}><Contact /></motion.div>
    </motion.div>
  )
}
