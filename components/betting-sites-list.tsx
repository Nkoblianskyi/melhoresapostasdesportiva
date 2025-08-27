"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, Award } from "lucide-react"
import { bettingSites } from "@/data/betting-sites"

export function BettingSitesList() {
  const [sites, setSites] = useState(bettingSites)

  const getCurrentDateInPortuguese = () => {
    const now = new Date()
    const months = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ]
    const month = months[now.getMonth()]
    const year = now.getFullYear()
    return `${month} ${year}`
  }

  return (
    <section className="pt-4 md:pt-8 pb-8 md:pb-16 relative z-10">
      <div className="container mx-auto px-2 relative z-10 max-w-[1150px]">
        <div className="w-full space-y-4 md:space-y-6">
          {sites.map((site, index) => (
            <Link
              key={site.id}
              href={site.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up relative ${
                index === 0
                  ? "border-2 border-red-500 bg-gradient-to-br from-gray-800 to-gray-900"
                  : "border border-gray-600 bg-gradient-to-br from-gray-800 to-gray-900"
              }`}
              style={{
                animationDelay: `${index * 150}ms`,
                backgroundImage:
                  index === 0
                    ? 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%23dc2626" fillOpacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
                    : 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%2316a34a" fillOpacity="0.08"%3E%3Ccircle cx="30" cy="30" r="3"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              }}
            >
              {index === 0 && (
                <div className="absolute -top-2 -left-2 z-20">
                  <div className="bg-red-600 text-white text-[10px] md:text-xs font-bold rounded-full p-1 md:p-2 shadow-md flex items-center">
                    <Award className="h-3 w-3 md:h-4 md:w-4 mr-0.5 md:mr-1" />
                    MELHOR AVALIADO
                  </div>
                </div>
              )}

              {index === 1 && (
                <div className="absolute -top-2 -left-2 z-20">
                  <div className="bg-green-600 text-white text-[10px] md:text-xs font-bold rounded-full p-1 md:p-2 shadow-md flex items-center">
                    <Star className="h-3 w-3 md:h-4 md:w-4 mr-0.5 md:mr-1" />
                    OFERTA EXCLUSIVA
                  </div>
                </div>
              )}

              {index === 2 && (
                <div className="absolute -top-2 -left-2 z-20">
                  <div className="bg-orange-600 text-white text-[10px] md:text-xs font-bold rounded-full p-1 md:p-2 shadow-md flex items-center">
                    <Award className="h-3 w-3 md:h-4 md:w-4 mr-0.5 md:mr-1" />
                    EM ALTA
                  </div>
                </div>
              )}

              {/* Sports-themed decorative elements */}
              <div className="absolute top-4 right-4 opacity-10">
                {index === 0 ? (
                  <div className="text-red-400 text-4xl">⚽</div>
                ) : (
                  <div className="text-green-400 text-3xl">🏆</div>
                )}
              </div>

              <div className="hidden md:grid">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4">
                  {/* Logo and Rating Section */}
                  <div className="md:col-span-3 p-3 md:p-6 flex flex-col items-center justify-center">
                    <div className="relative w-full max-w-[140px]">
                      <div className="bg-white rounded-lg p-2 md:p-4 shadow-sm mb-2 md:mb-3 w-full h-24 md:h-28 flex items-center justify-center overflow-hidden">
                        <Image
                          src={site.logo || "/placeholder.svg"}
                          alt={site.name}
                          width={200}
                          height={140}
                          className="object-contain max-h-full max-w-full transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3 w-3 md:h-5 md:w-5 text-yellow-400 transition-transform duration-300 hover:scale-125"
                            fill="currentColor"
                          />
                        ))}
                      </div>
                      <div className="flex items-center justify-center gap-1 md:gap-2">
                        <span className="text-lg md:text-2xl font-bold text-white">{site.score.toFixed(1)}</span>
                        <span className="text-[10px] md:text-xs text-gray-300">({site.reviews || 2500} reviews)</span>
                      </div>
                    </div>
                  </div>

                  {/* Features Section */}
                  <div className="md:col-span-5 p-3 md:p-6 flex flex-col justify-center text-center">
                    <div className="mb-2 md:mb-4">
                      <p className="text-[10px] md:text-xs text-green-400 uppercase font-semibold">
                        OFERTA DE BOAS-VINDAS
                      </p>
                      <p className="font-bold text-base md:text-xl text-white">{site.bonus}</p>
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="md:col-span-4 p-3 md:p-6 flex flex-col items-center justify-center">
                    <div className="w-full max-w-xs">
                      <div className="relative mb-3 md:mb-6">
                        <Button
                          className="w-full bg-green-600 hover:bg-green-700 transition-all duration-300 hover:shadow-lg transform hover:scale-105 animate-glow animate-blink text-sm md:text-base py-4 md:py-6"
                          asChild
                        >
                          <span className="flex items-center justify-center">OBTER BÓNUS</span>
                        </Button>
                      </div>
                      <p className="text-[10px] md:text-xs text-center text-gray-300">
                        18+. T&Cs Apply. Jogue com Responsabilidade.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile Layout */}
              <div className="md:hidden flex flex-col gap-3 p-3">
                <div className="grid grid-cols-2 items-start gap-2 min-h-[100px]">
                  <div className="flex justify-center items-center h-full">
                    <div className="bg-white p-2 rounded shadow-sm w-32 h-16 flex items-center justify-center overflow-hidden">
                      <Image
                        src={site.logo || "/placeholder.svg"}
                        alt={site.name}
                        width={100}
                        height={40}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="text-center flex flex-col justify-center h-full min-h-[80px]">
                    <div className="uppercase font-bold mb-1 text-base text-gray-200">Bónus</div>
                    <div className="font-bold text-red-400 text-lg leading-tight">{site.bonus}</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 items-center gap-2 pt-2 border-t border-white/20 min-h-[60px]">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">{site.score.toFixed(1)}</div>
                    <div className="text-[10px] text-gray-300 font-semibold">Pontuação</div>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center gap-0.5 mb-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-[10px] text-gray-300 font-semibold">({site.reviews})</div>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative">
                      <Button
                        className="bg-green-700 hover:bg-green-800 text-white text-xs px-4 py-2 font-semibold shadow animate-glow animate-blink"
                        asChild
                      >
                        <span>Obter Bónus</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          
        </div>
      </div>
    </section>
  )
}
