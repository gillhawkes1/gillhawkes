import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { AboutmeComponent } from "./pages/aboutme/aboutme.component";
import { ContactmeComponent } from "./pages/contactme/contactme.component";
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'aboutme', component: AboutmeComponent},
  {path: 'contactme', component: ContactmeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }