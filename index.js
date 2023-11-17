const jsonServer=require('json-server')
const cors=require('cors')




const server=jsonServer.create()
const router=jsonServer.router('data.json')
//used to conert json to js
const middleware=jsonServer.defaults()
server.use(cors())
server.use(middleware)
server.use(router)
const port=4000
server.listen(port,()=>{
    console.log(`......json server started at port ${port}............`)
})
