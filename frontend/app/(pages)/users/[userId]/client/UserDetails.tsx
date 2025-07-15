"use client";

import { User } from "@/app/types/user";
import AppButton from "@/app/components/Button";
import { deleteUser } from "@/app/services/user";
import { useRouter } from "next/navigation";

interface UserProfileProps {
  user: User;
}
export function UserDetails({ user }: UserProfileProps) {
  const router = useRouter();

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this user?")) {
      await deleteUser(user.id);
      router.push("/");
    }
  };

  const handleBack = async () => {
    router.back();
  };

  const handleEdit = async () => {
    router.push(`/users/edit/${user.id}`);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white">
      <h2 className="text-xl font-semibold mb-6 text-gray-900">User</h2>

      <div className="border border-gray-200 rounded-lg p-4 mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Name</h3>
        <p className="text-gray-600 mb-3">{user.email}</p>
        <p className="text-gray-600">Age: {user.age}</p>
      </div>

      <div className="flex gap-3">
        <AppButton onClick={handleEdit} color="yellow">
          Edit
        </AppButton>
        <AppButton onClick={handleDelete} color="red">
          Delete
        </AppButton>
        <AppButton onClick={handleBack} color="gray">
          Back
        </AppButton>
      </div>
    </div>
  );
}
