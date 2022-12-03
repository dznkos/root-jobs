import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { CatalogoComponent } from './catalogo/catalogo.component';
import { FormjobComponent } from './formjob/formjob.component';
import { JobsComponent } from './jobs/jobs.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ScreenjobsComponent } from './screenjobs/screenjobs.component';

//rutas de navegacion
const routes: Routes = [
  { path: '', component: ScreenjobsComponent  },
  { path: 'login', component: LoginComponent  },
  { path: 'home', component: MainComponent  },
  { path: 'jobs', component: JobsComponent  },
  { path: 'formjob', component: FormjobComponent  },
  { path: 'formjob/:id', component: FormjobComponent  },
  { path: 'posts', component: PagenotfoundComponent  },
  { path: 'catalogo', component: CatalogoComponent  },
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
