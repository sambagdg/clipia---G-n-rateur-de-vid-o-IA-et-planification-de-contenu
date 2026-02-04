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
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Tableau de bord</h1>
      <p>Bienvenue, {user?.firstName} !</p>
      <div className="mt-8 p-4 border rounded-lg bg-gray-50 dark:bg-gray-900">
        <p>Ceci est votre espace personnel.</p>
      </div>
    </div>
  );
}
