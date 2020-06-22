import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [         //this is where we import the new components we are building.
    AppComponent, 
    CourseComponent,
    CoursesComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ //this is where we put all the dependencies.
    CoursesService
  ],           
  bootstrap: [AppComponent]
})
export class AppModule { }
