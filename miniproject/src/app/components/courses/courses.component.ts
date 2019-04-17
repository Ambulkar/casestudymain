import { Component, OnInit } from "@angular/core";
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"],
  providers:[CourseService]
  
})
export class CoursesComponent implements OnInit {
  courseArray: any[] = [
    {
      courseName: "course 1",
      duration: 500
    },
    {
      courseName: "course 2",
      duration: 600
    },
    {
      courseName: "course 3",
      duration: 700
    },
    {
      courseName: "course 4",
      duration: 800
    }
  ];
  courseDuration: string;

  constructor() {}

  ngOnInit() {}
  addCourse(course) {
    console.log(course.value);
    this.courseArray.push(course.value);
    console.log(this.courseArray);
  }

  getDuration(courseName) {
    console.log(courseName.value);
    for (let course of this.courseArray) {
      if (course.courseName == courseName.value.name) {
        this.courseDuration = course.duration;
      }
    }
  }
}
