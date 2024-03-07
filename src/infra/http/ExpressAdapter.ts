import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import 'express-async-errors'
import UserController from 'infra/http//controller/UserControllerImplementation'

import HttpServer from './HttpServer'

export default class ExpressAdapter  implements HttpServer{
    readonly app: express.Application

    constructor() {
        this.app = express();
        this.app.use(cors());
        this.app.use(bodyParser.json());

        const userController = new UserController()

        this.app.use('/api/user', userController.create)
        this.app.use('/api', (req, res) => {
            res.json({msg: "Hello world"});
        })
    }

    //SetupMiddlewares

    listen(port: number): void {
        this.app.listen(port, () => {
            console.log(`Server running at port ${port}`);
        });
    }
}