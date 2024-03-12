import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserDto } from "src/dto/user.dto";
import { User } from "src/user/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }
    
    //busca todo

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
      }

    //busca de forma individual get por id 

    findOne(id: number) {
        return this.userRepository.findOneBy({ id: id });
    }

    // actualiza por id(put)
    
    async update(id: number, body: UserDto) {
        const user = await this.userRepository.findOneBy({ id: id });
        this.userRepository.merge(user, body);
        return this.userRepository.save(user)
    }

    // borra por id (delete)
    
    async delete(id: number) {
        await this.userRepository.delete(id);
        return true;
    }
    //create post
    create(body: UserDto) {
        const newUser = this.userRepository.create(body);
        
        return this.userRepository.save(newUser);
    }

}

