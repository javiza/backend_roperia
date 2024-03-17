import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from 'src/auth/entities/user.entity';


@Entity()
export class Proceso {
  [x: string]: any;

  @PrimaryGeneratedColumn()
  id: number;


  @Column('text')
  description: string;


  @Column({ type: 'timestamptz', nullable: true })
  date_in: Date;
  
  @OneToMany(() => User, user => user.id)
  user: User;

  

}