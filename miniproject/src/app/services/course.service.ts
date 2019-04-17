import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CourseDetail } from "../model/course-detail";

@Injectable({
  providedIn: "root"
})
export class CourseService {
  constructor(private http: HttpClient) {}
  courseDetailUrl = "http://localhost:3000/coursedetail";
  getCourseDetail() {
    return this.http.get<CourseDetail[]>(this.courseDetailUrl);
  }
}
