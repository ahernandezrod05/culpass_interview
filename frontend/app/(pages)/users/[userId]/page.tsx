import { getUser } from "@/app/services/user";
import { UserDetails } from "./client/UserDetails";
import { redirect } from "next/navigation";

interface Params {
  userId: number;
}

export default async function Page({ params }: { params: Params }) {
  try {
    const { userId } = await params;

    const user = await getUser(userId);
    return <UserDetails user={user} />;
  } catch (error: unknown) {
    console.error(error);
    redirect("/");
  }
}
