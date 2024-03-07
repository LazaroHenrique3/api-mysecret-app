import QuestionEntity from "domain/entity/QuestionEntity";

export default interface QuestionRepository {
    create(question: QuestionEntity): Promise<QuestionEntity>;
    list(userid: string): Promise<QuestionEntity[]>;
    delete(questionId: string): Promise<void>;
}