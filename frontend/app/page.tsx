export const dynamic = "force-dynamic";

import AppButton from "./components/Button";
import UserList from "./components/UserList";
import { getUsers } from "./services/user";

export default async function IndexPage() {
  const users = await getUsers();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Culpass Users</h1>
        <AppButton color="blue" navigation="/users/create">
          New User
        </AppButton>
      </div>

      <UserList users={users} />
    </div>
  );
}
