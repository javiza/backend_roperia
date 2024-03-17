import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Lavander } from "src/entities/lavander.entity";
import { Repository } from "typeorm";

@Injectable()
export class LavanderService extends BaseService<Lavander> {

    constructor(@InjectRepository(Lavander) private lavanderRepository : Repository<Lavander>) {
        super();
    }

    getRepository(): Repository<Lavander> {
        return this.lavanderRepository;
    }
}
