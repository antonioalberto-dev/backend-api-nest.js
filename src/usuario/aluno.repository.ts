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
}