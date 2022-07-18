import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDTO } from './dto/users-serv.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  getUsers(): User[] {
    return this.userService.getUser();
  }
  @Get(':id')
  getUserById(@Param('id') id: number): User {
    return this.userService.getUserById(Number(id));
  }
  @Post()
  createUsers(@Body() body: CreateUsersDTO): User {
    return this.userService.createUsers(body);
  }
}
