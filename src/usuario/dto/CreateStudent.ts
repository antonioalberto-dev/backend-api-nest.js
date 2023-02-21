import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { EmailEhUnico } from "./validation/emailUniqueValidator";

export class CreateStudentDTO {

    @IsNotEmpty({ message: "O nome não pode ser vazio" })
    nome: string;

    @IsString({ message: "A matricula não pode ser vazia" })
    matricula: string;

    @IsEmail(undefined, { message: "O email informado é inválido" })
    @EmailEhUnico({ message: "Já existe um usuário com esse email" })
    email: string;

    @MinLength(6, { message: "A senha precisa ter pelo menos 6 caracteres" })
    senha: string;
}