"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Award, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { bettingSites } from "@/data/betting-sites"

export function TopOffersModal() {
  const [isOpen, setIsOpen] = useState(false)
  // Slice the bettingSites array to only show the first item (top 1)
  const [topSite, setTopSite] = useState(bettingSites[0]) // Get only the first site
  const [mounted, setMounted] = useState(false) // To handle client-side rendering

  useEffect(() => {
    setMounted(true) // Component is mounted on client
  }, [])

  useEffect(() => {
    if (mounted) {
      // Only run on client after mount
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 8000) // Show modal after 8 seconds

      return () => clearTimeout(timer)
    }
  }, [mounted]) // Re-run effect when mounted state changes

  if (!isOpen || !mounted) return null // Do not render if not open or not mounted

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in p-3">
      {/* Reduced max-w-3xl to max-w-sm for a single card, responsive width */}
      <div className="relative w-full max-w-sm bg-white rounded-xl shadow-2xl overflow-hidden animate-scale-in">
        {/* Header adjustments */}
        <div className="bg-red-600 text-white py-2 md:py-3 px-3 md:px-4 flex items-center justify-between sticky top-0 z-10 text-center">
          <div className="flex items-center gap-1 md:gap-2">
            
            <h2 className="text-sm md:text-lg font-bold text-right">OFERTA PREMIUM DE APOSTAS</h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-gray-200 transition-transform duration-300 hover:rotate-90 transform bg-white/20 rounded-full p-1"
            aria-label="Fechar"
          >
            <X className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        </div>

        <>
          {/* Main content area adjustments */}
          <div className="p-4 flex justify-center">
            {" "}
            {/* Added flex justify-center for single card */}
            <p className="text-center text-gray-600 mb-4 text-sm sr-only">
              {" "}
              {/* Hidden for single offer */}
              Ofertas exclusivas das melhores plataformas de apostas de Portugal - disponíveis por tempo limitado!
            </p>
            {/* Display only one card */}
            <Link
              key={topSite.id}
              href={topSite.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 border-2 border-red-500 relative w-full" // Ensure it takes full width of its container
            >
              <Card className="h-full">
                
                <CardContent className="p-4 flex flex-col items-center text-center h-full">
                  <div className="flex-grow flex flex-col items-center">
                    {/* Logo adjustments */}
                    <div className="bg-white p-2 rounded-lg shadow-sm mb-3 flex items-center justify-center w-48 h-48">
                      <Image
                        src={topSite.logo || "/placeholder.svg"}
                        alt={topSite.name}
                        width={180}
                        height={120}
                        className="object-contain max-h-full max-w-full"
                      />
                    </div>
                    {/* Rating adjustments */}
                    <div className="flex items-center justify-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 text-yellow-400" fill="currentColor" />
                      ))}
                      <span className="font-bold text-base text-gray-800 ml-1">{topSite.score.toFixed(1)}</span>
                    </div>
                    {/* Welcome Offer Badge */}
                    <Badge variant="outline" className="bg-green-50 text-green-700 mb-2 text-xs">
                      OFERTA DE BOAS-VINDAS
                    </Badge>
                    {/* Bonus Text adjustments */}
                    <h3 className="text-lg font-bold text-gray-800 mb-4">{topSite.bonus}</h3>
                  </div>
                  {/* Button and Disclaimer Group */}
                  <div className="w-full flex flex-col items-center">
                    <div className="relative w-full">
                      <Button
                        className="w-full bg-green-600 hover:bg-green-700 transition-all duration-300 hover:shadow-lg transform hover:scale-105 animate-glow animate-blink text-sm py-4"
                        asChild
                      >
                        <span className="flex items-center justify-center">RECLAMAR BÓNUS</span>
                      </Button>
                    </div>
                    <p className="text-xs text-center text-gray-500 mt-2">
                      18+. T&Cs Aplicam-se. Jogue com Responsabilidade.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </>
      </div>
    </div>
  )
}
