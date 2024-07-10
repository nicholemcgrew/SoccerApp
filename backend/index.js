import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/soccerRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 4000;

// MongoDB connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Body parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS setup
app.use(cors());

routes(app);

app.get('/', (req, res) => {
    res.send(`Our app is running on ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
});
