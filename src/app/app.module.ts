import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { JobsComponent } from './jobs/jobs.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormjobComponent } from './formjob/formjob.component';
import { PostService } from './services/post.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { HijoComponent } from './hijo/hijo.component';
import { ScreenjobsComponent } from './screenjobs/screenjobs.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    PagenotfoundComponent,
    FormjobComponent,
    CatalogoComponent,
    HijoComponent,
    ScreenjobsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MainModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
