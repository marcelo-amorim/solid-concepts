import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const postgresUserRepository = new PostgresUsersRepository();
const mailTrapProviderMailProvider = new MailTrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
  postgresUserRepository, 
  mailTrapProviderMailProvider
); 

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController }