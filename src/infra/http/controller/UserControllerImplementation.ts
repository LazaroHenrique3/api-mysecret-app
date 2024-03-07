import { Request, Response } from 'express'
import UserController from "application/controller/UserController";
import CreateUser from 'application/useCase/user/CreateUser';

export default class UserControllerImplementation implements UserController {
    async create(request: Request, response: Response): Promise<void> {
        const { email, password } = request.body;
        const userData ={ email, password };

        const newUser = await new CreateUser().execute(userData)
        response.status(201).json(newUser)
    };

    async updateProfile(request: Request, response: Response): Promise<void> {

    };

    async findById(request: Request, response: Response): Promise<void> {

    };

    async authenticate(request: Request, response: Response): Promise<void> {

    };
}