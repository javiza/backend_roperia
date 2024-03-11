import { Entity,PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, OneToMany } from 'typeorm';
import { White } from './white.entity';
import { Green } from './green.entity';
import { User } from './user.entity';


@Entity()
export class Trash {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id: number
  
  @OneToMany(() => User, user => user.user_id)
  user: User;

  @OneToOne(() => Green)
  @JoinColumn({ name: 'message' })
  green: Green;

  @OneToOne(() => White)
  @JoinColumn({ name: 'message' })
  white: White;
  //aca puede generar conflicto por ser el basurero de dos tablas 

}