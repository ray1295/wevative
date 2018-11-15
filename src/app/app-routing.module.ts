import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkComponent } from './pages/work/work.component';
import { JoinUsComponent } from './pages/join-us/join-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { ProjectItemsComponent } from './projects/project-items/project-items.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'work', component: WorkComponent },
  { path: 'join', component: JoinUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'projects', component: ProjectItemsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
