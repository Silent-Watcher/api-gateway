import express from 'express';

const app = express();
const port = 3001

app.get('/', (req,res,next)=>{
    res.send('sending request to auth service ...')
})

app.listen(port , ()=>{
    console.log('server is up and running');
})