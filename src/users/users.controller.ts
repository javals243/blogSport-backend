import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDTO } from './dto/users-serv.dto';
import { User } from './entities/user.entity';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
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
  @ApiNotFoundResponse()
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number): User {
    const user = this.userService.getUserById(id);
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }
  @ApiCreatedResponse({ type: User })
  @ApiBadRequestResponse()
  @Post()
  createUsers(@Body() body: CreateUsersDTO): User {
    return this.userService.createUsers(body);
  }
}
