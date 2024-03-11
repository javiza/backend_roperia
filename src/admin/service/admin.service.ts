import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AdminDto } from "src/dto/admin.dto";
import { Admin } from "src/entities/admin.entity";
import { Repository } from "typeorm";

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(Admin)
        private adminRepository: Repository<Admin>,
    ) { }
    
    //busca todo

    async findAll(): Promise<Admin[]> {
        return this.adminRepository.find();
      }

    //busca de forma individual get por id 

    findOne(id: number) {
        return this.adminRepository.findOneBy({ id: id });
    }

    // actualiza por id(put)
    
    async update(id: number, body: AdminDto) {
        const admin = await this.adminRepository.findOneBy({ id: id });
        this.adminRepository.merge(admin, body);
        return this.adminRepository.save(admin)
    }

    // borra por id (delete)
    
    async delete(id: number) {
        await this.adminRepository.delete(id);
        return true;
    }

     //create post
     create(body: AdminDto) {
        const newAdmin = this.adminRepository.create(body);
        
        return this.adminRepository.save(newAdmin);
    }

}

