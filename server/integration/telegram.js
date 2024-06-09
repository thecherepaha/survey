require("dotenv").config()
const TelegramBot = require("node-telegram-bot-api")
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true })

exports.respondMessage = () => {
  bot.on("message", async (msg) => {
    const chatId = msg.chat.id
    const text = msg.text

    // if (text === "/start") {
    //   await bot.sendMessage(chatId, "Ниже появятся кнопка", {
    //     reply_markup: {
    //       keyboard: [[{ text: "Заполни форму" }]],
    //     },
    //   })
    // }
    if (text === "/chatid") {
      await bot.sendMessage(chatId, chatId)
    }
  })

  return
}

exports.sendMessage = async (text) => {
  return await bot.sendMessage(process.env.HR_CHAT_ID, text, {
    parse_mode: "Markdown",
  })
}
