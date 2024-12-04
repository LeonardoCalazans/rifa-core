import { MigrationInterface, QueryRunner } from 'typeorm';

export class RaffleTable1733267775436 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
    await queryRunner.query(
      `CREATE TABLE raffle (
            id uuid NOT NULL DEFAULT uuid_generate_v4(),
            idUser uuid NOT NULL,
            name varchar(100) NOT NULL,
            description varchar(512) NULL,
            maximunNumberRaffles int NOT NULL,
            selectedNumbers int[] NOT NULL,
            CONSTRAINT raffle_pk PRIMARY KEY (id)
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS raffle;`);
    await queryRunner.query(`DROP EXTENSION IF EXISTS "uuid-ossp";`);
  }
}
