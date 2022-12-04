var express = require("express")
var app = express()

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({extends: false}));

const cardList = [
    {
        title: "Great Ocean Road",
        image: "gor.png",
        link: "Great Ocean Road",
        description: "Information on Great Ocean Road"
    }
]

app.get('/api',(req, res) => {
    res.json({statusCode: 200, data:cardList, message:"Success"})
})

var port = process.env.port || 3000;

app.listen(port, () =>{
    console.log("App listening to: " + port)
})

