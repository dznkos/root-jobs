import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Job } from './job';
import { Jobs } from './job.json';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {



  jobs?: Job[];

  mostrar = true;
  txtToggle = 'Ocultar'

  constructor() { }

  ngOnInit(): void {
    this.jobs = Jobs;
  }

  toggle():void {
    this.mostrar = !this.mostrar
    this.txtToggle = !this.mostrar ? 'Ocultar' : 'Mostrar'
  }

  add():any {
    // this.jobs?.push(this.formJob.value)
    // this.formJob.patchValue(this.clearAlumno)
    // alert('Publicacion agregada!')
  }

  remove(index: number):void{
    this.jobs = this.jobs?.filter( obj => obj.id !== index)
  }
  modify(i: number):void {}

}
