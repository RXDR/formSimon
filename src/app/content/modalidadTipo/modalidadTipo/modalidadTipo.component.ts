import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { getMatTooltipInvalidPositionError } from '@angular/material/tooltip';
import { TipoPrograma } from 'src/app/core/models/form/formulario';
import { Modalidad } from 'src/app/core/models/modalidad/modalidad';
import { ModalidadService } from 'src/app/core/services/modalidad/modalidad.service';
import { TipoProgramaService } from 'src/app/core/services/tipo-programa/tipoPrograma.service';

@Component({
  selector: 'app-modalidadTipo',
  templateUrl: './modalidadTipo.component.html',
  styleUrls: ['./modalidadTipo.component.scss']
})
export class ModalidadTipoComponent implements OnInit {
  modalidades: any;
  tipos: any;
  formulario:any;
  tipoPro: TipoPrograma[];


  constructor(private tipoProgramas: TipoProgramaService,
    private refModal:MatDialogRef<ModalidadTipoComponent>, 
    private modalidadService: ModalidadService,
    private formbuild:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:{ modalidad:Modalidad , tipoPrograma:TipoPrograma}
    ) { }

  ngOnInit() {
 this.cargarModalidades()
 this.getTipoPrograma()
  this.formbuilder()
  }

formbuilder(){
  this.formulario=this.formbuild.group({
    id:[''],
    modalidad:this.formbuild.group({
      id:[''],
      nombre:[''],
      estado:['']
    }),
    tipoPrograma:this.formbuild.group({
      id:[''],
      nombre:[''],
      
    })
  })
  
}
  cargarModalidades(){
    this.modalidadService.cargarModalidades().subscribe(resp=>{
      this.modalidades=resp['data']
      console.log(this.modalidades)
    })
  }
   //modalidad
   onChangeModalidad(event: number): void {
    const pTemp: Modalidad = this.modalidades.find((p) => p.id == event)!;
    this.formulario.get('modalidad').setValue(pTemp)
    console.log(pTemp)
  }
  cerrar(){
    this.refModal.close(this.data);
    
  }
  getTipoPrograma(){
    this.tipoProgramas.cargarTipoPrograma().subscribe(resp=>{
      this.tipos=resp['data']
    })
  }
  guardar(){
    console.log(this.formulario.value)

    this.data.modalidad = this.formulario.value.modalidad; 
    this.data.tipoPrograma = this.formulario.value.tipoPrograma;
      //this.data.idModalidad = 10; 
    //this.data.idModalidad = this.formulario.value.modalidad.id;
    //this.data.idTipoPrograma = this.formulario.value.tipoPrograma.id; 
    
    this.cerrar();
  }

  //onchange Tipo Programa
  onChangeTipoPrograma(event:number): void {
    const pTemp: TipoPrograma = this.tipos.find((p) => p.id == event)!;
    this.formulario.get('tipoPrograma').setValue(pTemp)
    console.log(event)
  }
}
