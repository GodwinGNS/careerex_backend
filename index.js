const  express =require("express")
const  app = express()

app.use(express.json())

const  PORT = process.env.PORT || 8000

const MONGODB_URL = "mongodb+srv://Admin:35535131gns@cluster0.dyaybhp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const mongoose = require("mongoose")
const Items = require("./productModel")
mongoose.connect(MONGODB_URL)
.then (()=>{
    console.log('MONGODB connected...');
    app.listen(8000, () =>{
        console.log(`server start running on ${PORT}`);
    })
})

// 3.Implement CRUD operations:

app.post("/add-item", async (req, res) => {
    const {itemName, description, locationFound, dateFound, claimed } = req.body

    if(!itemName){
        return res.status(404).json({
            message: "Iteam not found!"
        })
    }

    const newItem = new Items({itemName, description, locationFound, dateFound, claimed})

    await newItem.save()

    res.status(200).json({
        message: "sucessful",
        Item: newItem
    })
})


// View all unclaimed items

app.get("/unclaimed-item", async (req, res) => {
    const allUnclaimItem = await Items.find()

    return res.status(200).json({
        message: "succssful",
        count: allUnclaimItem.length,
        Item: allUnclaimItem
    })
})


// View one item by ID
app.get("/one-item/:id", async (req, res) => {

    const { id } = req.params
    const oneItem = await Items.findById(id)

    if(!oneItem){
        return res.status(404).json({
            message: "Item not found!"
        })
    }

    return res.status(200).json({
        message: "successful",
        Item: oneItem
    })
})

// Update an item’s details or mark as claimed
app.put("/updatting-item/:id", async (req, res) => {

    const { id } = req.params
    const {itemName, description} = req.body

    const updatedItem = await Items.findByIdAndUpdate(
        id,
        {itemName, description},
        {new: true}

    )

    return res.status(200).json({
        message: "sucessful",
        Item: updatedItem
    })
})


// Delete old/irrelevant entrie

app.delete("/delete-item:id", async (req, res) => {
    const { id } = req.params

    const deleteItem = await Items.findByIdAndDelete(id)

    return res.status(200).json({
        message: "successful"
    })
})