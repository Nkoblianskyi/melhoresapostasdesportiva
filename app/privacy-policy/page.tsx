import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Política de Privacidade | Melhores Sites de Apostas Desportivas Portugal",
  description: "Leia a nossa política de privacidade para compreender como recolhemos e utilizamos os seus dados.",
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="pt-28 pb-12 bg-white flex-grow">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Política de Privacidade</h1>

          <div className="prose max-w-4xl">
            <p>Última atualização: Dezembro 2025</p>

            <p>
              Na MelhoresApostasDesportiva.com, salvaguardar a sua privacidade permanece a nossa preocupação primordial.
              Esta Política de Privacidade descreve as nossas práticas relativamente à recolha, utilização e proteção
              das suas informações quando visita o nosso website.
            </p>

            <h2>1. Práticas de Recolha de Informação</h2>
            <p>Podemos recolher as seguintes categorias de informação:</p>
            <ul>
              <li>
                <strong>Identificadores Pessoais:</strong> Ao subscrever a nossa newsletter ou contactar a nossa equipa,
                podemos recolher o seu nome e endereço de email.
              </li>
              <li>
                <strong>Estatísticas de Utilização:</strong> Recolhemos automaticamente dados sobre as suas interações
                com o nosso website, incluindo páginas visitadas, tempo gasto a visualizar conteúdo e websites de
                referência.
              </li>
              <li>
                <strong>Cookies e Tecnologias Relacionadas:</strong> Empregamos cookies para otimizar a sua experiência
                de navegação. Para detalhes adicionais, consulte a nossa Política de Cookies.
              </li>
            </ul>

            <h2>2. Utilização da Informação</h2>
            <p>Utilizamos a informação recolhida para vários propósitos, incluindo:</p>
            <ul>
              <li>Operar e manter a infraestrutura do nosso website</li>
              <li>Melhorar a funcionalidade do website e experiência do utilizador</li>
              <li>Distribuir newsletters e comunicações de marketing (com o seu consentimento explícito)</li>
              <li>Responder às suas questões e pedidos de serviço</li>
              <li>Analisar padrões de utilização para refinar o nosso conteúdo e ofertas de serviço</li>
            </ul>

            <h2>3. Práticas de Partilha de Informação</h2>
            <p>
              Não vendemos, trocamos ou transferimos de outra forma as suas informações pessoais para terceiros sem o
              seu consentimento explícito, exceto nas seguintes circunstâncias:
            </p>
            <ul>
              <li>Com fornecedores de serviços que auxiliam nas operações do nosso website</li>
              <li>Para cumprir obrigações legais e requisitos regulamentares</li>
              <li>Para proteger os nossos direitos, privacidade, segurança ou propriedade</li>
            </ul>

            <h2>4. Medidas de Proteção de Dados</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger as suas
              informações pessoais. No entanto, nenhum método de transmissão de dados pela Internet ou sistema de
              armazenamento eletrónico pode garantir 100% de segurança, e não podemos fornecer garantia absoluta sobre a
              proteção de dados.
            </p>

            <h2>5. Os Seus Direitos de Dados</h2>
            <p>
              Dependendo da sua localização geográfica, pode possuir certos direitos relativamente às suas informações
              pessoais, incluindo:
            </p>
            <ul>
              <li>O direito de aceder às suas informações pessoais armazenadas</li>
              <li>O direito de retificar dados incorretos ou incompletos</li>
              <li>O direito de solicitar a eliminação das suas informações</li>
              <li>O direito de se opor ao processamento das suas informações</li>
              <li>O direito à portabilidade de dados</li>
            </ul>

            <h2>6. Atualizações da Política de Privacidade</h2>
            <p>
              Podemos atualizar periodicamente a nossa Política de Privacidade para refletir mudanças nas nossas
              práticas ou requisitos regulamentares. Notificaremos sobre quaisquer mudanças significativas publicando a
              Política de Privacidade revista nesta página e atualizando a data de "Última atualização".
            </p>

            <h2>7. Informações de Contacto</h2>
            <p>
              Se tiver questões ou preocupações sobre esta Política de Privacidade, por favor contacte a nossa equipa de
              privacidade em privacidade@melhoresapostasdesportiva.com.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
