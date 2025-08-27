"use client"

import { useState } from "react"
import Image from "next/image"
import { BettingSitesList } from "@/components/betting-sites-list"
import { TopOffersModal } from "@/components/top-offers-modal"
import { AgeRestrictionModal } from "@/components/age-restriction-modal"
import { AdvertiserInfoModal } from "@/components/advertiser-info-modal"
import { FaqSection } from "@/components/faq-section"
import { Award, Star, Shield, TrendingUp, Users, Clock } from "lucide-react"
// import { AnimatedSportsIcons } from "@/components/animated-sports-icons"

export default function Home() {
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false)
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)

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
    <main className="min-h-screen flex flex-col relative bg-gray-900">
      <div className="fixed inset-0 z-0">
        <Image
          src="/portuguese-football-stadium-background-with-red-an.png"
          alt="Fundo de apostas"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section - Made semi-transparent */}
        <section className="relative text-white overflow-hidden">
          <div className="container mx-auto px-2 md:px-4 max-w-[1150px] relative">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-lg"></div>
            </div>

            {/* Animated Particles */}
            {/* <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-grid-white opacity-10 rounded-lg"></div>
              <div className="absolute top-0 left-0 right-0 h-px bg-red-500 opacity-50"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-green-500 opacity-50"></div>
            </div> */}

            {/* Main Content */}
            <div className="max-w-4xl mx-auto text-center relative z-10 py-8">
              {/* Main heading with animation */}
              <div className="mb-4">
                <h1 className="text-lg md:text-xl font-bold mb-2 leading-tight">
                  OS <span className="text-green-300">MELHORES</span> SITES DE APOSTAS EM PORTUGAL
                </h1>
                <p className="text-sm md:text-lg text-gray-200 max-w-2xl mx-auto">
                  Bónus exclusivos e análises especializadas para melhorar a sua experiência de apostas
                </p>
              </div>

              {/* Features with animation */}
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

              {/* Responsible gambling notice */}
              <div className="text-center mt-4">
                <p className="text-[10px] text-gray-200">
                  Jogue com responsabilidade. Aplicam-se termos e condições de apostas.{" "}
                  <button
                    onClick={() => setIsAdvertiserModalOpen(true)}
                    className="text-green-300 hover:text-green-200 hover:underline font-medium transition-colors duration-300"
                  >
                    Info Anunciante
                  </button>{" "}
                  |{" "}
                  <button
                    onClick={() => setIsAgeModalOpen(true)}
                    className="text-green-300 hover:text-green-200 hover:underline font-medium transition-colors duration-300"
                  >
                    Apenas +18
                  </button>
                </p>

                <div className="mt-3 pt-2 border-t border-white/20">
                  <p className="text-[10px] text-gray-300">
                    Lista atualizada em{" "}
                    <span className="font-semibold text-green-300">{getCurrentDateInPortuguese()}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Betting Sites List with Animated Background */}
        <div id="betting-sites" className="relative">
          {/* <div className="absolute inset-0 overflow-hidden">
            <AnimatedSportsIcons />
          </div> */}
          <BettingSitesList />
        </div>

        <section className="py-12 relative overflow-hidden md:py-2.5">
          <div className="container mx-auto px-4 max-w-[1150px] relative">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-lg z-0"></div>
            {/* <div className="absolute inset-0 bg-grid-white opacity-5 rounded-lg z-0"></div> */}

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

        {/* Sports Betting Features Section */}
        <section className="py-12 relative overflow-hidden md:py-2.5">
          <div className="container mx-auto px-4 max-w-[1150px] relative">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-lg z-0 py-0"></div>

            <div className="relative z-10 p-4 py-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Funcionalidades de Apostas Desportivas
                </h2>
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

        {/* FAQ Section */}
        <div id="faq-section">
          <FaqSection />
        </div>

        {/* Content Sections */}
        {/* Expert Betting Guide Section - Redesigned */}
        <section className="py-12 relative overflow-hidden md:py-2.5">
          <div className="container mx-auto px-4 max-w-[1150px] relative">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-lg z-0"></div>

            <div className="relative z-10 p-4">
              <div className="max-w-5xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  O Guia Definitivo de Apostas Portuguesas
                </h2>
                <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto">
                  Conhecimentos especializados para o ajudar a encontrar a plataforma de apostas perfeita e maximizar a
                  sua experiência
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {/* Card 1 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl hover:transform hover:scale-105 transition-all duration-300">
                  <div className="bg-red-600/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Apostas Seguras e Protegidas</h3>
                  <p className="text-green-100">
                    Recomendamos apenas plataformas totalmente licenciadas com medidas de segurança robustas, garantindo
                    que as suas informações pessoais e financeiras permanecem protegidas em todos os momentos.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl hover:transform hover:scale-105 transition-all duration-300">
                  <div className="bg-red-600/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08-.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Bónus Exclusivos</h3>
                  <p className="text-green-100">
                    Aproveite ofertas de boas-vindas generosas, apostas grátis e promoções contínuas que proporcionam
                    valor real e melhoram a sua experiência de apostas desde o primeiro dia.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl hover:transform hover:scale-105 transition-all duration-300">
                  <div className="bg-red-600/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Conhecimentos Especializados</h3>
                  <p className="text-green-100">
                    A nossa equipa de especialistas em apostas avalia continuamente cada plataforma, fornecendo-lhe
                    informações precisas e atualizadas para tomar decisões informadas.
                  </p>
                </div>
              </div>

              {/* Bottom section with key features */}
              <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Porque Confiar nas Nossas Recomendações</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-green-300 mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-green-100">
                          Testes abrangentes de todas as funcionalidades da plataforma
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-green-300 mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-green-100">
                          Atualizações regulares para refletir ofertas e funcionalidades atuais
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-green-300 mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-green-100">
                          Foco em plataformas que atendem especificamente aos apostadores portugueses
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-green-300 mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-green-100">Critérios de avaliação e metodologia transparentes</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Como Começar</h3>
                    <p className="text-green-100 mb-4">
                      Encontrar a sua plataforma de apostas ideal é simples com a nossa orientação especializada:
                    </p>
                    <ol className="space-y-3 text-green-100">
                      <li className="flex">
                        <span className="bg-red-600/30 h-6 w-6 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">
                          1
                        </span>
                        <span>Compare as nossas plataformas mais bem classificadas com base nas suas preferências</span>
                      </li>
                      <li className="flex">
                        <span className="bg-red-600/30 h-6 w-6 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">
                          2
                        </span>
                        <span>Reivindique o seu bónus de boas-vindas exclusivo através dos nossos links</span>
                      </li>
                      <li className="flex">
                        <span className="bg-red-600/30 h-6 w-6 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">
                          3
                        </span>
                        <span>Configure a sua conta com limites de jogo responsável</span>
                      </li>
                      <li className="flex">
                        <span className="bg-red-600/30 h-6 w-6 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">
                          4
                        </span>
                        <span>Desfrute de uma experiência de apostas premium com confiança</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="relative z-10">
        <TopOffersModal />
        <AgeRestrictionModal isOpen={isAgeModalOpen} onClose={() => setIsAgeModalOpen(false)} />
        <AdvertiserInfoModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
      </div>
    </main>
  )
}
