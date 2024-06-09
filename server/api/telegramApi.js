const app = require("express")
const controller = require("../controller/telegramController")
const use = require("../helpers/utils/utility").use
const api = app.Router()

api.post("/api/application", use(controller.send))
api.get("/api/application", use(controller.respond))

module.exports = api
