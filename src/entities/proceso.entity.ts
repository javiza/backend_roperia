
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm';

import { Lavander } from './lavander.entity';


@Entity()
export class Proceso {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamptz', nullable: true })
  date_clothin: Date;

  @Column({ type: 'timestamptz', nullable: true })
  date_clothout: Date;

   @Column({ type: 'timestamptz', nullable: true })
  date_in: Date;
  

  // @ManyToOne(() => Usr, user => user.view)
  // user: Usr;

  @OneToMany(() => Lavander, (lavander) => lavander.user)
    lavander: Lavander[];
    
  // @Column({ type: 'timestamptz', nullable: true })
  // date_view: Date;
}
