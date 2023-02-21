import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsuarioRepository } from "src/usuario/usuario.repository";

@Injectable()
@ValidatorConstraint()
export class EmailUniqueValidator implements ValidatorConstraintInterface {

    constructor(private usuarioRepository: UsuarioRepository) { }

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const usuarioComEmailExiste = await this.usuarioRepository.existeComEmail(value);
        return !usuarioComEmailExiste;
    }
}

export const EmailEhUnico = (opcoesDeValidacao: ValidationOptions) => {
    return (objeto: Object, propriedade: string) => { 
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: EmailUniqueValidator
        });
    }
}