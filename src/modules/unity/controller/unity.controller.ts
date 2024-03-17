import { Controller } from '@nestjs/common';
import { UnityService } from '../service/unity.service';
import { BaseController } from 'src/commons/controller.commons';
import { Unity } from 'src/entities/unity.entity';
import { BaseService } from 'src/commons/service.commons';
 
  
  
@Controller('Unity')
export class UnityController extends BaseController<Unity> {

    constructor(private readonly unityService: UnityService) {
        super();
    }

    getService(): BaseService<Unity> {
        return this.unityService;
    }

}
  