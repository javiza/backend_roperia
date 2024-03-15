import {  Column, Entity,OneToMany,PrimaryGeneratedColumn } from "typeorm";

import { Green } from "./green.entity";
import { White } from "./white.entity";

@Entity()
export class Unity {
  [x: string]: any;
 
  @PrimaryGeneratedColumn()
  unity_id: number;

  // @ManyToOne(() => Usr, user => user.favorite)
  // favorite: Usr;

  @OneToMany(() => Green, (green) => green.unity)
  green: Green[];

  @OneToMany(() => White, (white) => white.unity)
  white: White[];

  @Column({ type: 'timestamptz', nullable: true })
  date_agregate: Date;

}