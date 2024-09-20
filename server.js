const express = require("express")
const app = express()

app.listen(3000, () => {
    console.log('In the year 3000')
  })

//   Task: Create a route that responds to URLs like /greetings/<username-parameter>.

app.get("/greetings/:username", (req,res)=>{
    res.send(`<h1>Just what do you think you're doing ${req.params.username}?</h1>`)
})

// Task: Set up a route to handle URLs following the pattern /roll/<number-parameter>.

app.get("/roll/:number",(req,res)=>{
    res.end(`you rolled a ${Math.floor(Math.random()*req.params.number)}`)
})