import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Proceso } from "src/entities/proceso.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProcesoService extends BaseService<Proceso> {

    constructor(@InjectRepository(Proceso) private procesoRepository : Repository<Proceso>) {
        super();
    }

    getRepository(): Repository<Proceso> {
        return this.procesoRepository;
    }
}
