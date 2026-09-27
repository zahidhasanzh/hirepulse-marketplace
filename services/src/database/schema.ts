import {
  pgTable,
  uuid,
  text,
  pgEnum,
  boolean,
  timestamp,
  unique,
} from "drizzle-orm/pg-core";
export const accountRole = pgEnum("account_role", ["FREELANCER", "CLIENT"]);

export const accounts = pgTable(
  "accounts",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    auth_id: text("auth_id").notNull(),
    email: text("email").notNull(),
    role: accountRole().default("CLIENT").notNull(),
    identityVerified: boolean("identityVerified").default(false),
    paymentMethodVerified: boolean("paymentMethodVerified").default(false),
    isOnboardingComplete: boolean("isOnboardingComplete").default(false),
    created_at: timestamp("created_at", { withTimezone: true }),
    updated_at: timestamp("updated_at", { withTimezone: true }),
  },
  (table) => [
    unique("accounts_auth_id_role_unique").on(table.auth_id, table.role),
  ],
);

export const client_metadata = pgTable(
  "client_metadata",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    auth_id: text("auth_id").notNull(),
    role: text("role").notNull(),
    company_name: text("company_name").notNull(),
    company_website: text("company_website").notNull(),
    company_size: text("company_size").notNull(),
    industry: text("industry").notNull(),
    company_description: text("company_description").notNull(),
    created_at: timestamp("created", { withTimezone: true }),
    updated_at: timestamp("updated_at", { withTimezone: true }),
  },
  (table) => [
    unique("client_metadata_auth_id_unique").on(table.auth_id),
  ],
);
