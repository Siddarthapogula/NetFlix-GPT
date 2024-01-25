import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

const openai = new OpenAI({
  apiKey: "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", 
  dangerouslyAllowBrowser: true 
});

export default openai;