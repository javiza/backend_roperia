import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  
import { UserDto } from 'src/dto/user.dto';
import { UserService } from '../service/user.service';

  @Controller('user')
  export class UserController {
    constructor(private userService: UserService) {}
  
    //ver por id
    @Get('/:id')
    getOne(@Param('id') id: number) {
      return this.userService.findOne(id);
    }
  
    //actualizar por id
    @Put('/:id')
    update(@Param('id') id: number, @Body() body: UserDto) {
      return this.userService.update(id, body);
    }
     //ver todo
    @Get()
    getAll() {
     return this.userService.findAll();
    }

    //eliminar usuario

    @Delete('delete/:id')
    delete(@Param('id') id: number) {
      return this.userService.delete(id);
    }

     //ingresa usuario nuevo
     @Post('register')
     create(@Body() body: UserDto){
         return this.userService.create(body);
     }

  }
  