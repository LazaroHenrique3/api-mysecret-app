import KnexAdapter from "infra/database/KnexAdapter";
import UserDAO from "infra/database/dao/UserDAO";
import Registry from "infra/di/Registry";
import LoadEnv from "infra/helper/LoadEnv";
import ExpressAdapter from "infra/http/ExpressAdapter";
import QuestionDAO from "infra/database/dao/QuestionDAO";
import AnswerDAO from "infra/database/dao/AnswerDAO";
import UserRepositoryImplementation from "infra/database/repository/UserRepositoryImplementation";
import QuestionRepositoryImplementation from "infra/database/repository/QuestionRepositoryImplementation";
import AnswerRepositoryImplementation from "infra/database/repository/AnswerRepositoryImplementation";

LoadEnv.load();

const knexAdapter = new KnexAdapter();
knexAdapter.connect();
const userDAO = new UserDAO(knexAdapter.instance);
const userRepository = new UserRepositoryImplementation(userDAO);

const registry = Registry.getInstance();
registry.register('UserRepository', userRepository);


const questionDAO = new QuestionDAO(knexAdapter.instance);
const questionRepository = new QuestionRepositoryImplementation(questionDAO);
registry.register('QuestionRepository', questionRepository)

const answerDAO = new AnswerDAO(knexAdapter.instance)
const answerRepository = new AnswerRepositoryImplementation(answerDAO);
registry.register('AnswerRepository', answerRepository)

const expressAdapter = new ExpressAdapter();
expressAdapter.listen(3000);

// Route -> Controller > UseCse > <Entity>Repository<Model> > DAO