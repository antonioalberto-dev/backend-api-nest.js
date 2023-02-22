import { Body, Controller, Post } from "@nestjs/common";
import { Delete, Get, Param, Put } from "@nestjs/common/decorators";
import { v4 as uuid } from 'uuid'

import { AlunoEntity } from "./aluno.entity";
import { AlunoRepository } from "./aluno.repository";

import { CadastraAlunoDTO } from "./dto/CadastraAluno.dto";
import { ListaAlunoDTO } from "./dto/ListaAluno.dto";
import { AtualizaAlunoDTO } from "./dto/AtualizaAluno.dto";

@Controller('/alunos')
export class AlunoController {

    constructor(private alunoRepository: AlunoRepository) { }

    @Post()
    async criaUsuario(@Body() dadosDoUsuario: CadastraAlunoDTO) {
        const usuarioEntity = new AlunoEntity();
        usuarioEntity.email = dadosDoUsuario.email;
        usuarioEntity.matricula = dadosDoUsuario.matricula;
        usuarioEntity.nome = dadosDoUsuario.nome;
        usuarioEntity.senha = dadosDoUsuario.senha;
        usuarioEntity.id = uuid();

        this.alunoRepository.salvar(usuarioEntity)
        return {
            id: usuarioEntity.id,
            mensagem: "Aluno cadastrado com sucesso!"
        }
    }

    @Get()
    async listar() {
        const usuariosSalvos = await this.alunoRepository.listar();
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

    @Put('/:id')
    async atualizaUsuario(@Param('id') id: string, @Body() novosDados: AtualizaAlunoDTO) {
        const usuarioAtualizado = await this.alunoRepository.atualiza(id, novosDados);
        return {
            usuario: usuarioAtualizado,
            mensagem: 'Usuário atualizado com sucesso'
        }
    }

    @Delete('/:id')
    async removeUsuario(@Param('id') id: string){
        const alunoRemovido = await this.alunoRepository.remove(id);

        return{
            aluno: alunoRemovido,
            mensagem: 'Usuário removido com sucesso'
        }
    }

}