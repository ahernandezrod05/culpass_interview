import { FastifyInstance } from "fastify";
import users, { User } from "../models/user";

export default async function (fastify: FastifyInstance) {
  // GET /users - Get all users
  fastify.get("/", async (request, reply) => {
    return users;
  });

  // GET /users/:id - Get user by ID
  fastify.get<{ Params: { id: string } }>("/:id", async (request, reply) => {
    const id = Number(request.params.id);

    if (isNaN(id)) return reply.code(400).send({ error: "Invalid user ID" });

    const user = users.find((u) => u.id === id);
    if (!user) return reply.code(404).send({ error: "User not found" });

    return user;
  });

  // POST /users - Create new user
  fastify.post<{ Body: User }>("/", async (request, reply) => {
    const { name, email, age } = request.body;

    const user: User = {
      id: users.reduce((max, u) => Math.max(max, u.id), 0) + 1,
      name,
      email,
      age,
    };

    users.push(user);
    return reply.code(201).send(user);
  });

  // PUT /users/:id - Update user
  fastify.put<{ Params: { id: string }; Body: Partial<User> }>(
    "/:id",
    async (request, reply) => {
      const id = Number(request.params.id);
      if (!Number.isInteger(id)) {
        return reply.code(400).send({ error: "Invalid user ID" });
      }

      const user = users.find((u) => u.id === id);
      if (!user) {
        return reply.code(404).send({ error: "User not found" });
      }

      Object.assign(user, request.body);

      return user;
    }
  );

  // DELETE /users/:id - Delete user
  fastify.delete<{ Params: { id: string } }>("/:id", async (request, reply) => {
    const id = Number(request.params.id);
    if (isNaN(id)) return reply.code(400).send({ error: "Invalid user ID" });

    const index = users.findIndex((u) => u.id === id);
    if (index === -1) return reply.code(404).send({ error: "User not found" });

    users.splice(index, 1);
    return reply.code(204).send();
  });
}
