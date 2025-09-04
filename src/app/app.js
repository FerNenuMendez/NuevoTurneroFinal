import express from 'express'
import cors from 'cors';


export const app = express()

const corsOptions = {
    origin: '*', // 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: false,
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('Api en Vercel funcionando OK')
})