import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionSpecificComponent } from './section-specific/section-specific.component';
import { SectionPostComponent } from './section-post/section-post.component';
import { SectionQuickComponent } from './section-quick/section-quick.component';
import { MainComponent } from './main.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SectionSpecificComponent,
    SectionPostComponent,
    SectionQuickComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SectionSpecificComponent,
    SectionPostComponent,
    SectionQuickComponent,
    MainComponent
  ]
})
export class MainModule { }
