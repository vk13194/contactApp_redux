const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-Parser");
const cors = require("cors");
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/redux555',{
// useMongoClient:true,
   useUnifiedTopology: true,
   useNewUrlParser: true,
   useFindAndModify: false 
}).then(()=> console.log('mongodb connected'))
.catch(err => console.log(err));


app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
app.use('/public', express.static('public'));


app.use('/api', require('./routes/profile'))
const port =5000;
app.listen(port, ()=>{
    console.log(`server start ${port}`)
})