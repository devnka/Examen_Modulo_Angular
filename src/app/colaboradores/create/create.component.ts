import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../colaborador.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-crear',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  form: FormGroup;
  alert_error:boolean=false
  constructor(
    public colaboradorService: ColaboradorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Validacion de los datos de entrada
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

  // Obtension de los datos del formulario
  get getFormData(){
    return this.form.controls;
  }

  // Envio de los datos al controlador del backend
  submit(){
    this.colaboradorService.create(this.form.value).subscribe(res => {
         console.log('Colaborador creado correctamente!');
        //  Redirección al index una vez responda el backend
         this.router.navigateByUrl('colaboradores/index');
         
    },error => {
      this.alert_error=true
    })
  }

}
