import openai from './config/open-ai.js';
import readlineSync from 'readline-sync';
import colors from 'colors';

async function main() {
  console.log(colors.bold.green('Welcome to the Chatbot Program!'));
  console.log(colors.bold.green('You can start chatting with the bot.'));

  const chatHistory = []; // Store conversation history

  while (true) {
    const userInput = readlineSync.question(colors.yellow('You: '));

    try {
      // Construct messages by iterating over the history
      const messages = chatHistory.map(([role, content]) => ({
        role,
        content,
      }));

      // Add latest user input
      messages.push({ role: 'user', content: userInput });

      // Call the API with user input & history
      const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: messages,
      });

      // Get completion text/content
      const completionText = completion.data.choices[0].message.content;

      if (userInput.toLowerCase() === 'exit') {
        console.log(colors.green('Bot: ') + completionText);
        return;
      }

      console.log(colors.green('Bot: ') + completionText);

      // Update history with user input and assistant response
      chatHistory.push(['user', userInput]);
      chatHistory.push(['assistant', completionText]);
    } catch (error) {
      console.error(colors.red(error));
    }
  }
}

main();





// import openai from "./config/open-ai.js";
// import readlineSync from "readline-sync";
// import colors from "colors";

// // const openai = new OpenAI();
// async function main() {
//   console.log(colors.bold.green("Welcome to the Chatbot!!"));
//   console.log(colors.green("You can start chatting with the bot."));

//   while (true) {
//     const userInput = readlineSync.question(colors.yellow("You: "));

//     try {
//       //   call the api with user input
//       const completion = await openai.createChatCompletion({
//         model: 'gpt-3.5-turbo',
//         messages: [{role: 'user', content: userInput}],
//       });

//       //   get completion text/content
//       const completionText = completion.data.choices[0].message.content;
//     //   console.log(Completion);

//       // for await (const chunk of Completion) {
//       //     var completionText = (chunk.choices[0]?.delta?.content || "");
//       // }

//       if (userInput.toLowerCase() === "exit") {
//         console.log(colors.green("Bot: ") + completionText);
//         return;
//       }
//     } catch (error) {
//       console.error(colors.red(error));
//     }
//   }

//   // const userName = readlineSync.question('May I have your Name?');
//   // console.log(`Hello ${userName}`);

//   // const chatCompletion = await openai.chat.completions.create({
//   //     model: "gpt-3.5-turbo",
//   //     messages: [{ role: "user", content: "What is the Capital of India?" }],
//   //     stream: true,
//   // });
//   // // console.log(chatCompletion.data.choices[0]);
//   // for await (const chunk of chatCompletion) {
//   //     process.stdout.write(chunk.choices[0]?.delta?.content || "");
//   // }
// }

// main();

