import { Body, Controller, Post } from "@nestjs/common";
import { Get } from "@nestjs/common/decorators";
import { CriaUsuarioDTO } from "./dto/CriaUsuario";
import { UsuarioRepository } from "./usuario.repository";

@Controller('/usuarios')
export class UsuarioController {

    constructor(private usuarioRepository: UsuarioRepository) { }

    @Post()
    async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {
        this.usuarioRepository.salvar(dadosDoUsuario)
        return dadosDoUsuario;
    }

    @Get()
    async listar() {
        return this.usuarioRepository.listar()
    }

}