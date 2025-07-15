"use client";

interface FormInputProps {
  label: string;
  id: string;
  name: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  defaultValue?: string | number;
}

export default function FormInput({
  label,
  id,
  name,
  type = "text",
  required = false,
  disabled = false,
  defaultValue,
}: FormInputProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        disabled={disabled}
        defaultValue={defaultValue}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
}
