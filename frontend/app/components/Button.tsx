//! blue: "bg-blue-500 text-white hover:bg-blue-600",
//! green: "bg-green-500 text-white hover:bg-green-600",
//! yellow: "bg-yellow-500 text-white hover:bg-yellow-600",
//! red: "bg-red-500 text-white hover:bg-red-600",
//! gray: "bg-gray-300 text-gray-800 hover:bg-gray-400",

"use client";

import { useRouter } from "next/navigation";

type ButtonColor = "blue" | "green" | "yellow" | "red" | "gray" | "noBg";

interface AppButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  color?: ButtonColor;
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  navigation?: string;
}

const colorClasses: Record<ButtonColor, string> = {
  blue: "bg-blue-500 text-white hover:bg-blue-600",
  green: "bg-green-500 text-white hover:bg-green-600",
  yellow: "bg-yellow-500 text-white hover:bg-yellow-600",
  red: "bg-red-500 text-white hover:bg-red-600",
  gray: "bg-gray-300 text-gray-800 hover:bg-gray-400",
  noBg: "text-blue-500 hover:text-blue-600 font-medium text-lg underline block mb-2",
};

export default function AppButton({
  onClick,
  className = "",
  children,
  color = "blue",
  navigation = "",
  isDisabled = false,
  type = "button",
}: AppButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) onClick();
    if (navigation) router.push(navigation);
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded-md cursor-pointer ${colorClasses[color]} ${className}`}
      disabled={isDisabled}
      type={type}
    >
      {children}
    </button>
  );
}
