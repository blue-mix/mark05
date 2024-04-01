import dotenv from "dotenv"
import connectDB from "./db/connection.js";

dotenv.config({path:'./env'})

import { app } from "./app.js";


connectDB()
.then(() => {
    app.listen(process.env.PORT || 4000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

// ( async() =>{
//     try{
//         await mongoose.connect( `${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on('error',(error)=>{
//             console.log("ERRR:",error);
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`APP IS LISTRNING ON PORT ${process.env.PORT}`);
//         })
//     }
//     catch(error){
//         console.error("Errr:",error)
//         throw error
//     }
// })
