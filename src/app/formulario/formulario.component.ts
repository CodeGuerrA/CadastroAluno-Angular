import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nome = '';
  listaAlunos: string[] = [];

  adicionarAluno() {
    if (this.nome.trim()) {
      this.listaAlunos.push(this.nome.trim());
      this.nome = '';
    }
  }
}
