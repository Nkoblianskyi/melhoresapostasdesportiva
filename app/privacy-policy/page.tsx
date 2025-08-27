import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Política de Privacidade | Melhores Sites de Apostas Desportivas Portugal",
  description: "Leia a nossa política de privacidade para compreender como recolhemos e utilizamos os seus dados.",
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-900">

      <section className="pt-28 pb-12 flex-grow">
        <div className="container mx-auto px-4 max-w-[1150px]">
          <div className="bg-gradient-to-r from-red-600 to-green-600 rounded-lg p-8 mb-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Privacidade</h1>
            <p className="text-xl opacity-90">Como protegemos e utilizamos os seus dados</p>
            <p className="text-sm opacity-75 mt-2">Última atualização: Dezembro 2025</p>
          </div>

          <div className="space-y-6">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-red-500/20">
              <p className="text-gray-300 leading-relaxed">
                Na MelhoresApostasDesportiva.com, salvaguardar a sua privacidade permanece a nossa preocupação
                primordial. Esta Política de Privacidade descreve as nossas práticas relativamente à recolha, utilização
                e proteção das suas informações quando visita o nosso website.
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-red-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <div className="w-1 h-8 bg-green-500 mr-4"></div>
                1. Práticas de Recolha de Informação
              </h2>
              <p className="text-gray-300 mb-4">Podemos recolher as seguintes categorias de informação:</p>
              <div className="space-y-4">
                <div className="bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-400 mb-2">Identificadores Pessoais</h3>
                  <p className="text-gray-300 text-sm">
                    Ao subscrever a nossa newsletter ou contactar a nossa equipa, podemos recolher o seu nome e endereço
                    de email.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500">
                  <h3 className="font-semibold text-red-400 mb-2">Estatísticas de Utilização</h3>
                  <p className="text-gray-300 text-sm">
                    Recolhemos automaticamente dados sobre as suas interações com o nosso website, incluindo páginas
                    visitadas, tempo gasto a visualizar conteúdo e websites de referência.
                  </p>
                </div>
                <div className="bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-400 mb-2">Cookies e Tecnologias Relacionadas</h3>
                  <p className="text-gray-300 text-sm">
                    Empregamos cookies para otimizar a sua experiência de navegação. Para detalhes adicionais, consulte
                    a nossa Política de Cookies.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-red-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <div className="w-1 h-8 bg-red-500 mr-4"></div>
                2. Utilização da Informação
              </h2>
              <p className="text-gray-300 mb-4">Utilizamos a informação recolhida para vários propósitos, incluindo:</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Operar e manter a infraestrutura do nosso website
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Melhorar a funcionalidade do website e experiência do utilizador
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Distribuir newsletters e comunicações de marketing (com o seu consentimento explícito)
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Responder às suas questões e pedidos de serviço
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Analisar padrões de utilização para refinar o nosso conteúdo e ofertas de serviço
                </li>
              </ul>
            </div>

            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <div className="w-1 h-8 bg-green-500 mr-4"></div>
                3. Práticas de Partilha de Informação
              </h2>
              <p className="text-gray-300 mb-4">
                Não vendemos, trocamos ou transferimos de outra forma as suas informações pessoais para terceiros sem o
                seu consentimento explícito, exceto nas seguintes circunstâncias:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Com fornecedores de serviços que auxiliam nas operações do nosso website
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Para cumprir obrigações legais e requisitos regulamentares
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Para proteger os nossos direitos, privacidade, segurança ou propriedade
                </li>
              </ul>
            </div>

            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-red-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <div className="w-1 h-8 bg-red-500 mr-4"></div>
                4. Medidas de Proteção de Dados
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger as suas
                informações pessoais. No entanto, nenhum método de transmissão de dados pela Internet ou sistema de
                armazenamento eletrónico pode garantir 100% de segurança, e não podemos fornecer garantia absoluta sobre
                a proteção de dados.
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <div className="w-1 h-8 bg-green-500 mr-4"></div>
                5. Os Seus Direitos de Dados
              </h2>
              <p className="text-gray-300 mb-4">
                Dependendo da sua localização geográfica, pode possuir certos direitos relativamente às suas informações
                pessoais, incluindo:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-900/20 rounded-lg p-3">
                  <p className="text-green-400 text-sm">O direito de aceder às suas informações pessoais armazenadas</p>
                </div>
                <div className="bg-green-900/20 rounded-lg p-3">
                  <p className="text-green-400 text-sm">O direito de retificar dados incorretos ou incompletos</p>
                </div>
                <div className="bg-green-900/20 rounded-lg p-3">
                  <p className="text-green-400 text-sm">O direito de solicitar a eliminação das suas informações</p>
                </div>
                <div className="bg-green-900/20 rounded-lg p-3">
                  <p className="text-green-400 text-sm">O direito de se opor ao processamento das suas informações</p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-red-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <div className="w-1 h-8 bg-red-500 mr-4"></div>
                6. Atualizações da Política de Privacidade
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Podemos atualizar periodicamente a nossa Política de Privacidade para refletir mudanças nas nossas
                práticas ou requisitos regulamentares. Notificaremos sobre quaisquer mudanças significativas publicando
                a Política de Privacidade revista nesta página e atualizando a data de "Última atualização".
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-red-600 rounded-lg p-6 text-white">
              <h2 className="text-2xl font-bold mb-4">7. Informações de Contacto</h2>
              <p className="leading-relaxed">
                Se tiver questões ou preocupações sobre esta Política de Privacidade, por favor contacte a nossa equipa
                de privacidade em <span className="font-semibold">privacidade@melhoresapostasdesportiva.com</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
