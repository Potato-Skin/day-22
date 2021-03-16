console.log("Potato Skins For The Win");
const express = require("express");

const app = express();

app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: true }));

/* 
// req.body -> everything we wrote in the form whenever we do a POST request
<form method="POST" action="/signup"
   <input name="flamingos"> -> pinky | greeny
   <input name="beer-bong"> -> fun
   <input name="red-beet" > -> bears, battlestar galactica
   <button type="submit">Submit das form</button>
</form>

app.post("/signup", (req, res) => {
   console.log(req.body) // {flamingos: 'pinky', 'beer-bong': 'fun', 'red-beet':'bears, battlestar galactica'}
})

 */

const greetingMessage = "Hello potatoes";

app.get("/", (req, res) => {
  res.render("index", { greetings: greetingMessage });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/search");
// localhost:3054/fancy/important

app.get("/fancy/important", (req, res) => {
  res.render("totally-not-dynamic");
});

app.get("/fancy/:espain/:another-dynamic", (req, res) => {
  console.log(req.params);
  /**
   * Super fancy code
   */
  res.render("dynamic");
});

// facebook.com/search - probalby not a param (its a set path that they coded)
// app.get("/search")
// if no search -> show A
// facebook.com/search?name=tom&age=27&pages=1 - probalby not a param (its a set path that they coded)
// app.get("/search")
// req.paras = {}
// req.query = {name: 'tom', age: '27', pages: '1'}
// if search -> show data that coincides with the query information
// facebook.com/khrys
// app.get("/:name")
// req.params {name: khris}
// req.query = {}
// facebook.com/tom
// app.get("/:name")
// req.query = {}
// facebook.com/laura
// app.get("/:name")
// req.query = {}

app.listen(3054, () => {
  console.log("Port listening on http://localhost:3054");
});
