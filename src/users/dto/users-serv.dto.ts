import { ApiProperty } from '@nestjs/swagger';

export class CreateUsersDTO {
  @ApiProperty()
  name: string;
  @ApiProperty({ required: false })
  age?: number;
}
