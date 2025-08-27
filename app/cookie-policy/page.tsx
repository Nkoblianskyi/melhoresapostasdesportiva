import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Política de Cookies | Melhores Sites de Apostas Desportivas Portugal",
  description: "Saiba como utilizamos cookies no nosso website.",
}

export default function CookiePolicy() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-900">

      <section className="pt-28 pb-12 flex-grow">
        <div className="container mx-auto px-4 max-w-[1150px]">
          <div className="bg-gradient-to-r from-green-600 to-red-600 rounded-lg p-8 mb-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Cookies</h1>
            <p className="text-xl opacity-90">Como utilizamos cookies no nosso website</p>
            <p className="text-sm opacity-75 mt-2">Última atualização: Dezembro 2025</p>
          </div>

          <div className="space-y-6">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-green-500/20">
              <p className="text-gray-300 leading-relaxed">
                Esta Política de Cookies explica como MelhoresApostasDesportiva.com utiliza cookies e tecnologias
                similares para o reconhecer durante as visitas ao website. Esclarece o que são estas tecnologias, porque
                as utilizamos, e descreve os seus direitos para controlar a sua implementação.
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-red-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <div className="w-1 h-8 bg-red-500 mr-4"></div>
                1. Compreender os Cookies
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Os cookies são pequenos ficheiros de dados colocados no seu computador ou dispositivo móvel quando
                visita um website. Os proprietários de websites implementam amplamente cookies para permitir a
                funcionalidade do site, melhorar a eficiência operacional e gerar análises de utilização.
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <div className="w-1 h-8 bg-green-500 mr-4"></div>
                2. Categorias de Cookies que Utilizamos
              </h2>
              <p className="text-gray-300 mb-6">Utilizamos os seguintes tipos de cookies:</p>

              <div className="space-y-4">
                <div className="bg-green-900/20 rounded-lg p-6 border border-green-500/30">
                  <h3 className="text-xl font-semibold text-green-400 mb-3">Cookies Essenciais</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Estes cookies são fundamentais para a funcionalidade do website e não podem ser desativados nos
                    nossos sistemas. Normalmente ativam-se em resposta às suas ações, como definições de preferências de
                    privacidade, tentativas de login ou preenchimento de formulários.
                  </p>
                </div>

                <div className="bg-red-900/20 rounded-lg p-6 border border-red-500/30">
                  <h3 className="text-xl font-semibold text-red-400 mb-3">Cookies Analíticos</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Estes cookies permitem-nos rastrear estatísticas de visitantes e fontes de tráfego, permitindo-nos
                    medir e melhorar o desempenho do nosso site. Ajudam-nos a identificar quais páginas atraem mais
                    interesse e monitorizar como os visitantes navegam pelo site.
                  </p>
                </div>

                <div className="bg-green-900/20 rounded-lg p-6 border border-green-500/30">
                  <h3 className="text-xl font-semibold text-green-400 mb-3">Cookies de Marketing</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Os nossos parceiros publicitários podem implementar estes cookies através do nosso site. Estas
                    empresas podem usar os dados para construir um perfil dos seus interesses e exibir anúncios
                    relevantes noutros websites que visita.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-red-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <div className="w-1 h-8 bg-red-500 mr-4"></div>
                3. Opções de Gestão de Cookies
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Pode configurar ou ajustar os controlos do seu navegador web para aceitar ou recusar cookies. Se
                escolher rejeitar cookies, ainda pode aceder ao nosso website, embora certas funcionalidades e áreas
                possam ter acessibilidade limitada.
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <div className="w-1 h-8 bg-green-500 mr-4"></div>
                4. Definições de Preferências de Cookies
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Pode gerir as suas preferências de cookies através do nosso banner de consentimento que aparece durante
                a sua primeira visita ao site. Também pode atualizar as suas preferências a qualquer momento
                selecionando o link "Preferências de Cookies" localizado no rodapé do nosso website.
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-red-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <div className="w-1 h-8 bg-red-500 mr-4"></div>
                5. Utilização de Cookies de Terceiros
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Além dos nossos próprios cookies, podemos empregar vários cookies de terceiros para compilar
                estatísticas de utilização do website e entregar anúncios direcionados tanto no nosso website como
                através dele.
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <div className="w-1 h-8 bg-green-500 mr-4"></div>
                6. Atualizações da Política de Cookies
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Podemos atualizar periodicamente esta Política de Cookies para refletir mudanças nas nossas práticas de
                cookies ou por razões operacionais, legais ou regulamentares. Encorajamos-o a rever esta Política de
                Cookies regularmente para obter as informações mais atuais sobre as nossas práticas de cookies.
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-green-600 rounded-lg p-6 text-white">
              <h2 className="text-2xl font-bold mb-4">7. Informações de Contacto</h2>
              <p className="leading-relaxed">
                Se tiver questões sobre as nossas práticas de cookies ou outras tecnologias que empregamos, por favor
                contacte a nossa equipa em <span className="font-semibold">cookies@melhoresapostasdesportiva.com</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
