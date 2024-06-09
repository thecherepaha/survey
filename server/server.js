require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const TELEGRAM_REPLIER = require("./integration/telegram")
const REST_API = require("./api/endpoints")
const PORT = process.env.SERVER_PORT || 8080

//CORS settings
const opts = {
  origin: [
    "http://localhost:3000",
    "http://localhost:8080",
    "https://peaceful-malasada-28e7c2.netlify.app/",
  ],
}
app.use(cors(opts))
app.options("*", cors(opts))

// Express configurations
app.use(express.json())
app.set("trust proxy", 1) // rate limit proxy
app.use(express.urlencoded({ extended: true }))
//---------------------------------------------

//REST_API_ENDPOINTS
TELEGRAM_REPLIER.respondMessage()
app.use(REST_API)

app.listen(PORT, () =>
  console.log(`HR application is running on PORT ${PORT}!`)
)
