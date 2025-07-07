import React from 'react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-start px-6 md:px-12 bg-background text-foreground font-sans">
      {/* Replace 'Your Name' and 'Your Tagline' with your actual text from Figma */}
      <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
        Your Name
      </h1>
      <p className="text-xl md:text-2xl font-normal mb-6 max-w-lg">
        Your tagline goes here. Tell visitors what you do in one concise sentence.
      </p>
      <Link href="#projects">
        <a className="inline-block px-8 py-3 border-2 border-foreground rounded-2xl font-medium uppercase tracking-wide hover:bg-foreground hover:text-background transition-all duration-200">
          View My Work
        </a>
      </Link>
    </section>
  )
}