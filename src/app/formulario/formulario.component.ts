import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nome = '';

  constructor(private alunoService: AlunoService) {}

  adicionarAluno() {
    this.alunoService.adicionarAluno(this.nome);
    this.nome = '';
  }
}
