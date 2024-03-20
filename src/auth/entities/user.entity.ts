import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { White } from "src/entities/white.entity";
import {Green } from "src/entities/green.entity";
import { Proceso } from "src/entities/proceso.entity";
import { Lavander } from "src/entities/lavander.entity";
import { Trash } from "src/entities/trash.entity";
import { Unity } from "src/entities/unity.entity";
//////import { Message } from "../../entities/message.entity";

@Entity("users")
export class User {
  [x: string]: any;

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: 50 })
  name: string;

  @Column('varchar', { length: 500 })
  photo: string;

  @Column("varchar", { length: 12 })
  rut: string;

  @Column("varchar", { length: 50 })
  email: string;

  @Column("varchar", { length: 100 })
  password: string;

 //////// @OneToMany(() => Message, (message) => message.recipient)
  ///////messages: Message[];

  @OneToMany(() => White, (white) => white.user)
  white: White[];

  @OneToMany(() => Green, (green) => green.user)
  green: Green[];


  @OneToMany(() => Proceso, (proceso) => proceso.user)
  proceso: Proceso[];

  @OneToMany(() => Lavander, (lavander) => lavander.user)
  lavander: Lavander[];

  @OneToMany(() => Trash, (trash) => trash.user)
  trash: Trash[];
  
  @OneToMany(() => Unity, (unity) => unity.user)
  unity: Unity[];

  @BeforeInsert()
  checkFieldsBeforeInsert() {
    this.email = this.email.toLowerCase().trim();
  }

  @BeforeUpdate()
  checkFieldsBeforeUpdate() {
    this.checkFieldsBeforeInsert();
  }
}
