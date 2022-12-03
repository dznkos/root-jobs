import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-specific',
  templateUrl: './section-specific.component.html',
  styleUrls: ['./section-specific.component.css']
})
export class SectionSpecificComponent implements OnInit {

  @Input() currentJob: any;

  constructor() { }

  ngOnInit(): void {

    console.log(this.currentJob)
  }

}
