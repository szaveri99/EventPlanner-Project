import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1742896167183 implements MigrationInterface {
    name = ' $npmConfigName1742896167183'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "place_detail" ("placeId" SERIAL NOT NULL, "title" character varying(100) NOT NULL, "rating" double precision, "designation" character varying(50) NOT NULL, "address" character varying(500) NOT NULL, "phone" character varying(20) NOT NULL, "website" character varying(150), "review_counts" integer, "reviews" character varying(300), "workHours" jsonb, "serviceTypes" text array, "location" character varying(50) NOT NULL, "place_image_url" character varying(150) NOT NULL, "vendorVendorId" integer, CONSTRAINT "PK_b0b0c896d13f468a8f8669e66ab" PRIMARY KEY ("placeId"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_23c05c292c439d77b0de816b500" UNIQUE ("name"), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vendor" ("vendorId" SERIAL NOT NULL, "firstName" character varying(20) NOT NULL, "lastName" character varying(20), "companyName" character varying(100) NOT NULL, "email" character varying(30) NOT NULL, "password" character varying(20) NOT NULL, "phoneNumber" character varying(15) NOT NULL, "altPhoneNumber" character varying(15), "website" character varying, "socialMediaLinks" character varying, "gstNumber" character varying, "city" character varying(30) NOT NULL, "state" character varying(30) NOT NULL, "country" character varying(30) NOT NULL, "postalCode" character varying(15) NOT NULL, "completeAddress" character varying NOT NULL, "yearBusinessStarted" integer NOT NULL, "operationalLocations" character varying, "categorySpecificData" jsonb, "portfolio" jsonb, "availabilityForDestinationEvents" boolean NOT NULL DEFAULT false, "bookingNoticePeriod" integer, "serviceRegions" character varying NOT NULL DEFAULT 'Local', "userUserId" integer, CONSTRAINT "PK_1440d0a09f3a270feeff706c01e" PRIMARY KEY ("vendorId"))`);
        await queryRunner.query(`CREATE TABLE "review" ("reviewId" SERIAL NOT NULL, "title" character varying(100) NOT NULL, "reviewer_name" character varying(100), "rating" double precision, "reviews" character varying(300), "location" character varying(50) NOT NULL, "datePosted" TIMESTAMP NOT NULL DEFAULT now(), "reviewer_image_url" character varying(150) NOT NULL, "status" character varying(10) NOT NULL, "userUserId" integer, CONSTRAINT "PK_6e1c269c269c0b470631bfde65c" PRIMARY KEY ("reviewId"))`);
        await queryRunner.query(`CREATE TABLE "user" ("userId" SERIAL NOT NULL, "firstName" character varying(20) NOT NULL, "lastName" character varying(20), "email" character varying(30) NOT NULL, "password" character varying(10) NOT NULL, CONSTRAINT "PK_d72ea127f30e21753c9e229891e" PRIMARY KEY ("userId"))`);
        await queryRunner.query(`CREATE TABLE "vendor_categories_category" ("vendorVendorId" integer NOT NULL, "categoryId" integer NOT NULL, CONSTRAINT "PK_2c706387804e09ff211bdf05a9e" PRIMARY KEY ("vendorVendorId", "categoryId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_fd41bfab58c6d6a572518d9a98" ON "vendor_categories_category" ("vendorVendorId") `);
        await queryRunner.query(`CREATE INDEX "IDX_20262303d1a4a0302dccf07bd6" ON "vendor_categories_category" ("categoryId") `);
        await queryRunner.query(`ALTER TABLE "place_detail" ADD CONSTRAINT "FK_d9063ab14a22b18504426058b03" FOREIGN KEY ("vendorVendorId") REFERENCES "vendor"("vendorId") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD CONSTRAINT "FK_775722d481b2ecf88893199ab6f" FOREIGN KEY ("userUserId") REFERENCES "user"("userId") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "review" ADD CONSTRAINT "FK_5562843746d891af491ad6b30a1" FOREIGN KEY ("userUserId") REFERENCES "user"("userId") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vendor_categories_category" ADD CONSTRAINT "FK_fd41bfab58c6d6a572518d9a98a" FOREIGN KEY ("vendorVendorId") REFERENCES "vendor"("vendorId") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "vendor_categories_category" ADD CONSTRAINT "FK_20262303d1a4a0302dccf07bd68" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendor_categories_category" DROP CONSTRAINT "FK_20262303d1a4a0302dccf07bd68"`);
        await queryRunner.query(`ALTER TABLE "vendor_categories_category" DROP CONSTRAINT "FK_fd41bfab58c6d6a572518d9a98a"`);
        await queryRunner.query(`ALTER TABLE "review" DROP CONSTRAINT "FK_5562843746d891af491ad6b30a1"`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP CONSTRAINT "FK_775722d481b2ecf88893199ab6f"`);
        await queryRunner.query(`ALTER TABLE "place_detail" DROP CONSTRAINT "FK_d9063ab14a22b18504426058b03"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_20262303d1a4a0302dccf07bd6"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fd41bfab58c6d6a572518d9a98"`);
        await queryRunner.query(`DROP TABLE "vendor_categories_category"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "review"`);
        await queryRunner.query(`DROP TABLE "vendor"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "place_detail"`);
    }

}
