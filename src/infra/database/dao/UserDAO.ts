import DAO from 'domain/dao/DAO';
import UserEntity from 'domain/entity/UserEntity';

export default class UserDAO implements DAO<UserEntity> {
    create(data: UserEntity): Promise<UserEntity> {
        // Criar a tabela
    }

    findById(id: number): Promise<UserEntity> {
        // Deletar a tabela
    }
}