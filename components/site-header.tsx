"use client"

import Link from "next/link"
import { Menu, Trophy, X } from "lucide-react"
import { useState, useEffect } from "react"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add scroll event listener to detect when page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-red-900/95 backdrop-blur-sm shadow-lg" : "bg-red-900"
      }`}
    >
      <div className="max-w-[1150px] mx-auto flex items-center justify-between h-16 px-4 overflow-hidden">
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0 min-w-0">
          <div className="relative h-10 w-10 bg-white rounded-lg shadow-md overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
            <div className="absolute inset-0 bg-red-600 opacity-90"></div>
            <Trophy className="h-6 w-6 text-white relative z-10 transition-transform duration-300 group-hover:rotate-12" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-green-300 leading-none truncate">
              MelhoresApostasDesportiva
            </span>
          </div>
        </Link>

        <div className="md:hidden flex-shrink-0">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-green-300 transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <nav className="hidden md:flex items-center space-x-6 flex-shrink-0">
          <Link href="/" className="text-sm font-medium text-white hover:text-green-300 transition-colors duration-300">
            Início
          </Link>
          <Link
            href="/sobre-nos"
            className="text-sm font-medium text-white hover:text-green-300 transition-colors duration-300"
          >
            Sobre Nós
          </Link>
          
          
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-red-800 animate-fade-in">
          <div className="max-w-[1150px] mx-auto px-4 py-3 space-y-2">
            <Link
              href="/"
              className="block text-white hover:text-green-300 transition-colors duration-300 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              href="/sobre-nos"
              className="block text-white hover:text-green-300 transition-colors duration-300 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre Nós
            </Link>
            <Link
              href="/termos-condicoes"
              className="block text-white hover:text-green-300 transition-colors duration-300 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Termos e Condições
            </Link>
            <Link
              href="/politica-privacidade"
              className="block text-white hover:text-green-300 transition-colors duration-300 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
