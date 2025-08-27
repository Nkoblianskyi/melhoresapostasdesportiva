export function SportsFeaturesSection() {
  return (
    <section className="py-12 relative overflow-hidden md:py-2.5">
      <div className="container mx-auto px-4 max-w-[1150px] relative">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-lg z-0 py-0"></div>

        <div className="relative z-10 p-4 py-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Funcionalidades de Apostas Desportivas</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Descubra as melhores funcionalidades para uma experiência de apostas completa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Apostas ao Vivo</h3>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-white/5 rounded-lg">
                  <div>
                    <h4 className="text-white font-semibold">Futebol em Direto</h4>
                    <p className="text-gray-400 text-sm">Apostas durante os jogos com odds dinâmicas</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-white/5 rounded-lg">
                  <div>
                    <h4 className="text-white font-semibold">Basquetebol</h4>
                    <p className="text-gray-400 text-sm">NBA, Euroliga e campeonatos nacionais</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-white/5 rounded-lg">
                  <div>
                    <h4 className="text-white font-semibold">Ténis</h4>
                    <p className="text-gray-400 text-sm">Grand Slams e torneios ATP/WTA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Tipos de Apostas</h3>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-white/5 rounded-lg">
                  <div>
                    <h4 className="text-white font-semibold">Apostas Simples</h4>
                    <p className="text-gray-400 text-sm">Resultado final, golos, cantos</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-white/5 rounded-lg">
                  <div>
                    <h4 className="text-white font-semibold">Apostas Combinadas</h4>
                    <p className="text-gray-400 text-sm">Múltiplas seleções para odds maiores</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-white/5 rounded-lg">
                  <div>
                    <h4 className="text-white font-semibold">Apostas Especiais</h4>
                    <p className="text-gray-400 text-sm">Primeiro golo, cartões, substituições</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
