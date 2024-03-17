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

  @BeforeInsert()
  checkFieldsBeforeInsert() {
    this.email = this.email.toLowerCase().trim();
  }

  @BeforeUpdate()
  checkFieldsBeforeUpdate() {
    this.checkFieldsBeforeInsert();
  }
}
