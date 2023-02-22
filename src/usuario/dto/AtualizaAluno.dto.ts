import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { EmailEhUnico } from "../validation/emailUniqueValidator";

export class AtualizaAlunoDTO {

    @IsNotEmpty({ message: "O nome não pode ser vazio" })
    @IsOptional()
    nome: string;
    
    @IsString({ message: "A matricula não pode ser vazia" })
    @IsOptional()
    matricula: string;
    
    @IsEmail(undefined, { message: "O email informado é inválido" })
    @EmailEhUnico({ message: "Já existe um usuário com esse email" })
    @IsOptional()
    email: string;
    
    @MinLength(6, { message: "A senha precisa ter pelo menos 6 caracteres" })
    @IsOptional()
    senha: string;
}