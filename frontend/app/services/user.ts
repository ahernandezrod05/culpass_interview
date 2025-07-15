import api from "./api";
import { User } from "../types/user"; // assuming you have a shared User type

export const getUsers = async () => {
  const response = await api.get<User[]>("/users");
  return response.data;
};

export const getUser = async (id: number) => {
  const response = await api.get<User>(`/users/${id}`);
  return response.data;
};

export const createUser = async (user: Omit<User, "id">) => {
  const response = await api.post<User>("/users", user);
  return response.data;
};

export const updateUser = async (id: number, user: Partial<User>) => {
  const response = await api.put<User>(`/users/${id}`, user);
  return response.data;
};

export const deleteUser = async (id: number) => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
};
