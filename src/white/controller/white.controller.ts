import { Controller } from '@nestjs/common';
import { WhiteService } from 'src/white/service/white.service';
import { BaseController } from 'src/commons/controller.commons';
import { White } from 'src/white/white.entity';
import { BaseService } from 'src/commons/service.commons';
 
  
  
@Controller('White')
export class WhiteController extends BaseController<White> {

    constructor(private readonly whiteService: WhiteService) {
        super();
    }

    getService(): BaseService<White> {
        return this.whiteService;
    }

}
  