const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
const PORT = 3500 || 4000

// Массив для хранения данных
let storedData = []

// Middleware
app.use(cors())
app.use(bodyParser.json())

// Маршрут для приёма данных из Postman
app.post("/api/data", (req, res) => {
  const receivedData = req.body
  console.log("Получены данные из Postman:", receivedData)
  storedData.push(receivedData); // Сохраняем данные
  res.status(200).json({ success: receivedData.name, message: receivedData.message })
});

// Маршрут для отправки данных на фронтенд
app.get("/api/data", (req, res) => {
  res.status(200).json({ success: true, data: storedData })
});

app.listen(PORT, () => {
  console.log(`Сервер работает на http://localhost:${PORT}`)
});
