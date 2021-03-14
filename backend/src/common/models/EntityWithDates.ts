import { BaseEntity, Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export default class EntityWithDates extends BaseEntity {

  @PrimaryGeneratedColumn()
  public id: number;

  @CreateDateColumn()
  public created_date: Date;

  @Column({ type: 'date' })
  @UpdateDateColumn({ type: 'timestamp' })
  public public_date: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updated_date: Date;
}
