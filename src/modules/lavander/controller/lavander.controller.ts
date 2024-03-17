import { Controller } from '@nestjs/common';
import { LavanderService } from '../service/lavander.service';
import { BaseController } from 'src/commons/controller.commons';
import { Lavander } from 'src/entities/lavander.entity';
import { BaseService } from 'src/commons/service.commons';
 
  
  
@Controller('lavander')
export class LavanderController extends BaseController<Lavander> {

    constructor(private readonly lavanderService: LavanderService) {
        super();
    }

    getService(): BaseService<Lavander> {
        return this.lavanderService;
    }

}
  