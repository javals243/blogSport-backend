import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  id: number;
  @ApiProperty({ required: false })
  name?: string;
}
