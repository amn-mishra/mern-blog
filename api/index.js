import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv' ; 
import userRoutes from './routes/user.route.js' ;

// this is for to use .env file where confidential details are present
dotenv.config();


// we are connect with database 
mongoose.connect(process.env.MONGO).then( () => { 
    console.log('Mongo is connected')
}).catch(err => {
    console.log(err)
});

const app = express()

app.listen(3000, () =>{
    console.log('Server is running on port 3000 ok ')
});

app.use('/api/user', userRoutes );
