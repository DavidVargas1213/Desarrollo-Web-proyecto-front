import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { courses } from '../entidades/courses';
import { environment } from 'src/environments/environment';
import { mail } from '../entidades/mail';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) { }

  getCoursesList():Observable<courses[]>{
    return this.http.get<courses[]>('http://localhost:8080/Courses/AllPersons');
  }

  createCourse(newCourse:courses){
    return this.http.post<courses>('http://localhost:8080/Courses/Create',newCourse);
  }


  deleteCourseById(id:number){
    return this.http.delete('http://localhost:8080/Courses/Delete/'+id);
  }

  inscribirCurso(){

  }

  enviarEmailInscripcion(email:mail){
    return this.http.post(environment.baseURL+'/Mail/proyecto/tutorias/correo',email);
  }
  
}
