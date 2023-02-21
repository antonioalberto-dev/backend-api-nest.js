export class ListaAlunoDTO {
    constructor(
        readonly id: string,
        readonly nome: string,
        readonly matricula: string,
        readonly senha: string
    ) { }
}