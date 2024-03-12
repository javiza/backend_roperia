
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
  } from 'typeorm';

import { Green } from 'src/green/green.entity';
import { White } from 'src/white/white.entity';

  
  @Entity()
  export class User {
    [x: string]: any;


    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('varchar', { length: 50 })
    name: string;
  
    @Column('varchar', { length: 12 })
    rut: string;
  
    @Column('varchar', { length: 12 })
    mail: string;

    @Column('varchar', { length: 12 })
    phone: string;

    @Column('varchar', { length: 25 })
    unity: string;

    @Column('varchar', { length: 10 })
    password: string;
    
    @Column('varchar', { length: 500 })
    photo: string;

    @OneToMany(() => White, (white) => white.user)
    white: White[];

    @OneToMany(() => Green, (green) => green.user)
    green: Green[];
    


    // @OneToMany(() => Trash, (trash) => trash.user)
    // trash: Trash[];

    // @OneToMany(() => Favorite, (favorite) => favorite.user)
    // favorite: Favorite[];

    // @OneToMany(() => View, (view) => view.user)
    // view: View[];

 
  }
  





 

  
  



