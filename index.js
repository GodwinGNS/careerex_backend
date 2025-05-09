const  express =require("express")
const  app = express()

app.use(express.json())

const  PORT = process.env.PORT || 8000


const MONGODB_URL = "mongodb+srv://Admin:35535131gns@cluster0.dyaybhp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const mongoose = require("mongoose")
mongoose.connect(MONGODB_URL)
.then (()=>{
    console.log('MONGODB connected...');
    app.listen(8000, () =>{
        console.log(`server start running on ${PORT}`);
    })
})
