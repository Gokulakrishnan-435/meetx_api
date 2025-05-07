import express,{json} from "express";
import routes from './src/router/index.js'

const app=express();
const port=8080;
app.use(json())

app.use("/",routes)
app.listen(port,()=>{
    console.log(`server is running in port ${port}`)
})