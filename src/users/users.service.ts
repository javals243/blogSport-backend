import { Injectable } from '@nestjs/common';
import { CreateUsersDTO } from './dto/users-serv.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'valere' },
    { id: 2, name: 'aline' },
    { id: 3, name: 'gabriella' },
  ];
  getUser(name?: string): User[] {
    if (name) {
      return this.users.filter((user) => user.name === name);
    }
    return this.users;
  }

  getUserById(id: number): User {
    //TODO: auto parse data
    return this.users.find((user) => user.id === id);
  }
  createUsers(createUser: CreateUsersDTO): User {
    const newUser = { id: Date.now(), ...createUser };
    this.users.push(newUser);
    return newUser;
  }
}
