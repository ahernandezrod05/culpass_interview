"use client";

import type React from "react";
import { User } from "../types/user";
import AppButton from "./Button";

interface UserCardProps {
  user: User;
  className?: string;
}

export function UserCard({ user, className = "" }: UserCardProps) {
  return (
    <div
      className={`border border-gray-200 rounded-lg p-4 bg-white hover:shadow-sm transition-shadow ${className}`}
    >
      <AppButton navigation={`/users/${user.id}`} color="noBg">
        {user.name}
      </AppButton>
      <p className="text-gray-600 text-sm">{user.email}</p>
    </div>
  );
}
