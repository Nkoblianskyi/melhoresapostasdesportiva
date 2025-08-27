import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Política de Cookies | Melhores Sites de Apostas Desportivas Portugal",
  description: "Saiba como utilizamos cookies no nosso website.",
}

export default function CookiePolicy() {
  return (
    <main className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="pt-28 pb-12 bg-white flex-grow">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Política de Cookies</h1>

          <div className="prose max-w-4xl">
            <p>Última atualização: Dezembro 2025</p>

            <p>
              Esta Política de Cookies explica como MelhoresApostasDesportiva.com utiliza cookies e tecnologias
              similares para o reconhecer durante as visitas ao website. Esclarece o que são estas tecnologias, porque
              as utilizamos, e descreve os seus direitos para controlar a sua implementação.
            </p>

            <h2>1. Compreender os Cookies</h2>
            <p>
              Os cookies são pequenos ficheiros de dados colocados no seu computador ou dispositivo móvel quando visita
              um website. Os proprietários de websites implementam amplamente cookies para permitir a funcionalidade do
              site, melhorar a eficiência operacional e gerar análises de utilização.
            </p>

            <h2>2. Categorias de Cookies que Utilizamos</h2>
            <p>Utilizamos os seguintes tipos de cookies:</p>
            <ul>
              <li>
                <strong>Cookies Essenciais:</strong> Estes cookies são fundamentais para a funcionalidade do website e
                não podem ser desativados nos nossos sistemas. Normalmente ativam-se em resposta às suas ações, como
                definições de preferências de privacidade, tentativas de login ou preenchimento de formulários.
              </li>
              <li>
                <strong>Cookies Analíticos:</strong> Estes cookies permitem-nos rastrear estatísticas de visitantes e
                fontes de tráfego, permitindo-nos medir e melhorar o desempenho do nosso site. Ajudam-nos a identificar
                quais páginas atraem mais interesse e monitorizar como os visitantes navegam pelo site.
              </li>
              <li>
                <strong>Cookies de Marketing:</strong> Os nossos parceiros publicitários podem implementar estes cookies
                através do nosso site. Estas empresas podem usar os dados para construir um perfil dos seus interesses e
                exibir anúncios relevantes noutros websites que visita.
              </li>
            </ul>

            <h2>3. Opções de Gestão de Cookies</h2>
            <p>
              Pode configurar ou ajustar os controlos do seu navegador web para aceitar ou recusar cookies. Se escolher
              rejeitar cookies, ainda pode aceder ao nosso website, embora certas funcionalidades e áreas possam ter
              acessibilidade limitada.
            </p>

            <h2>4. Definições de Preferências de Cookies</h2>
            <p>
              Pode gerir as suas preferências de cookies através do nosso banner de consentimento que aparece durante a
              sua primeira visita ao site. Também pode atualizar as suas preferências a qualquer momento selecionando o
              link "Preferências de Cookies" localizado no rodapé do nosso website.
            </p>

            <h2>5. Utilização de Cookies de Terceiros</h2>
            <p>
              Além dos nossos próprios cookies, podemos empregar vários cookies de terceiros para compilar estatísticas
              de utilização do website e entregar anúncios direcionados tanto no nosso website como através dele.
            </p>

            <h2>6. Atualizações da Política de Cookies</h2>
            <p>
              Podemos atualizar periodicamente esta Política de Cookies para refletir mudanças nas nossas práticas de
              cookies ou por razões operacionais, legais ou regulamentares. Encorajamos-o a rever esta Política de
              Cookies regularmente para obter as informações mais atuais sobre as nossas práticas de cookies.
            </p>

            <h2>7. Informações de Contacto</h2>
            <p>
              Se tiver questões sobre as nossas práticas de cookies ou outras tecnologias que empregamos, por favor
              contacte a nossa equipa em cookies@melhoresapostasdesportiva.com.
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}
