import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Sobre Nós | Melhores Sites de Apostas Desportivas Portugal",
  description:
    "Conheça a nossa missão de fornecer informações confiáveis sobre os melhores sites de apostas desportivas em Portugal.",
}

export default function AboutUs() {
  return (
    <main className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="pt-28 pb-12 bg-white flex-grow">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Sobre MelhoresApostasDesportiva.com</h1>

          <div className="prose max-w-4xl">
            <h2>A Nossa Visão</h2>
            <p>
              Na MelhoresApostasDesportiva.com, estabelecemo-nos como o destino principal de Portugal para avaliação de
              plataformas de apostas. No mercado atual saturado, a nossa equipa especializada corta através do ruído
              para identificar experiências de apostas verdadeiramente excepcionais, especificamente adaptadas para
              apostadores portugueses.
            </p>

            <h2>O Nosso Sistema de Avaliação</h2>
            <p>
              Por trás de cada recomendação está um protocolo de avaliação abrangente desenvolvido por veteranos da
              indústria. Examinamos cada plataforma através de múltiplas dimensões: infraestrutura de segurança,
              generosidade promocional, variedade de mercados, design de interface, otimização móvel, eficiência de
              processamento de pagamentos e capacidade de resposta do atendimento ao cliente.
            </p>
            <p>
              O nosso compromisso com a integridade significa que apresentamos exclusivamente operadores com licenças de
              jogo portuguesas válidas, garantindo que cumprem padrões regulamentares rigorosos para proteção do
              jogador, práticas de jogo justas e medidas de jogo responsável.
            </p>

            <h2>Os Nossos Valores Fundamentais</h2>
            <ul>
              <li>
                <strong>Autenticidade:</strong> Fornecemos insights transparentes sobre a nossa metodologia de
                avaliação, garantindo que compreende exatamente como chegamos às nossas recomendações.
              </li>
              <li>
                <strong>Independência Editorial:</strong> As nossas avaliações permanecem livres de considerações
                comerciais, garantindo orientação genuína e focada no utilizador.
              </li>
              <li>
                <strong>Atualidade:</strong> O panorama das apostas evolui rapidamente, e as nossas análises
                também—reavaliamos continuamente as plataformas para garantir que a nossa orientação permanece atual.
              </li>
              <li>
                <strong>Bem-estar do Jogador:</strong> Defendemos práticas de jogo responsável e fornecemos recursos
                para aqueles que procuram assistência com questões relacionadas com o jogo.
              </li>
            </ul>

            <h2>A Nossa Equipa de Especialistas</h2>
            <p>
              O nosso coletivo reúne experiência diversa que abrange análise desportiva, segurança digital, design de
              experiência do utilizador e regulamentação de jogos. Unidos por uma paixão pelo panorama das apostas
              portuguesas, combinamos conhecimento técnico com experiência prática de apostas para fornecer insights que
              genuinamente melhoram as suas decisões de apostas.
            </p>

            <h2>O Nosso Modelo de Receita</h2>
            <p>
              Mantemos um compromisso de fornecer informações gratuitas e de alta qualidade aos nossos visitantes. As
              nossas operações são sustentadas através de parcerias de afiliados com operadores de apostas, que fornecem
              compensação quando os utilizadores se registam através dos nossos links de referência. Este modelo
              permite-nos entregar conteúdo premium sem taxas de subscrição ou paywalls.
            </p>
            <p>
              Crucialmente, estes acordos comerciais nunca influenciam as nossas avaliações de plataformas. A nossa
              metodologia de classificação permanece estritamente baseada no mérito, com cada recomendação refletindo
              qualidade genuína da plataforma em vez de considerações comerciais.
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}
