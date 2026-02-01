import { Wand2, CalendarClock, Mail, BarChart3, Share2, Layers } from "lucide-react";

const features = [
  {
    name: "Génération Vidéo IA",
    description:
      "Transformez vos idées en vidéos captivantes en quelques secondes grâce à nos modèles d'IA avancés.",
    icon: Wand2,
  },
  {
    name: "Programmation Multi-plateforme",
    description:
      "Publiez automatiquement sur YouTube Shorts, Instagram Reels et TikTok au meilleur moment pour votre audience.",
    icon: CalendarClock,
  },
  {
    name: "Intégration E-mail",
    description:
      "Envoyez vos vidéos directement dans les boîtes de réception de vos abonnés pour augmenter l'engagement.",
    icon: Mail,
  },
  {
    name: "Analyses Détaillées",
    description:
      "Suivez les performances de vos vidéos sur toutes les plateformes depuis un seul tableau de bord.",
    icon: BarChart3,
  },
  {
    name: "Redimensionnement Intelligent",
    description:
      "L'IA adapte automatiquement vos vidéos au format vertical (9:16) ou horizontal (16:9) selon la plateforme.",
    icon: Layers,
  },
  {
    name: "Viralité Optimisée",
    description:
      "Nos algorithmes analysent les tendances pour vous suggérer les contenus les plus susceptibles de devenir viraux.",
    icon: Share2,
  },
];

export function Features() {
  return (
    <section className="bg-gray-50 py-24 dark:bg-zinc-950 sm:py-32" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-purple-600">Tout ce dont vous avez besoin</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Créez plus, gérez moins.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Clipia automatise le processus fastidieux de création et de publication de contenu, vous permettant de vous concentrer sur votre créativité.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
