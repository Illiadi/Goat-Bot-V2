const axios = require('axios');

const Prefixes = [
  'Ghost', 
  'ai'
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "Naruto",
    longDescription: "AI", 
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply(" 𝖲𝖺𝗅𝗎𝗍 𝗍𝗈𝗂...𝖬𝗈𝗂 𝖼'𝖾𝗌𝗍 ✰...𝗘𝗗𝗡𝗔...✰ 𝖰𝗎𝖾 𝗉𝗎𝗂𝗌 𝗃𝖾 𝖿𝖺𝗂𝗋𝖾 𝗉𝗈𝗎𝗋 𝗍𝗈𝗂 🪶");
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply({ body: `┃✰..𝗘𝗗𝗡𝗔..✰┃
═══════════════
${answer} `,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
}
