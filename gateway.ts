import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const port = 3000

const serviceMap = {
    "/api/auth" : 'http://localhost:3001',
    "/api/whoami" : 'http://localhost:3002',
    "/api/health" : 'http://localhost:3003'
}


app.use('/api/:service' , (req,res,next)=>{
    const service = req.params.service
    const targetUrl  = serviceMap[`/api/${service}`];

    if(targetUrl){
        createProxyMiddleware({target:targetUrl,changeOrigin:true})(req,res,next)
    }else{
        res.status(404).send('service not found')
    }
})

app.listen(port , ()=>{
    console.log('server is up and running');
})