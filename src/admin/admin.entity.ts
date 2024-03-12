import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column('varchar', { length: 50 })
  name: string;

  @Column('varchar', { length: 50 })
  rut: string;

  @Column('varchar', { length: 100 })
  mail: string;

  @Column('varchar', { length: 50 })
  cargo: string;

  @Column('varchar', { length: 25 })
  unity: string;

  @Column('varchar', { length: 10 })
  password: string;
  
  @Column('varchar', { length: 300})
  photo: string;
}