import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { AboutmeComponent } from "./pages/aboutme/aboutme.component";
import { ContactmeComponent } from "./pages/contactme/contactme.component";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectsComponent } from './pages/projects/projects.component';

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
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule, FormsModule]
})

export class AppRoutingModule { }