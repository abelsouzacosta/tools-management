import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTools1642585592259 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "tools",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "title",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "link",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "tags",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("tools");
  }
}
