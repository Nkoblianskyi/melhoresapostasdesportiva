"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AgeRestrictionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AgeRestrictionModal({ isOpen, onClose }: AgeRestrictionModalProps) {
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
            <div className="bg-red-600 p-1 rounded mr-2">
              <span className="text-white font-bold text-xs">18+</span>
            </div>
            <h2 className="text-base md:text-xl font-bold">Restrição de Idade</h2>
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
            Este website é destinado a indivíduos com 18 anos ou mais. Ao usar o nosso site, confirma que cumpre este
            requisito.
          </p>
          <p>As apostas devem ser apenas para entretenimento. Nunca aposte dinheiro que não pode perder.</p>
          <p>Se tem problemas com jogos, procure ajuda do SICAD ou outros serviços de apoio em Portugal.</p>
        </div>
        <div className="mt-3 md:mt-6 flex justify-end">
          <Button
            onClick={onClose}
            className="bg-red-600 hover:bg-red-700 transition-all duration-300 hover:shadow-md text-xs md:text-base py-1.5 px-3 md:py-2 md:px-4"
          >
            Compreendo
          </Button>
        </div>
      </div>
    </div>
  )
}
