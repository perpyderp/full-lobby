import type { Config } from "drizzle-kit";

import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

export default {
	schema: "./src/drizzle/schema.ts",
	out: "./src/drizzle/migrations",
	driver: "pg",
	dbCredentials: {
		connectionString: process.env.AUTH_DRIZZLE_URL!,
	},
	verbose: true,
	strict: true,
} satisfies Config;
