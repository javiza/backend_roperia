import { BaseController } from "src/commons/controller.commons";
import { TrashService } from "../service/trash.service";
import { BaseService } from "src/commons/service.commons";
import { Trash } from "src/entities/trash.entity";
import { Controller } from "@nestjs/common";

  
@Controller('trash')
export class TrashController extends BaseController<Trash> {

    constructor(private readonly notificationService: TrashService) {
        super();
    }

    getService(): BaseService<Trash> {
        return this.notificationService;
    }

}