import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne
  } from 'typeorm';
  import { Proceso } from './proceso.entity';
  
  
  @Entity()
  export class Lavander {
    [x: string]: any;
  
    @PrimaryGeneratedColumn()
    lavander_id: number;
  
    @Column('varchar', { length: 50 })
    name: string;
  
    @Column('varchar', { length: 100 })
    direction: string;
  
  
    @Column({ type: 'timestamptz', nullable: true })
    date_in: Date;
  
  
    @ManyToOne(() => Proceso, (proceso) => proceso.lavander)
    proceso: Proceso[];
  
    
  
  }
  
  
  