"use client";

import AppButton from "@/app/components/Button";
import FormInput from "@/app/components/FormInput";

interface UserFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onCancel?: () => void;
  isPending: boolean;
  message?: string;
  defaultValues?: {
    name?: string;
    email?: string;
    age?: number;
  };
  title?: string;
  mode: "CREATE" | "UPDATE";
}

export default function UserForm({
  onSubmit,
  onCancel,
  isPending,
  message,
  defaultValues = {},
  title,
  mode,
}: UserFormProps) {
  return (
    <div className="max-w-md mx-auto p-6 bg-white">
      <h2 className="text-xl font-semibold mb-6 text-gray-900">{title}</h2>

      <form onSubmit={onSubmit} className="space-y-4">
        <FormInput
          label="Name"
          id="name"
          name="name"
          defaultValue={defaultValues.name}
          required
          disabled={isPending}
        />

        <FormInput
          label="Email"
          id="email"
          name="email"
          type="email"
          defaultValue={defaultValues.email}
          required
          disabled={isPending}
        />

        <FormInput
          label="Age"
          id="age"
          name="age"
          defaultValue={defaultValues.age ?? ""}
          required
          disabled={isPending}
        />

        {message && <div className={"text-sm text-red-600"}>{message}</div>}

        <div className="flex gap-3 pt-4">
          <AppButton type="submit" isDisabled={isPending} color="green">
            {mode === "CREATE" ? "Create" : "Save"}
          </AppButton>

          <AppButton
            type="button"
            onClick={onCancel}
            isDisabled={isPending}
            color="gray"
          >
            Cancel
          </AppButton>
        </div>
      </form>
    </div>
  );
}
