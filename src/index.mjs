import express from 'express'
import os from 'os'

const app =express()
const port = process.env.PORT || 3000;
app.get("/", (req,res)=>{

    res.send(`<h1>hi from pod ${os.hostname}(v2)</h1>`)
} )

app.get("/etc", (req,res)=>{

    res.send(`<h1>hi from pod ${os.hostname} in etc (v2)</h1>`)
} )


app.listen(port,()=>console.log(`yeah running at ${port}`))
