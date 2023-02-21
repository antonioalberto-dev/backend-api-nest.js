import { Module } from "@nestjs/common";
import { EmailUniqueValidator } from "./dto/validation/emailUniqueValidator";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuario.repository";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioRepository, EmailUniqueValidator],
})

export class UsuarioModule { }