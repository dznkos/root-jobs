import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormjobComponent } from './formjob/formjob.component';
import { JobsComponent } from './jobs/jobs.component';
import { MainComponent } from './main/main.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

//rutas de navegacion
const routes: Routes = [
  { path: '', component: MainComponent  },
  { path: 'jobs', component: JobsComponent  },
  { path: 'formjob', component: FormjobComponent  },
  { path: 'formjob/:id', component: FormjobComponent  },
  { path: 'posts', component: PagenotfoundComponent  },
  { path: '**', component: PagenotfoundComponent  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
