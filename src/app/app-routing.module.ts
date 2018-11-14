import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkComponent } from './pages/work/work.component';
import { BlogComponent } from './pages/blog/blog.component';
import { JoinUsComponent } from './pages/join-us/join-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'work', component: WorkComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'join', component: JoinUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
