import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { createUser } from "@/actions/user";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await currentUser();

  if (user) {
    const email = user.emailAddresses[0]?.emailAddress || "";
    const fullName = `${user.firstName || ""} ${user.lastName || ""}`.trim();
    
    // Fallback sync: Ensure user exists in Supabase each time they access dashboard
    await createUser(user.id, email, fullName);
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Séries</h1>
      <div className="mt-8 p-8 border-2 border-dashed rounded-lg bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 flex flex-col items-center justify-center text-center">
        <h2 className="text-xl font-semibold mb-2">Aucune série créée</h2>
        <p className="text-gray-500 mb-4">Commencez par créer votre première série de vidéos.</p>
        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
          Créer une série
        </button>
      </div>
    </div>
  );
}
