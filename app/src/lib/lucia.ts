import lucia from "lucia-sveltekit";
import prisma from "@lucia-sveltekit/adapter-prisma";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
dotenv.config();

const client = new PrismaClient();
export const auth = lucia({
    adapter: prisma(client),
    secret: process.env.SECRET || "secret",
    env: "DEV" // change to PROD when deploying
});