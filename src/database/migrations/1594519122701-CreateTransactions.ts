import {
  MigrationInterface,
  QueryRunner,
  Table,
  // TableForeignKey,
} from 'typeorm';

export default class CreateTransactions1594486167694
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'transactions',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'type',
            type: 'varchar', // 'income' | 'outcome';
          },
          {
            name: 'value',
            type: 'decimal',
            precision: 10, // 10000000000
            scale: 2, // 100000.00
          },
          // {
          //   name: 'category_id',
          //   type: 'uuid',
          // },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    // await queryRunner.createForeignKey(
    //   'transactions',
    //   new TableForeignKey({
    //     name: 'TransactionCategory',
    //     columnNames: ['category_id'],
    //     referencedColumnNames: ['id'],
    //     referencedTableName: 'categories',
    //     onDelete: 'CASCADE',
    //     onUpdate: 'CASCADE',
    //   }),
    // );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('transactions');
  }
}
