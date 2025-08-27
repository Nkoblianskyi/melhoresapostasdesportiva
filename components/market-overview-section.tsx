import { Shield, TrendingUp, Users } from "lucide-react"

export function MarketOverviewSection() {
  return (
    <section className="py-12 relative overflow-hidden md:py-2.5">
      <div className="container mx-auto px-4 max-w-[1150px] relative">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-lg z-0"></div>

        <div className="relative z-10 p-4 py-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">O Mercado de Apostas em Portugal</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Compreenda o panorama regulamentado das apostas desportivas portuguesas e como escolher a melhor
              plataforma
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-500/30 transition-all duration-300">
              <Shield className="h-12 w-12 text-red-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Regulamentação SRIJ</h3>
              <p className="text-gray-300">
                Todas as casas de apostas recomendadas possuem licença do Serviço de Regulação e Inspeção de Jogos,
                garantindo total conformidade com a legislação portuguesa.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-500/30 transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Mercados Populares</h3>
              <p className="text-gray-300">
                Futebol português, Liga dos Campeões, Premier League e outros desportos favoritos dos apostadores
                portugueses com odds competitivas.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-500/30 transition-all duration-300">
              <Users className="h-12 w-12 text-red-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Suporte em Português</h3>
              <p className="text-gray-300">
                Atendimento ao cliente especializado em português, com conhecimento das preferências e necessidades
                específicas dos jogadores portugueses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
