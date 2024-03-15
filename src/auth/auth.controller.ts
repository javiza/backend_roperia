import { Controller, Get, Post, Body,  Headers, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto, } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './decorators/get-user.decorator';
import { User } from './entities/user.entity';

import { IncomingHttpHeaders } from 'http';
import { UserRoleGuard } from './guards/user-role/user-role.guard';
import { RoleProtected } from './decorators/role-protected/role-protected.decorator';
import { ValidRoles } from './interfaces/valid-roles';
import { Auth } from './decorators/auth.decorators';
@Controller('user')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  
  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto)
    return this.authService.create(createUserDto);
  }
  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Get('private')
  @UseGuards(AuthGuard())
  testingPrivateRoute(
    //decorators parametros
    @GetUser() user: User,
    @GetUser('email') userEmail: string,
    @Headers() headers: IncomingHttpHeaders,
    ) {

    return {
      ok:true,
      message:'Hola mundo',
      user,
      userEmail,
      headers
     }
    }

    // @SetMetadata('roles', ['admin','super-user'])

  @Get('private2')
  @RoleProtected( ValidRoles.user, ValidRoles.admin )
  @UseGuards( AuthGuard(), UserRoleGuard )
  privateRoute2(
    @GetUser() user: User
  ) {

    return {
      ok: true,
      user
    }
  }

  @Get('private3')
  @Auth( ValidRoles.admin )
  privateRoute3(
    @GetUser() user: User
  ) {

    return {
      ok: true,
      user
    }
  }
}
