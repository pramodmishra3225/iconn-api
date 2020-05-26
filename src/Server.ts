import cookieParser from 'cookie-parser';
import express from 'express';
import logger from 'morgan';
import BaseRouter from './routes';
import dbConnect from "./dbConnect";

// Init express
const app = express();

// Add middleware/settings/routes to express.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
const db = 'mongodb://localhost:27017/testdb';
dbConnect({db});
app.use('/api', BaseRouter);

/**
 * Point express to the 'views' directory. If you're using a
 * single-page-application framework like react or angular
 * which has its own development server, you might want to
 * configure this to only serve the index file while in
 * production mode.
 */


// Export express instance
export default app;
