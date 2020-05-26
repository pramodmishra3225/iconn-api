import { Request, Response, Router } from 'express';
import { UserController, IUserInput } from "../controllers";
import { IUser, ISuccess } from '../models';
import { logger } from "../helper";
import * as jwt from 'jsonwebtoken';


const router: Router = Router();
const userController = new UserController();


router.post('/signup', async (req: Request, res: Response) => {
    try {
        let { firstName,lastName, email,  password }: IUserInput = req.body;        
        const user = await userController.createUser({ firstName,lastName, email,  password });
        return res.status(200).json(user);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(500).json({
            error: err.message,
        });
    }
});


router.post('/login', async (req: Request, res: Response) => {
    try {
        let { email,  password }: IUserInput = req.body;
        const user: IUser|ISuccess = await userController.signIn({email, password});        
        const token = jwt.sign(user.toString(), 'superSecret');
        res.cookie('token', token, { maxAge: 1000*24*60*60, httpOnly: true });        
        return res.status(200).json({token: token, status: true});
    } catch (err) {
        console.log(err)
        logger.error(err.message, err);
        return res.status(500).json({
            error: err.message,
        });
    }
});

export default router;