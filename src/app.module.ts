import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { TodosModule } from './todos/todos.module';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [TodosModule, ArticlesModule],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
