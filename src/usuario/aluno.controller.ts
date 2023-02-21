import { Body, Controller, Post } from "@nestjs/common";
import { Get } from "@nestjs/common/decorators";
import { CadastraAlunoDTO } from "./dto/CadastraAluno.dto";
import { AlunoEntity } from "./aluno.entity";
import { AlunoRepository } from "./aluno.repository";
import { v4 as uuid } from 'uuid'
import { ListaAlunoDTO } from "./dto/ListaAluno.dto";

@Controller('/alunos')
export class AlunoController {

    constructor(private usuarioRepository: AlunoRepository) { }

    @Post()
    async criaUsuario(@Body() dadosDoUsuario: CadastraAlunoDTO) {
        const usuarioEntity = new AlunoEntity();
        usuarioEntity.email = dadosDoUsuario.email;
        usuarioEntity.matricula = dadosDoUsuario.matricula;
        usuarioEntity.nome = dadosDoUsuario.nome;
        usuarioEntity.senha = dadosDoUsuario.senha;
        usuarioEntity.id = uuid();

        this.usuarioRepository.salvar(usuarioEntity)
        return { id: usuarioEntity.id, message: "Aluno cadastrado com sucesso!" }
    }

    @Get()
    async listar() {
        const usuariosSalvos = await this.usuarioRepository.listar();
        const usuariosLista = usuariosSalvos.map(
            usuario => new ListaAlunoDTO(
                usuario.id, 
                usuario.nome, 
                usuario.matricula, 
                usuario.senha,
            )
        )
        return usuariosLista;
    }

}