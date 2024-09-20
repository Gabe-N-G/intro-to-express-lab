const express = require("express")
const app = express()

app.listen(3000, () => {
    console.log('In the year 3000')
  })

//   Task: Create a route that responds to URLs like /greetings/<username-parameter>.

app.get("/greetings/:username", (req,res)=>{
    res.send(`<h1>Just what do you think you're doing ${req.params.username}?</h1>`)
})