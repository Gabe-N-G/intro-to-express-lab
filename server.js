const express = require("express")
const app = express()

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.listen(3000, () => {
    console.log('In the year 3000')
  })

//   Task: Create a route that responds to URLs like /greetings/<username-parameter>.

app.get("/greetings/:username", (req,res)=>{
    res.send(`<h1>Just what do you think you're doing ${req.params.username}?</h1>`)
})

// Task: Set up a route to handle URLs following the pattern /roll/<number-parameter>.

//Validation: If the parameter is not a number, respond with “You must specify a number.” For instance, /roll/potato should trigger this response.

app.get("/roll/:number",(req,res)=>{
    console.log(typeof(req.params.number))
    if(isNaN(req.params.number)){
        res.send(`You must specify a number`)
    }else{
        res.send(`You rolled a ${Math.floor(Math.random()*req.params.number)}`)
    }
})

// Task: Create a route for URLs like /collectibles/<index-parameter>.

app.get("/collectibles/:index",(req,res)=>{
    if (req.params.index > 0 && req.params.index < collectibles.length){
    res.send(`You can get a ${collectibles[req.params.index].name} for the low low price of ${collectibles[req.params.index].price}$ CALL NOW!!!`)
    } else {
    res.send("Somethings gone terribly wrong :(")
    }
})

// app.get("/collectibles/",(req,res)=>{
//     res.send(`This item is not yet in stock. Check back soon!`)
// })

// Task: Create a route /shoes that filters the list of shoes based on query parameters.

/*
Query Parameters:

min-price: Excludes shoes below this price.
max-price: Excludes shoes above this price.
type: Shows only shoes of the specified type.
No parameters: Responds with the full list of shoes.
*/

app.get("/shoes", (req,res) => {
    const min = req.query.min
    const max = req.query.max
    const type = req.query.type
    let results = ""
        shoes.forEach((shoe, i) => {
            results += `${i + 1}. ${shoe.name} `
        })
    
    if(req.query.min){
        res.send(shoes.filter((shoe) => shoe.price < req.query.min))
    } else if(req.query.max){
        res.send(shoes.filter((shoe) => shoe.price > req.query.max))
    } else if(req.query.type){
        res.send(shoes.filter((shoe) => shoe.type === req.query.type))
    } else {
        res.send(results)
    }
})
