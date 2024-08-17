import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

config({ path: ".env.local" });

export default defineConfig({
	schema: "./src/config/drizzle/schema.ts",
	out: "./src/config/drizzle/migrations",
	dialect: "postgresql",
	dbCredentials: {
		url: process.env.AUTH_DRIZZLE_URL!,
	},
	verbose: true,
	strict: true,
});
