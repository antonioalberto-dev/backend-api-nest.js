import { Module } from "@nestjs/common";
import { EmailUniqueValidator } from "./validation/emailUniqueValidator";
import { AlunoController } from "./aluno.controller";
import { AlunoRepository } from "./aluno.repository";

@Module({
    controllers: [AlunoController],
    providers: [AlunoRepository, EmailUniqueValidator],
})

export class AlunoModule { }