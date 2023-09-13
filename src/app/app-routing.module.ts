import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/body/home/home.component';
import { AboutusComponent } from './pages/body/aboutus/aboutus.component';
import { ProjectsComponent } from './pages/body/projects/projects.component';
import { ContactusComponent } from './pages/body/contactus/contactus.component';
import { NotfoundComponent } from './pages/body/notfound/notfound.component';
import { LightingComponent } from './pages/body/projects/lighting/lighting.component';
import { ProgrammingComponent } from './pages/body/projects/programming/programming.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  {
    path: 'projects', component: ProjectsComponent,
    children: [
      { path: 'lighting', component: LightingComponent },
      { path: '', component: ProgrammingComponent }
    ]
  },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', redirectTo: 'notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
