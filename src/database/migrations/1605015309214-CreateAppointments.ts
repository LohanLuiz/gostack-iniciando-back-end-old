import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateAppointments1605015309214 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'appointments',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'provider',
            type: 'varchar',
            isNullable: false,
          },
          {

          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {

  }

}
