require("dotenv").config();
const express = require ('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require ("mongoose")
const cors = require ("cors")
const taskRouter = require ('./routes/taskrouter')

//middleware
app.use(express.json());
app.use(cors());
//router
app.use("/api/tasks", taskRouter)
//db connection
const start = async ()=>{
    try {
        mongoose.connect(process.env.MONGO_URI);
        app.listen(PORT, ()=>{
            console.log(`Server running on port ${PORT}`);
        } )
    } catch (error) {
console.log(error);
    }
};
start();


//error route
app.use((req, res)=>{
res.send(404).json('Resource not found')
});
