import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function createUser(id: string, email: string, fullName: string) {
  try {
    const { data: existingUser } = await supabase
      .from("users")
      .select("user_id")
      .eq("user_id", id)
      .single();

    if (existingUser) {
      const { error } = await supabase
        .from("users")
        .update({
          email,
          nom: fullName,
        })
        .eq("user_id", id);

      if (error) {
        console.error("Error updating user in Supabase:", error);
        throw error;
      }
      return;
    }

    const { error } = await supabase.from("users").insert({
      user_id: id,
      email,
      nom: fullName,
    });

    if (error) {
      console.error("Error creating user in Supabase:", error);
      throw error;
    }
  } catch (error) {
    console.error("Error in createUser action:", error);
    throw error;
  }
}

export async function deleteUser(id: string) {
  try {
    const { error } = await supabase.from("users").delete().eq("user_id", id);

    if (error) {
      console.error("Error deleting user from Supabase:", error);
      throw error;
    }
  } catch (error) {
    console.error("Error in deleteUser action:", error);
    throw error;
  }
}


