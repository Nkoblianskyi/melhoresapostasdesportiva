"use client"
import Image from "next/image"
import { Award, Star } from "lucide-react"

interface HeroSectionProps {
  onAgeModalOpen: () => void
  onAdvertiserModalOpen: () => void
}

export function HeroSection({ onAgeModalOpen, onAdvertiserModalOpen }: HeroSectionProps) {
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
    return `${months[now.getMonth()]} ${now.getFullYear()}`
  }

  return (
    <section className="relative text-white overflow-hidden">
      <div className="container mx-auto px-2 md:px-4 max-w-[1150px] relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-lg"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 py-8">
          <div className="mb-4">
            <h1 className="text-lg md:text-xl font-bold mb-2 leading-tight">
              OS <span className="text-green-300">MELHORES</span> SITES DE APOSTAS EM PORTUGAL
            </h1>
            <p className="text-sm md:text-lg text-gray-200 max-w-2xl mx-auto">
              Bónus exclusivos e análises especializadas para melhorar a sua experiência de apostas
            </p>
          </div>

          <div className="flex flex-row flex-wrap justify-center gap-x-4 gap-y-2 md:grid md:grid-cols-3 md:gap-4 mb-4">
            <div className="flex items-center">
              <div className="bg-red-600/30 p-1 rounded-md mr-2 border border-red-400/30">
                <Image src="/flag.png" alt="escudo" width={20} height={20} />
              </div>
              <span className="text-[10px] font-medium">Licenciado e Seguro</span>
            </div>

            <div className="flex items-center">
              <div className="bg-red-600/30 p-1 rounded-md mr-2 border border-red-400/30">
                <Award className="h-4 w-4 text-red-200" />
              </div>
              <span className="text-[10px] font-medium">Bónus Exclusivos</span>
            </div>

            <div className="flex items-center">
              <div className="bg-red-600/30 p-1 rounded-md mr-2 border border-red-400/30">
                <Star className="h-4 w-4 text-red-200" />
              </div>
              <span className="text-[10px] font-medium">Análises Especializadas</span>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-[10px] text-gray-200">
              Jogue com responsabilidade. Aplicam-se termos e condições de apostas.{" "}
              <button
                onClick={onAdvertiserModalOpen}
                className="text-green-300 hover:text-green-200 hover:underline font-medium transition-colors duration-300"
              >
                Info Anunciante
              </button>{" "}
              |{" "}
              <button
                onClick={onAgeModalOpen}
                className="text-green-300 hover:text-green-200 hover:underline font-medium transition-colors duration-300"
              >
                Apenas +18
              </button>
            </p>

            <div className="mt-3 pt-2 border-t border-white/20">
              <p className="text-[10px] text-gray-300">
                Lista atualizada em <span className="font-semibold text-green-300">{getCurrentDateInPortuguese()}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
