"use client";

import Container from "@/components/Container";
import UserCard from "@/components/UserCard";
import Link from "next/link";
import { useSelector } from "react-redux";

const UsersPage = () => {
  const users = useSelector((store: any) => store.users);
  return (
    <Container title="users" add>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((user: UserI) => (
          <Link key={user.id} href={`/users/${user.id}`}>
            <UserCard user={user} />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default UsersPage;
