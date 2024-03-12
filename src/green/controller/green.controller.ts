import { Controller } from '@nestjs/common';
import { GreenService } from 'src/green/service/green.service';
import { BaseController } from 'src/commons/controller.commons';
import { Green } from 'src/green/green.entity';
import { BaseService } from 'src/commons/service.commons';
 
  
  
@Controller('green')
export class GreenController extends BaseController<Green> {

    constructor(private readonly greenService: GreenService) {
        super();
    }

    getService(): BaseService<Green> {
        return this.greenService;
    }

}
  