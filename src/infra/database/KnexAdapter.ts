import knex, {Knex as KnexType} from "knex";
import { AnswerModel, QuestionModel, UserModel } from "domain/model";
import DatabaseConnection from "./DatabaseConnection";

export default class KnexAdapter implements DatabaseConnection {
    private connection: KnexTypeAdapter

    constructor (

    ) { this.connection = {} as KnexTypeAdapter }

    connect(): Promise<void> {
        console.log("Username: ", process.env.DB_USERNAME)
        try {
            this.connection = knex({
                client: 'pg',
                connection: {
                    host: "localhost"/* process.env.DB_HOSTNAME */,
                    user: "postgres"/* process.env.DB_USERNAME */,
                    password: "postgres"/* process.env.DB_PASSWORD */,
                    database: "mysecret"/* process.env.DB_NAME */,
                    port: 5432
                },
            });

            return Promise.resolve();
        } catch (error) {
            throw new Error('Error connecting to database.')
        }
    }

    disconnect(): Promise<void> {
        return this.connection.destroy();
    }

    get instance(): KnexTypeAdapter {
        return this.connection
    }
}

interface DatabaseTables {
    answers: AnswerModel;
    questions: QuestionModel;
    users: UserModel;
}

export enum DatabaseTableNames {
    ANSWERS = 'answers',
    QUESTIONS = 'questions',
    USERS = 'users'
}

export type KnexTypeAdapter = KnexType<DatabaseTables>