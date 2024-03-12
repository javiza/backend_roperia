import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Trash } from "src/entities/trash.entity";
import { Repository } from "typeorm";

@Injectable()
export class TrashService extends BaseService<Trash> {

    constructor(@InjectRepository(Trash) private trashRepository : Repository<Trash>) {
        super();
    }

    getRepository(): Repository<Trash> {
        return this.trashRepository;
    }
}