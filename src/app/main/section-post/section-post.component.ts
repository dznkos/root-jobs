import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/jobs/job';

import { Jobs } from '../../jobs/job.json';

@Component({
  selector: 'app-section-post',
  templateUrl: './section-post.component.html',
  styleUrls: ['./section-post.component.css']
})
export class SectionPostComponent implements OnInit {


  jobs?: Job[];

  cjob!: Job;

  constructor() {
    this.jobs = Jobs;

  }

  ngOnInit(): void {
  }

  setjob(code : any):void {

    this.cjob = code
  }

}
