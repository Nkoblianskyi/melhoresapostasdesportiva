"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

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
      <div className="max-w-[1150px] mx-auto flex items-center justify-center h-16 px-4 overflow-hidden">
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0 min-w-0">
          <div className="relative h-10 w-10 overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
            <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-green-300 leading-none truncate">
              MelhoresApostasDesportiva
            </span>
          </div>
        </Link>

      </div>

    </header>
  )
}
