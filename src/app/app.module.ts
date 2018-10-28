import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { DepartmentComponent } from './department/department.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {RouterModule} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CseComponent } from './cse/cse.component';
import { ITComponent } from './it/it.component';
import { CivilComponent } from './civil/civil.component';



@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    DepartmentComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    CseComponent,
    ITComponent,
    CivilComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
{path:'about', component: AboutComponent},
{path:'contact', component: ContactComponent},
{path:'department', component: DepartmentComponent},
{path:'news', component: NewsComponent},
{path:'cse', component: CseComponent},
{path:'IT', component: ITComponent},
{path:'civil', component: CivilComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
