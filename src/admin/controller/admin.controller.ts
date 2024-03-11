import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
import { AdminDto } from 'src/dto/admin.dto';
import { AdminService } from '../service/admin.service';


  
  @Controller('admin')
  export class AdminController {
    constructor(private adminService: AdminService) {}
  
    //ver por id
    @Get('/:id')
    getOne(@Param('id') id: number) {
      return this.adminService.findOne(id);
    }
  
    //actualizar por id
    @Put('/:id')
    update(@Param('id') id: number, @Body() body: AdminDto) {
      return this.adminService.update(id, body);
    }
     //ver todo
    @Get()
    getAll() {
     return this.adminService.findAll();
    }

    //eliminar usuario

    @Delete('delete/:id')
    delete(@Param('id') id: number) {
      return this.adminService.delete(id);
    }
 
    //ingresa usuario administrador
    @Post('register')
    create(@Body() body: AdminDto){
        return this.adminService.create(body);
    }

  }
  