import { Module } from '@nestjs/common';
import { AlunoModule } from './usuario/aluno.module';

@Module({
  imports: [AlunoModule],
})
export class AppModule { }
