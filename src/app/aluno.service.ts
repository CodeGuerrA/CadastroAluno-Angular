import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AlunoService {
  private listaAlunos: string[] = [];

  getAlunos(): string[] {
    return this.listaAlunos;
  }

  adicionarAluno(nome: string): void {
    const nomeTrimado = nome.trim();
    if (nomeTrimado && !this.listaAlunos.includes(nomeTrimado)) {
      this.listaAlunos.push(nomeTrimado);
    }
  }
}
