import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Green } from "src/green/green.entity";
import { Repository } from "typeorm";

@Injectable()
export class GreenService extends BaseService<Green> {

    constructor(@InjectRepository(Green) private greenRepository : Repository<Green>) {
        super();
    }

    getRepository(): Repository<Green> {
        return this.greenRepository;
    }
}
