import { openAiKey } from "./constants";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: openAiKey, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});

export default client;
