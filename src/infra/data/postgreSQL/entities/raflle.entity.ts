import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'raffle' })
export class RaffleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  idUser: string;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 512 })
  description: string;

  @Column({ type: 'int' })
  maximunNumberRaffles: number;

  @Column({ type: 'int', array: true })
  selectedNumbers: number[];
}
