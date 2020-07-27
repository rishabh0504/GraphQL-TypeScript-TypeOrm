import "reflect-metadata";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createConnection, getConnectionOptions } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { RoleResolver } from "./resolvers/RoleResolver";
import { UserResolver } from "./resolvers/UserResolver";
import { AddressResolver } from "./resolvers/AddressResolver";

(async () => {
  dotenv.config()
  const app = express();
  app.use(cors());

  const options = await getConnectionOptions(
    process.env.NODE_ENV || "DEVELOPMENT"
  );

  await createConnection({ ...options, name: "default" });

  const apolloServer = new ApolloServer({
    debug: false,
    schema: await buildSchema({
      resolvers: [RoleResolver, UserResolver, AddressResolver],
      validate: true
    }),
    context: ({ req, res }) => ({ req, res })
  });

  apolloServer.applyMiddleware({ app, cors: true });
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}/graphql`);
  });
})();
