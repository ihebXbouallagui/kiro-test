import { NgModule } from '@angular/core';             // <-- OUBLIÉ

import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { JobOffersComponent } from './features/job-offers/job-offers.component';
import { UserComponent } from './features/user/user.component';
import { CoursesComponent } from './features/courses/courses.component';
import { CertificationsComponent } from './features/certifications/certifications.component';
import { HackathonComponent } from './features/hackathon/hackathon.component';
import { PacksCommunicationComponent } from './features/packs-communication/packs-communication.component';
import { BlogTicketsComponent } from './features/blog-tickets/blog-tickets.component';


export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'job-offers', component: JobOffersComponent },
  { path: 'users', component: UserComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'hackathon', component: HackathonComponent },
 { path: 'packs', component: PacksCommunicationComponent },
   { path: 'blog', component: BlogTicketsComponent },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }