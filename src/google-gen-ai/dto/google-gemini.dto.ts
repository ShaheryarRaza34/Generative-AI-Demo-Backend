import { IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateConversationRequestDto {
  @ApiProperty()
  @IsString()
  prompt: string;
}
