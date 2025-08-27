"use client"

import { useState, useEffect } from "react"
import { X, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in p-4">
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg p-3 md:p-6 animate-scale-in">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <div className="bg-red-600 p-1 rounded-full mr-2">
              <Info className="h-3 w-3 md:h-5 md:w-5 text-white" />
            </div>
            <h2 className="text-base md:text-xl font-bold">Informação do Anunciante</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-300 hover:rotate-90 transform"
            aria-label="Fechar"
          >
            <X className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>
        <div className="text-xs md:text-base text-gray-700 space-y-2">
          <p>
            MelhoresApostasDesportiva.com é um serviço gratuito para ajudá-lo a encontrar plataformas de apostas.
            Recebemos taxas das marcas em destaque, afetando a sua colocação.
          </p>
          <p>
            Todos os sites em destaque são licenciados por autoridades respeitáveis. Esforçamo-nos pela precisão, mas
            não podemos ser responsabilizados por imprecisões.
          </p>
          <p>
            Bónus e ofertas estão sujeitos a alterações. Leia sempre os termos completos no website do operador antes de
            reclamar.
          </p>
        </div>
        <div className="mt-3 md:mt-6 flex justify-end">
          <Button
            onClick={onClose}
            className="bg-red-600 hover:bg-red-700 transition-all duration-300 hover:shadow-md text-xs md:text-base py-1.5 px-3 md:py-2 md:px-4"
          >
            Compreendi
          </Button>
        </div>
      </div>
    </div>
  )
}
