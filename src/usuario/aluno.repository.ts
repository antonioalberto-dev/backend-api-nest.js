import { Injectable } from "@nestjs/common";
import { AlunoEntity } from "./aluno.entity";

@Injectable()
export class AlunoRepository {
    private usuarios: AlunoEntity[] = [];

    async salvar(usuario) {
        this.usuarios.push(usuario);
    }

    async listar() {
        return this.usuarios;
    }

    async existeComEmail(email: string) {
        const possivelUsuario = this.usuarios.find(
            usuario => usuario.email === email
        );

        return possivelUsuario !== undefined;
    }

    async atualiza(id: string, dadosDeAtualizacao: Partial<AlunoEntity>) {
        const possivelAluno = this.usuarios.find(
            alunoSalvo => alunoSalvo.id === id
        );

        if (!possivelAluno) {
            throw new Error('Usuário não existe');
        }

        Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
            if(chave === 'id'){
                return;
            }

            possivelAluno[chave] = valor;
        })

        return possivelAluno;
    }
}