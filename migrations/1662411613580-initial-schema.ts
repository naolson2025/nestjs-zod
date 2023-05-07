import { MigrationInterface, QueryRunner } from 'typeorm';

export class initialSchema1662411613580 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE user (
          id INTEGER PRIMARY KEY,
          admin BOOLEAN DEFAULT false,
          email VARCHAR(255),
          password VARCHAR(255)
        );
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE user;
    `);
  }
}
