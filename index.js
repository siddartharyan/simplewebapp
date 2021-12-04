const app=require("express")()
const redis=require("redis")
const client=redis.createClient({
    host:"redis-server",
    port:6379
})
client.set("visits",0)

app.get("/",(req,res)=>{
    client.get("visits",(err,cnt)=>{
        res.send("Number of visits: "+cnt)
        client.set("visits",parseInt(cnt)+1)
    })
})

app.listen(3001,()=>{
    console.log("server has started on 3001")
})