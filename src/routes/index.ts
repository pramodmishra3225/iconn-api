import { Router } from 'express';

import FeedRouter from './FeedRoute';
import UserRoute from './UserRoute';


// Init router and path
const router = Router();


// Add sub-routes

router.use('/users', UserRoute);
router.use('/feeds', FeedRouter);


// Export the base-router
export default router;
