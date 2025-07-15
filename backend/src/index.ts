import Fastify from "fastify";
import cors from "@fastify/cors";
import userRoutes from "./routes/users";

const app = Fastify();

app.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
});

app.register(userRoutes, { prefix: "/users" });

const start = async () => {
  try {
    await app.listen({ port: 3001 });
    console.log("Server running at http://localhost:3001");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
