import { Entity,PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, OneToMany } from 'typeorm';
import { White } from 'src/entities/white.entity';
import { Green } from 'src/entities/green.entity';
import { User } from 'src/auth/entities/user.entity';


@Entity()
export class Trash {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id: number
  
  @ManyToOne(() => User, user => user.id)
  user: User;

  @OneToOne(() => Green)
  @JoinColumn({ name: 'message' })
  green: Green;

  @OneToOne(() => White)
  @JoinColumn({ name: 'message' })
  white: White;
  //aca puede generar conflicto por ser el basurero de dos tablas 

}