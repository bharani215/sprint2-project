import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  API="http://localhost:8080";
  public registerStudent(studentData: any)
  {
    return this.http.post(this.API + '/registerStudent' , studentData);
  }

  public getstudent(){
    return this.http.get(this.API+'/getStudent');
  }

  public deleteStudent(C_id:any){
    return this.http.delete(this.API+'/deleteStudent?C_id=' + C_id);
  }

  public updateStudent(student: any){
    return this.http.put(this.API +'/updateStudent', student);
  }
  constructor(private http: HttpClient) { }
}
