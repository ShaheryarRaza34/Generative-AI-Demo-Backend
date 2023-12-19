import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateConversationRequestDto } from './dto/google-gemini.dto';
import { GoogleGenAiService } from './google-gen-ai.service';

@Controller('google-gen-ai')
@ApiTags('Google Gemini')
export class GoogleGenAiController {
  constructor(private readonly service: GoogleGenAiService) {}

  @Post()
  conversation(@Body() body: CreateConversationRequestDto) {
    return this.service.conversation(body.prompt);
  }
}
