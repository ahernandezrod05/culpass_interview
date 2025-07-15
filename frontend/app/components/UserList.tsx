import { User } from "../types/user";
import { UserCard } from "./UserCard";
interface UserGridProps {
  users: User[];
  className?: string;
}

export default function UserList({ users, className = "" }: UserGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
