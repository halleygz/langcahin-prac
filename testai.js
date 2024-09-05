import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";

const embeddings = new GoogleGenerativeAIEmbeddings({
    apiKey: process.env.GOOGLE_API_KEY,
  model: "text-embedding-004", // 768 dimensions
});

// Create a vector store with a sample text

const text =
  "LangChain is the framework for building context-aware reasoning applications";

const singleVector = await embeddings.embedQuery(text);

console.log(singleVector.slice(0, 100));