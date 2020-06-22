import { CoursesService } from './courses.service';

import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    //template: '<h2>{{ "Title: " + title }}<h2>'    
    //template: '<h2>{{ getTitle() }}<h2>' //this type of syntax is called string Interpolation
    template: `<h2>{{ getTitle() }}<h2>
                <ul>
                    <li *ngFor="let course of courses">
                        {{ course }}
                    </li>
                </ul>
                `
})

export class CoursesComponent{
title ="List of courses";
courses;

constructor(service: CoursesService){               //<--lossely coupled instead of let below.
    //let service = new CoursesService();
    //dependceing injection is next.. This won't work alone. 
    //2nd. Went to ap.module.ts and added coursesservice there. See file!
    this.courses = service.getCourses();
}

//Logic for calling HTTP service. 

getTitle(){
    return this.title;
}
}