import UUIDGenerator from "./UUIDGenerator";

export default class AnswerEntity {
    constructor(
        answerId: string,
        questionId: string,
        userId: string | null,
        answer: string,
        createdAt: Date,
        updatedAt: Date | null
    ) { }

    static create(questionId: string, userId: string | null, annswer: string): AnswerEntity {
        const answerId = UUIDGenerator.generate();
        const createdAt = new Date();

        return new AnswerEntity(answerId, questionId, userId, annswer, createdAt, null)
    }

}