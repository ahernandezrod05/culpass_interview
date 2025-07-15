import { redirect } from "next/navigation";
import { getUser } from "@/app/services/user";
import { EditUserForm } from "../client/EditUserForm";

interface Params {
  userId: number;
}

export default async function Page({ params }: { params: Params }) {
  try {
    const { userId } = params;

    const user = await getUser(userId);
    return <EditUserForm user={user} userId={userId} />;
  } catch (error: unknown) {
    console.error(error);
    redirect("/");
  }
}
