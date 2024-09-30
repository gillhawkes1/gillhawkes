import { RouterModule } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { AboutmeComponent } from "./pages/aboutme/aboutme.component";
import { ContactmeComponent } from "./pages/contactme/contactme.component";
import { NgModule } from '@angular/core';
import { FormsModule, NgModel, FormControl } from '@angular/forms';
import { ProjectsComponent } from './pages/projects/projects.component';
import { NgFor } from '@angular/common';

export interface RouteWithDisplay {
  path: string;
  component: any;
  display: string;
}

export const routes: RouteWithDisplay[] = [
  {path: '', display: 'Home', component: HomeComponent},
  {path: 'aboutme', display: 'About Me', component: AboutmeComponent},
  {path: 'projects', display: 'Projects', component: ProjectsComponent},
  {path: 'contactme', display: 'Contact Me', component: ContactmeComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NgFor,
    FormsModule,
    FormControl
  ],
  declarations: [ContactmeComponent],
  exports: [
  ]
})

export class AppRoutingModule { }