import { Controller } from '@nestjs/common';
import { ProcesoService } from '../service/proceso.service';
import { BaseController } from 'src/commons/controller.commons';
import { Proceso } from 'src/entities/proceso.entity';
import { BaseService } from 'src/commons/service.commons';
 
  
  
@Controller('proceso')
export class ProcesoController extends BaseController<Proceso> {

    constructor(private readonly procesoService: ProcesoService) {
        super();
    }

    getService(): BaseService<Proceso> {
        return this.procesoService;
    }

}
  