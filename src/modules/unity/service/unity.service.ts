import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Unity } from "src/entities/unity.entity";
import { Repository } from "typeorm";

@Injectable()
export class UnityService extends BaseService<Unity> {

    constructor(@InjectRepository(Unity) private unityRepository : Repository<Unity>) {
        super();
    }

    getRepository(): Repository<Unity> {
        return this.unityRepository;
    }
}
