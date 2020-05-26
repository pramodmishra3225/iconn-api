import { IUser, ISuccess , UserModel } from '../models';
import { throws } from 'assert';

export interface IUserInput {
    firstName: IUser['firstName'];
    lastName?: IUser['lastName'];
    email: IUser['email'];
    password: IUser['password'];
}

export interface ILoginInput {    
    email: IUser['email'];
    password: IUser['password'];
}


export class UserController {

    async createUser(user: IUserInput): Promise<ISuccess>{
        const userDoc = await UserModel.create(user);
        if (userDoc._id){
            return {
                success: true,
                message: 'User created successfully'
            }
        }
        
    }

    async signIn(user: ILoginInput): Promise<IUser>{
        const userDoc = await UserModel.findOne(user).exec();
        
        if (userDoc && userDoc._id){
            return userDoc;
        }
        throw {message :"Not a valid user"};
        
        
        
    }

}