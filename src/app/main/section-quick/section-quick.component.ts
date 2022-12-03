import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/jobs/job';
import { Jobs } from '../../jobs/job.json'

@Component({
  selector: 'app-section-quick',
  templateUrl: './section-quick.component.html',
  styleUrls: ['./section-quick.component.css']
})
export class SectionQuickComponent implements OnInit {

  jobs!: Job[];

  constructor() { }

  ngOnInit(): void {
    this.jobs = Jobs.filter( j => j.priority == 1);
  }

}
