import { RouterModule } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { AboutmeComponent } from "./pages/aboutme/aboutme.component";
import { ContactmeComponent } from "./pages/contactme/contactme.component";
import { NgModule } from '@angular/core';
import { FormsModule, FormControl } from '@angular/forms';
import { ProjectsComponent } from './pages/projects/projects.component';
import { NgFor } from '@angular/common';
import { NavButtonHoverDirective } from './directives/styles/nav-button-hover.directive';
import { SentenceCasePipe } from './pipes/sentence-case.pipe';

export interface RouteWithDisplay {
  path: string;
  component: any;
  display: string;
}

export const routes: RouteWithDisplay[] = [
  {path: '', display: 'home', component: HomeComponent},
  {path: 'aboutme', display: 'about me', component: AboutmeComponent},
  {path: 'projects', display: 'projects', component: ProjectsComponent},
  {path: 'contactme', display: 'contact me', component: ContactmeComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NgFor,
    FormsModule,
    FormControl
  ],
  declarations: [
    HomeComponent,
    AboutmeComponent,
    ProjectsComponent,
    ContactmeComponent,
    NavButtonHoverDirective,
    SentenceCasePipe
  ],
  exports: []
})

export class AppRoutingModule { }