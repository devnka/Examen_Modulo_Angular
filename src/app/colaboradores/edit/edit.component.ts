import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../colaborador.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Colaborador } from '../colaborador';
@Component({
  selector: 'app-editar',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  alert_error:boolean=false
  id: number;
  colaborador: Colaborador;
  form: FormGroup;

  constructor(
    public colaboradorService: ColaboradorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idColaborador'];
    this.colaboradorService.find(this.id).subscribe((data: Colaborador)=>{
      this.colaborador = data;
      console.log(this.colaborador);
    });

    this.form = new FormGroup({
      name:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      lastNameP:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      lastNameM:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      area: new FormControl('', [ Validators.required]),
      company: new FormControl('', [ Validators.required]),
      department: new FormControl('', [ Validators.required]),
      position: new FormControl('', [ Validators.required]),
      dischargeDate: new FormControl('', [ Validators.required]),
      status: new FormControl('', [ Validators.required]),
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.colaboradorService.update(this.id, this.form.value).subscribe(res => {
         console.log('Colaborador actualizado!');
         this.router.navigateByUrl('colaboradores/index');
    },error => {
      this.alert_error=true
    })
  }

}
