import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Favorite } from "../../entities/favorites.entity";
import { UserStats } from "../../entities/userStadist.entity";
import { Message } from "../../entities/message.entity";

@Entity("users")
export class User {
  [x: string]: any;

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: 50 })
  name: string;

  @Column("varchar", { length: 50 })
  email: string;

  @Column("varchar", { length: 100 })
  password: string;

  @OneToMany(() => Message, (message) => message.recipient)
  messages: Message[];

  @OneToMany(() => Favorite, (favorite) => favorite.user)
  favorites: Favorite[];

  @OneToMany(() => UserStats, (stats) => stats.user)
  statistics: UserStats[];

  @BeforeInsert()
  checkFieldsBeforeInsert() {
    this.email = this.email.toLowerCase().trim();
  }

  @BeforeUpdate()
  checkFieldsBeforeUpdate() {
    this.checkFieldsBeforeInsert();
  }
}
