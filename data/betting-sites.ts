export interface BettingSite {
  reviews: number
  id: string
  name: string
  logo: string
  score: number
  bonus: string
  features: string[]
  paymentMethods: string[]
  link: string
}

export const bettingSites: BettingSite[] = [
  {
    id: "betibet",
    name: "BetiBet",
    logo: "/betibet.png",
    score: 9.8,
    bonus: "Bónus de Primeiro Depósito 100%",
    features: ["Levantamentos Rápidos", "Melhores Odds", "Interface Simples"],
    paymentMethods: ["Visa/Mastercard", "MB Way", "Transferência Bancária"],
    link: "https://qualityboost.top/2sLKjNqT",
    reviews: 5876,
  },
  {
    id: "winrolla",
    name: "Winrolla",
    logo: "/win-rolla.webp",
    score: 9.7,
    bonus: "Bónus de Primeiro Depósito 100%",
    features: ["Interface Moderna", "Suporte VIP", "Levantamentos Rápidos"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "MB Way"],
    link: "https://qualityboost.top/rJDZBWnD",
    reviews: 9234,
  },
  {
    id: "lamabet",
    name: "Lamabet",
    logo: "/lamabet.svg",
    score: 9.6,
    bonus: "Aposta Grátis 10%",
    features: ["Odds Competitivas", "Cash Out", "Bet Builder"],
    paymentMethods: ["Visa/Mastercard", "MB Way", "Transferência Bancária"],
    link: "https://qualityboost.top/2sLKjNqT",
    reviews: 7892,
  },
  {
    id: "billybets",
    name: "BillyBets",
    logo: "/billybets.webp",
    score: 9.5,
    bonus: "Bónus de Primeiro Depósito 100%",
    features: ["App Móvel", "Apostas ao Vivo", "Suporte Local"],
    paymentMethods: ["Visa/Mastercard", "MB Way", "PayPal"],
    link: "https://qualityboost.top/PYCdLSJK",
    reviews: 6543,
  },
  {
    id: "boomerang-bet",
    name: "Boomerang Bet",
    logo: "/boomerang-2.png",
    score: 9.4,
    bonus: "Bónus de Primeiro Depósito 100%",
    features: ["Streaming ao Vivo", "Estatísticas", "Cash Out"],
    paymentMethods: ["Visa/Mastercard", "MB Way", "PayPal"],
    link: "https://qualityboost.top/PYCdLSJK",
    reviews: 8743,
  },
]
