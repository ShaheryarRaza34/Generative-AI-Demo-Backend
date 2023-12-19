import { GoogleGenerativeAI } from '@google/generative-ai';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleGenAiService {
  private readonly gemini = new GoogleGenerativeAI(
    process.env.GOOGLE_GEMINI_API_KEY,
  );
  constructor() {}

  async conversation(prompt: string) {
    const model = this.gemini.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(prompt);

    return { result: result.response.text() };
  }
}
