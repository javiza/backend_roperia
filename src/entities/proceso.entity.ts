import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from 'src/auth/entities/user.entity';
import { Lavander } from "./lavander.entity";
import { White } from "./white.entity";
import { Green } from "./green.entity";
import { Unity } from "./unity.entity";


@Entity()
export class Proceso {
  [x: string]: any;

  @PrimaryGeneratedColumn()
  id: number;


  @Column('text')
  description: string;


  @Column({ type: 'timestamptz', nullable: true })
  date_in: Date;
  
  @ManyToOne(() => User, user => user.id)
  user: User;

  @ManyToOne(() => Lavander, lavander => lavander.proceso)
  lavander: Lavander;

  @ManyToMany(() => White, (white) => white.proceso)
  white: White[];

  @ManyToMany(() => Green, (green) => green.proceso)
  green: Green[];

  @ManyToOne(() => Unity, unity => unity.proceso)
  unity: Unity;


}