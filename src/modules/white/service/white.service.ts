import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { White } from "src/entities/white.entity";
import { Repository } from "typeorm";

@Injectable()
export class WhiteService extends BaseService<White> {

    constructor(@InjectRepository(White) private whiteRepository : Repository<White>) {
        super();
    }

    getRepository(): Repository<White> {
        return this.whiteRepository;
    }
}
