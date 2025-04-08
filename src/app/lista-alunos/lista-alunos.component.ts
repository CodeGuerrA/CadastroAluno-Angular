import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-lista-alunos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-alunos.component.html'
})
export class ListaAlunosComponent {
  alunos: string[] = [];

  constructor(private alunoService: AlunoService) {
    this.alunos = this.alunoService.getAlunos();
  }
}
