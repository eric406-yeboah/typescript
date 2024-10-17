import express,{Request,Response} from 'express'
import dotenv from "dotenv"

dotenv.config()
const app = express()

const port =process.env.PORT || 4500;

app.get('/',(request:Request,response:Response)=>{
 response.status(200).send("Hello World");
})


app.listen(port ,()=>{
    console.log(`server started on http://localhost:${port}`)
})
