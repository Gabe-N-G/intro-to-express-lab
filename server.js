const express = require("express")
const app = express()

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];


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

// Task: Create a route for URLs like /collectibles/<index-parameter>.

app.get("/collectibles/:index",(req,res)=>{
    res.end(`You can get a ${collectibles[req.params.index].name} for the low low price of ${collectibles[req.params.index].price}$ CALL NOW!!!`)
})