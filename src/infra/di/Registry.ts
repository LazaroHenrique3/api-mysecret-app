export default class Registry {
    dependencies: Map<RegistryKeys, any> = new Map();
    static instance: Registry

    register<T>(key: RegistryKeys, value: T): void {
        this.dependencies.set(key, value);
    }

    resolve<T>(key: RegistryKeys): T {
        if (!this.dependencies.has(key)) throw new Error(`Dependency ${key} not found`)
        return this.dependencies.get(key);
    }

    //Singleton - Garantir uma única instancia
    static getInstance(): Registry {
        if (!Registry.instance) this.instance = new Registry();
        return Registry.instance;
    }
}

type RegistryKeys = "AnswerRepository" | "QuestionRepository" | "UserRepository";