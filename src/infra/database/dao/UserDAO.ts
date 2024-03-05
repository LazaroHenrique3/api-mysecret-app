import { KnexTypeAdapter, DatabaseTableNames } from '../KnexAdapter';
import DAO from 'domain/dao/DAO';
import { UserModel } from 'domain/model';

export default class UserDAO implements DAO<UserModel> {
    private readonly tableName: string = DatabaseTableNames.USERS;

    constructor(private readonly connection: KnexTypeAdapter) {}

    async create(data: UserModel): Promise<UserModel> {
        const [savedUser] = await this.connection<UserModel>(this.tableName).insert(data).returning('*');

        return savedUser;
    }

    async findById(userId: string): Promise<UserModel | null> {
        const data = await this.connection<UserModel>(this.tableName).where({ userId }).first();

        if (!data) return null;
        return data;
    }

    async findByEmail(email: string): Promise<UserModel | null> {
        const data = await this.connection<UserModel>(this.tableName).where({ email }).first();

        if (!data) return null;
        return data;
    }

    async update(data: UserModel): Promise<UserModel> {
        const [updatedUser] = await this.connection<UserModel>(this.tableName).where({userId: data.userId}).update(data).returning('*')

        return updatedUser
    }
}