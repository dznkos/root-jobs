import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Job } from '../jobs/job';
import { Jobs } from '../jobs/job.json';

@Component({
  selector: 'app-formjob',
  templateUrl: './formjob.component.html',
  styleUrls: ['./formjob.component.css']
})
export class FormjobComponent implements OnInit {

  //crea la variable


  public formJob!: FormGroup;

  submitted = false;

  clearCampos = {
    id: '',
    name: '',
    creditos: '',
    duracion: ''
  }

  @Input() newjob!: Job;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    if (this.newjob != null) {
      this.formJob.patchValue(this.newjob)
    }

    this.formJob = this.formBuilder.group({
      id: ['', [Validators.required, Validators.maxLength(2)]],
      title: ['', [Validators.required, Validators.minLength(6)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      publisher: ['', [Validators.required, Validators.minLength(5)]],
      duration: ['', [Validators.required,Validators.min(1), Validators.max(24) ]],
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formJob.controls;
  }

  onSubmit(){
    this.submitted = true;

    if (this.formJob.invalid) {
      return;
    }

    alert("Success")

  }
}
