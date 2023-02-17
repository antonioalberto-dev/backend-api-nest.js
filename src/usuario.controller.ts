import { Body, Controller, Post } from "@nestjs/common";
import { Get } from "@nestjs/common/decorators";
import { UsuarioRepository } from "./usuario.repository";

@Controller('/usuarios')
export class UsuarioController {

    private usuarioRepository = new UsuarioRepository()

    @Post()
    async criaUsuario(@Body() dadosDoUsuario) {
        this.usuarioRepository.salvar(dadosDoUsuario)
        return dadosDoUsuario;
    }

    @Get()
    async listar(){
        return this.usuarioRepository.listar()
    }

}