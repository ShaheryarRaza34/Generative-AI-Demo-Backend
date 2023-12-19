import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleGenAiModule } from './google-gen-ai/google-gen-ai.module';

@Module({
  imports: [ConfigModule.forRoot(), GoogleGenAiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
