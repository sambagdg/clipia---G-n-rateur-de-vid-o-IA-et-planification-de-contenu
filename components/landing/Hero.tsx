import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-black pt-[120px] pb-16 md:pt-[160px] md:pb-32">
        {/* Background Gradients */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-full -translate-x-1/2 opacity-20 blur-[100px] bg-gradient-to-b from-purple-500 to-blue-500 dark:opacity-30" />

      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900 px-3 py-1 mb-6">
          <span className="text-xs font-medium text-gray-900 dark:text-gray-100">
            ✨ Nouveau: Génération TikTok automatique
          </span>
        </div>

        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
          Générez et Programmez vos <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
             Vidéos Courtes avec l'IA
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
          La plateforme tout-en-un pour les créateurs de contenu. Créez des Shorts YouTube, Reels Instagram et TikToks viraux en quelques secondes, puis laissez notre IA les programmer pour vous.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-y-4 sm:flex-row sm:gap-x-6">
          <Link
            href="#"
            className="group flex h-12 w-full items-center justify-center rounded-lg bg-black px-8 text-sm font-semibold text-white transition-all hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 sm:w-auto"
          >
             Commencer gratuitement
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#"
            className="flex h-12 w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-8 text-sm font-semibold text-gray-900 transition-all hover:bg-gray-50 dark:border-gray-800 dark:bg-black dark:text-white dark:hover:bg-gray-900 sm:w-auto"
          >
            <Play className="mr-2 h-4 w-4" />
            Voir la démo
          </Link>
        </div>

        {/* Placeholder for App Interface/Dashboard */}
        <div className="mt-16 sm:mt-24 relative mx-auto max-w-5xl rounded-xl border border-gray-200 bg-gray-50/50 p-2 dark:border-gray-800 dark:bg-gray-900/50 shadow-2xl lg:rounded-2xl lg:p-4">
             <div className="aspect-[16/9] overflow-hidden rounded-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-800 flex items-center justify-center">
                <span className="text-gray-400 dark:text-gray-600 font-medium">Capture d'écran de l'application Clipia</span>
                {/* You can replace this with an actual Image later */}
             </div>
        </div>
      </div>
    </section>
  );
}
