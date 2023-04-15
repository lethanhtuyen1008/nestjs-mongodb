import { ApiProperty } from '@nestjs/swagger';

export class SignInRequest {
  @ApiProperty({ default: 'tuyenlt' })
  username: string;

  @ApiProperty({ default: 'tuyen@123' })
  password: string;
}
