import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialsModule } from './shared/modules/materials/materials.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { WorkComponent } from './pages/work/work.component';
import { JoinUsComponent } from './pages/join-us/join-us.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
import { HomeComponent } from './pages/home/home.component';
import { RecentWorkComponent } from './components/recent-work/recent-work.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectItemsComponent } from './projects/project-items/project-items.component';
import { ProjectDetailComponent } from './projects/project-items/project-detail/project-detail.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    JoinUsComponent,
    NavigationComponent,
    ContactComponent,
    FooterComponent,
    AboutComponent,
    SidenavComponent,
    HomeComponent,
    RecentWorkComponent,
    ProjectsComponent,
    ProjectItemsComponent,
    ProjectDetailComponent,
    TermsComponent,
    PrivacyComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
