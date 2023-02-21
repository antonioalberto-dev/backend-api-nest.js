import { Body, Controller, Post } from "@nestjs/common";
import { Get } from "@nestjs/common/decorators";
import { CreateStudentDTO } from "./dto/CreateStudent";
import { UsuarioRepository } from "./usuario.repository";

@Controller('/usuarios')
export class UsuarioController {

    constructor(private usuarioRepository: UsuarioRepository) { }

    @Post()
    async criaUsuario(@Body() dadosDoUsuario: CreateStudentDTO) {
        this.usuarioRepository.salvar(dadosDoUsuario)
        return dadosDoUsuario;
    }

    @Get()
    async listar() {
        return this.usuarioRepository.listar()
    }

}