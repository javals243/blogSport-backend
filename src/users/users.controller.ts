import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDTO } from './dto/users-serv.dto';
import { User } from './entities/user.entity';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @ApiOkResponse({ type: User, isArray: true })
  @ApiQuery({ name: 'name', required: false })
  @Get()
  getUsers(@Query('name') name: string): User[] {
    return this.userService.getUser(name);
  }
  @ApiOkResponse({ type: User, description: 'the User' })
  @Get(':id')
  getUserById(@Param('id') id: number): User {
    return this.userService.getUserById(Number(id));
  }
  @ApiCreatedResponse({ type: User })
  @Post()
  createUsers(@Body() body: CreateUsersDTO): User {
    return this.userService.createUsers(body);
  }
}
