import { Check } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    id: "tier-starter",
    href: "#",
    priceMonthly: "0 €",
    description: "Parfait pour découvrir Clipia et créer vos premières vidéos.",
    features: [
      "5 vidéos générées par mois",
      "Programmation manuelle",
      "Export 720p",
      "Support par email",
    ],
    featured: false,
  },
  {
    name: "Pro",
    id: "tier-pro",
    href: "#",
    priceMonthly: "29 €",
    description: "Pour les créateurs qui veulent passer à la vitesse supérieure.",
    features: [
      "50 vidéos générées par mois",
      "Programmation automatique illimitée",
      "Export 1080p & 4K",
      "Analyses avancées",
      "Sans filigrane",
      "Support prioritaire",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "Sur devis",
    description: "Solutions sur mesure pour les agences et grandes équipes.",
    features: [
      "Vidéos illimitées",
      "API d'accès",
      "Gestionnaire de compte dédié",
      "Formation personnalisée",
      "Contrats SLA",
      "Intégrations CRM",
    ],
    featured: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function Pricing() {
  return (
    <section className="bg-white py-24 dark:bg-black sm:py-32" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Nos tarifs simples</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Choisissez le plan qui correspond le mieux à vos besoins de création de contenu. Annulez à tout moment.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 dark:ring-gray-800 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured
                  ? "z-10 bg-white shadow-xl ring-1 ring-gray-900/10 dark:bg-zinc-900 dark:ring-gray-700"
                  : "bg-gray-50 ring-1 ring-gray-200 dark:bg-black dark:ring-gray-800",
                tierIdx === 0 ? "lg:rounded-r-none" : "",
                tierIdx === tiers.length - 1 ? "lg:rounded-l-none" : "",
                "flex flex-col justify-between rounded-3xl p-8 xl:p-10 lg:w-1/3"
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.featured ? "text-purple-600" : "text-gray-900 dark:text-white",
                      "text-lg font-semibold leading-8"
                    )}
                  >
                    {tier.name}
                  </h3>
                  {tier.featured ? (
                    <p className="rounded-full bg-purple-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-purple-600">
                      Populaire
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{tier.priceMonthly}</span>
                  {tier.name !== "Enterprise" && (
                     <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">/mois</span>
                  )}
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-purple-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? "bg-purple-600 text-white shadow-sm hover:bg-purple-500"
                    : "text-purple-600 ring-1 ring-inset ring-purple-200 hover:ring-purple-300 dark:ring-purple-800 dark:hover:ring-purple-700",
                  "mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                )}
              >
                Choisir ce plan
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
