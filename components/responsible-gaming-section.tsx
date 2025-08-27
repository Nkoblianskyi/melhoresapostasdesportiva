import { Clock, Shield } from "lucide-react"

export function ResponsibleGamingSection() {
  return (
    <section className="py-12 relative overflow-hidden md:py-0">
      <div className="container mx-auto px-4 max-w-[1150px] relative">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-lg z-0"></div>

        <div className="relative z-10 p-4 py-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Jogo Responsável</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A sua segurança e bem-estar são a nossa prioridade. Aposte sempre com responsabilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <Clock className="h-12 w-12 text-red-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Ferramentas de Controlo</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Limites de depósito diários, semanais e mensais
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Limites de tempo de sessão
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Auto-exclusão temporária ou permanente
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Verificação de realidade durante o jogo
                </li>
              </ul>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <Shield className="h-12 w-12 text-green-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Recursos de Ajuda</h3>
              <div className="space-y-4 text-gray-300">
                <p>Se sente que o jogo está a afetar negativamente a sua vida, procure ajuda:</p>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">Linha SOS Jogador</h4>
                  <p className="text-sm">213 950 787 (dias úteis, 10h-18h)</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">SICAD</h4>
                  <p className="text-sm">Serviço de Intervenção nos Comportamentos Aditivos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
