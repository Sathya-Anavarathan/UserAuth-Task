import express from 'express';
import authRouter from './src/routes/authRoutes.js';
import infoRouter from './src/routes/infoRoutes.js';
import errorHandler from './src/middlewares/errorHandler.js';
import connectDB from './src/config/db.js';


import dotenv from 'dotenv';



dotenv.config();

const app = express();
const PORT = process.env.PORT ;

app.use(express.json())

// app.get('/', (req, res)=>{
//     res.send('Hello World!');
// })
// auth routes
app.use('/api/auth',authRouter)

// info routes
app.use('/api/info',infoRouter)


app.use(express.json())

app.use(errorHandler)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);});
    connectDB();