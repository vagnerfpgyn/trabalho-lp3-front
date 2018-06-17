import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Estagiario } from '../../model/estagiario.model';
import { FormBuilder, FormGroup, FormControl, FormGroupDirective, Validators } from '@angular/forms'; 
import { EstagiarioService } from '../../service/estagiario.service';


@Component({
  selector: 'app-cadastro-estagiario',
  templateUrl: './cadastro-estagiario.component.html',
  styleUrls: ['./cadastro-estagiario.component.css']
})
export class CadastroEstagiarioComponent implements OnInit {
 
  @ViewChild(FormGroupDirective)
  form: FormGroupDirective;

  formulario:FormGroup;
  public estagiario:Estagiario = new Estagiario();
 
  constructor(

    private estagiarioservice: EstagiarioService,
    private  formBuilder:FormBuilder
  ) { 
    
  }

  ngOnInit() {
  this.formulario = this.formBuilder.group({
    matricula: ['',Validators.required],
    nomeCompleto:[''],
    telefone: [''],
    celular: [''],
    email:['',Validators.email],
    turno:[null],
    periodo:[null],
    tipoEstagio:[null]
  });
  
  }

  setMatricula(event: any): void {
    this.estagiario.matricula = event.target.value;
  }

  setNomeCompleto(event: any): void {
    this.estagiario.nomeCompleto = event.target.value;
  }

  setTelefone(event: any): void {
    this.estagiario.telefoneResidencial = event.target.value;
  }

  setCelular(event: any): void {
    this.estagiario.celular = event.target.value;
  }

  setEmail(event: any): void {
    this.estagiario.email= event.target.value;
  }

  setPeriodo(event: any): void {
    this.estagiario.periodo = +event.target.value;
  }

  setTipoEstagio(event:any): void {
    this.estagiario.tipoEstagio = event.target.value;
  }
  
  setTurno(event: any): void {
    this.estagiario.turno = event.target.value;
  }

  gravarEstagiario():void{
    console.log(this.formulario.value);  
  }

  onSubmit(): void {
    this.estagiario = {
      ...this.formulario.value
  }
  console.log(this.formulario)
  if(this.formulario.valid) {
    console.log('formulario valido');
  } else {
    console.log('formulario invalido');
}

if(this.formulario.valid) {
  this.estagiarioservice.gravarEstagiario(this.estagiario)
                          .subscribe( () =>{
                            console.log('Gravado com sucesso');
                          } , () => {
                            console.log('Falhou!');
                          });
}
}

isValidTouched(campo) {
  return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
}

cssError(campo) {
  return {
    'has-error' : this.isValidTouched(campo),
    'has-feedback': this.isValidTouched(campo)
  }
}

}

