"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUser } from "@/app/services/user";
import UserForm from "@/app/components/UserForm";

export function CreateUserForm() {
  const router = useRouter();

  const [isPending, setIsPending] = useState(false);
  const [message, setMessage] = useState("");

  const minAge = 18;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const age = Number(formData.get("age"));

    if (isNaN(age) || age < minAge) {
      setMessage(`Please enter a valid age (${minAge} or more).`);
      setIsPending(false);
      return;
    }

    const user = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      age,
    };

    try {
      await createUser(user);
      router.push("/");
    } catch (error: unknown) {
      console.error(error);
      setMessage("Something went wrong.");
    } finally {
      setIsPending(false);
    }
  };

  const handleCancel = () => {
    router.push("/");
  };

  return (
    <UserForm
      title="Create User"
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      isPending={isPending}
      message={message}
      mode="CREATE"
    />
  );
}
