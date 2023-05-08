CREATE TABLE IF NOT EXISTS "people" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar(256) NOT NULL,
	"last_name" varchar(256) NOT NULL,
	"phone" varchar(20) NOT NULL,
	"email" varchar(256) NOT NULL,
	"address" varchar(256) NOT NULL,
	"postalCode" integer NOT NULL,
	"birth_date" timestamp NOT NULL,
	"joining_date" timestamp NOT NULL,
	"city_of_birth" varchar(256) NOT NULL,
	"place_of_birth" varchar(256) NOT NULL,
	"nid" varchar(256) NOT NULL,
	"iban" varchar(256) NOT NULL,
	"company_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);

DO $$ BEGIN
 ALTER TABLE "people" ADD CONSTRAINT "people_company_id_companies_id_fk" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
