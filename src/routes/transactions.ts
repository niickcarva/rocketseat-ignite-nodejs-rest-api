import { FastifyInstance } from "fastify";
import { knex } from "../database";

export async function transactionsRoutes(app: FastifyInstance) {
  app.get("/heart", async () => {
    const transactions = await knex("transactions").select("*");
    return transactions;
  });
}
