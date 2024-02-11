import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default openai;




// import OpenAI from 'openai';
// import dotenv from 'dotenv';
// dotenv.config();

// // const configuration = new Configuration({
// //     apiKey: process.env.OpenAIApi,
// // });

// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
// });

// export default openai;

