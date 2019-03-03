import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { ServiceComponent } from './components/service/service.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { WebProjectsComponent } from './components/web-projects/web-projects.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MobileAppsComponent } from './components/mobile-apps/mobile-apps.component';
import {ProjectsGuard} from "./components/projects/projects.guard";
import { ImageDetailComponent } from './components/image-detail/image-detail.component';
import {ImageService} from "./components/image-detail/shared/image.service";

const appRoutes: Routes = [
  {path: '', component: ServiceComponent},
  {path: 'projects', component: ProjectsComponent, canActivate: [ProjectsGuard]},
  {path: 'web-projects', component: WebProjectsComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'mobile-apps', component: MobileAppsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    ProjectsComponent,
    WebProjectsComponent,
    GalleryComponent,
    MobileAppsComponent,
    ImageDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [ProjectsGuard, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
