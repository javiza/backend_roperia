import {  Column, Entity,OneToMany,PrimaryGeneratedColumn } from "typeorm";

import { Green } from "./green.entity";
import { White } from "./white.entity";
import { User } from "src/auth/entities/user.entity";
import { Proceso } from "./proceso.entity";

@Entity()
export class Unity {
  [x: string]: any;
 
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 50 })
  name: string;

  @Column("varchar", { length: 50 })
  jefe_encargada: string;

  @OneToMany(() => User, (user) => user.unity)
  user: User[];

  @OneToMany(() => Green, (green) => green.unity)
  green: Green[];

  @OneToMany(() => White, (white) => white.unity)
  white: White[];

  @OneToMany(() => Proceso, (proceso) => proceso.unity)
  proceso: Proceso[];


}