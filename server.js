
var express =require("express");
var app = express();
// console.log(app.use)
app.use(express.static("./public"));

app.listen(5000);