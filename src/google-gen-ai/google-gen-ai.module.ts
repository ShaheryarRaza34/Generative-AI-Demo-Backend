import { Module } from '@nestjs/common';
import { GoogleGenAiController } from './google-gen-ai.controller';
import { GoogleGenAiService } from './google-gen-ai.service';

@Module({
  controllers: [GoogleGenAiController],
  providers: [GoogleGenAiService]
})
export class GoogleGenAiModule {}
