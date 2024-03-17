import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Trash } from 'src/entities/trash.entity';
import { User } from 'src/auth/entities/user.entity';


@Entity()
export class White {
  [x: string]: any;

  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 50 })
  name: string;


  @Column('text')
  description: string;


  @Column({ type: 'timestamptz', nullable: true })
  date_in: Date;
  
  @OneToMany(() => User, user => user.id)
  user: User;

  @OneToOne(() => Trash)
  @JoinColumn({ name: 'trash' })
  trash: Trash;

}