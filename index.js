const { log } = require('console');
const express = require('express')
const app = express()
const port = 3000
const https = require("https");


app.get('/', (req, res) => {
  res.sendFile(__dirname + "/getWeather.html")
})

url = "https://api.openweathermap.org/data/2.5/weather?lat=21.0294498&lon=105.8544441&appid=c55a87f4a3b28f70d085aef1c15f5382"




app.post('/weather-predict', (req, res) => {
    https.get(url, (response) => {
      response.on("data" , (data) =>{
        x = JSON.parse(data).main.temp
        res.send("<p>This is current temperature: </p>" + x)
      })
    })
})

app.listen(process.env.PORT || port, () => {
  console.log("ahihi server is running")
})