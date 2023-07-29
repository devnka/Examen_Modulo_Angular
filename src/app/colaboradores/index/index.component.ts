import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../colaborador.service';
import { Colaborador } from '../colaborador';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  alert_warning:boolean=false
  colaboradores: Colaborador[] = [];

  // constructor() { }
  constructor(public colaboradorService: ColaboradorService) { }

  ngOnInit(): void {
    this.colaboradorService.getAll().subscribe((data: Colaborador[])=>{
      this.colaboradores = data;
      console.log(this.colaboradores);
    })
  }

  deleteColaborador(id){
    this.colaboradorService.delete(id).subscribe(res => {
         this.colaboradores = this.colaboradores.filter(item => item.id !== id);
         console.log('Colaborador eliminado correctamente!');
         this.alert_warning=true
    })
  }

}