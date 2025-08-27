import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Sobre Nós | Melhores Sites de Apostas Desportivas Portugal",
  description:
    "Conheça a nossa missão de fornecer informações confiáveis sobre os melhores sites de apostas desportivas em Portugal.",
}

export default function AboutUs() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-900">
      <section className="pt-28 pb-12 flex-grow">
        <div className="container mx-auto px-4 max-w-[1150px]">
          <div className="bg-gradient-to-r from-green-600 to-red-600 rounded-lg p-8 mb-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre MelhoresApostasDesportiva.com</h1>
            <p className="text-xl opacity-90">O seu guia de confiança para apostas desportivas em Portugal</p>
          </div>

          <div className="space-y-8">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <div className="w-1 h-8 bg-green-500 mr-4"></div>A Nossa Visão
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Na MelhoresApostasDesportiva.com, estabelecemo-nos como o destino principal de Portugal para avaliação
                de plataformas de apostas. No mercado atual saturado, a nossa equipa especializada corta através do
                ruído para identificar experiências de apostas verdadeiramente excepcionais, especificamente adaptadas
                para apostadores portugueses.
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-red-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <div className="w-1 h-8 bg-red-500 mr-4"></div>O Nosso Sistema de Avaliação
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Por trás de cada recomendação está um protocolo de avaliação abrangente desenvolvido por veteranos da
                indústria. Examinamos cada plataforma através de múltiplas dimensões: infraestrutura de segurança,
                generosidade promocional, variedade de mercados, design de interface, otimização móvel, eficiência de
                processamento de pagamentos e capacidade de resposta do atendimento ao cliente.
              </p>
              <p className="text-gray-300 leading-relaxed">
                O nosso compromisso com a integridade significa que apresentamos exclusivamente operadores com licenças
                de jogo portuguesas válidas, garantindo que cumprem padrões regulamentares rigorosos para proteção do
                jogador, práticas de jogo justas e medidas de jogo responsável.
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <div className="w-1 h-8 bg-green-500 mr-4"></div>
                Os Nossos Valores Fundamentais
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-900/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Autenticidade</h3>
                  <p className="text-gray-300 text-sm">
                    Fornecemos insights transparentes sobre a nossa metodologia de avaliação, garantindo que compreende
                    exatamente como chegamos às nossas recomendações.
                  </p>
                </div>
                <div className="bg-red-900/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-red-400 mb-2">Independência Editorial</h3>
                  <p className="text-gray-300 text-sm">
                    As nossas avaliações permanecem livres de considerações comerciais, garantindo orientação genuína e
                    focada no utilizador.
                  </p>
                </div>
                <div className="bg-green-900/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Atualidade</h3>
                  <p className="text-gray-300 text-sm">
                    O panorama das apostas evolui rapidamente, e as nossas análises também—reavaliamos continuamente as
                    plataformas para garantir que a nossa orientação permanece atual.
                  </p>
                </div>
                <div className="bg-red-900/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-red-400 mb-2">Bem-estar do Jogador</h3>
                  <p className="text-gray-300 text-sm">
                    Defendemos práticas de jogo responsável e fornecemos recursos para aqueles que procuram assistência
                    com questões relacionadas com o jogo.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-red-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <div className="w-1 h-8 bg-red-500 mr-4"></div>A Nossa Equipa de Especialistas
              </h2>
              <p className="text-gray-300 leading-relaxed">
                O nosso coletivo reúne experiência diversa que abrange análise desportiva, segurança digital, design de
                experiência do utilizador e regulamentação de jogos. Unidos por uma paixão pelo panorama das apostas
                portuguesas, combinamos conhecimento técnico com experiência prática de apostas para fornecer insights
                que genuinamente melhoram as suas decisões de apostas.
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <div className="w-1 h-8 bg-green-500 mr-4"></div>O Nosso Modelo de Receita
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Mantemos um compromisso de fornecer informações gratuitas e de alta qualidade aos nossos visitantes. As
                nossas operações são sustentadas através de parcerias de afiliados com operadores de apostas, que
                fornecem compensação quando os utilizadores se registam através dos nossos links de referência. Este
                modelo permite-nos entregar conteúdo premium sem taxas de subscrição ou paywalls.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Crucialmente, estes acordos comerciais nunca influenciam as nossas avaliações de plataformas. A nossa
                metodologia de classificação permanece estritamente baseada no mérito, com cada recomendação refletindo
                qualidade genuína da plataforma em vez de considerações comerciais.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
