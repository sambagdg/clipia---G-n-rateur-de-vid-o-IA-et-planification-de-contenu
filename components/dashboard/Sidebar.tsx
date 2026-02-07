"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  Video,
  BookOpen,
  CreditCard,
  Settings,
  Plus,
  Zap
} from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

const routes = [
  {
    label: "Séries",
    icon: LayoutGrid,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Vidéos",
    icon: Video,
    href: "/dashboard/videos",
    color: "text-violet-500",
  },
  {
    label: "Guides",
    icon: BookOpen,
    href: "/dashboard/guides",
    color: "text-pink-700",
  },
  {
    label: "Facturation",
    icon: CreditCard,
    href: "/dashboard/billing",
    color: "text-orange-700",
  },
  {
    label: "Paramètres",
    icon: Settings,
    href: "/dashboard/settings",
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const { user } = useUser();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image
              fill
              alt="Logo"
              src="/logo.png"
            />
          </div>
          <h1 className="text-2xl font-bold">
            Clipia
          </h1>
        </Link>
        <div className="px-3 mb-8">
          <button className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-3 transition">
            <Plus className="w-5 h-5 mr-2" />
            Créer une nouvelle série
          </button>
        </div>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer Area */}
      <div className="px-3 py-2">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-x-2 text-white mb-2">
            <Zap className="h-4 w-4 fill-white" />
            <p className="text-sm font-bold">Pro Plan</p>
          </div>
          <p className="text-xs text-white/90 mb-3">
            Débloquez toutes les fonctionnalités.
          </p>
          <button className="w-full bg-white text-black text-xs font-bold py-2 rounded-lg hover:bg-gray-100 transition">
            Mettre à niveau
          </button>
        </div>

        <div className="flex items-center w-full p-3 rounded-lg hover:bg-white/10 transition gap-x-3 cursor-pointer">
          <UserButton afterSignOutUrl="/" />
          <div className="flex flex-col overflow-hidden">
            <p className="text-sm font-medium text-white truncate">
              {user?.fullName || "Utilisateur"}
            </p>
            <p className="text-xs text-zinc-400 truncate">
              {user?.primaryEmailAddress?.emailAddress}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
