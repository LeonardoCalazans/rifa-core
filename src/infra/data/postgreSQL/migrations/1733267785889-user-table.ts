import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserTable1733267785889 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `CREATE TABLE "user" (
            id uuid NOT NULL DEFAULT uuid_generate_v4(),
            username varchar(100) NOT NULL,
            password varchar(50) NOT NULL,
            document varchar(14) NOT NULL,
            email varchar(100) NOT NULL,
            CONSTRAINT user_pk_id PRIMARY KEY (id),
            CONSTRAINT user_un_document UNIQUE (document)
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS user;`);
  }
}
