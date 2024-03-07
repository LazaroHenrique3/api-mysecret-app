import { Router, Application } from 'express';
import UserController from 'infra/http/controller/UserControllerImplementation';
import QuestionController from 'infra/http/controller/QuestionControllerImplementation';
import AnswerController from 'infra/http/controller/AnswerControllerImplementation';

export default class RouterFactory {
    // Controllers
    private userController: UserController;
    private questionController: QuestionController;
    private answerController: AnswerController;

    constructor() {
        this.answerController = new AnswerController();
        this.questionController = new QuestionController();
        this.userController = new UserController();
    }

    register(): Router {
        const router = Router()

        //UserController
        router.post('/user', this.userController.create);
        router.get('/user/:userId/questions', this.questionController.list);

        //QuestionController
        router.post('/question', this.questionController.create);
        router.post('/question/:questionId/answers', this.answerController.create);
        router.get('/question/:questionId/answers', this.answerController.list)
        router.delete('/question', this.questionController.delete);

        return router;
    }
}