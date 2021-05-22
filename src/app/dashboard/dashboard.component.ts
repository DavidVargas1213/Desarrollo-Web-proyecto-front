import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';
import { courses } from '../entidades/courses';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public courses:courses[];
  displayedColumnsCourses: string[] = ['Id', 'nombre_curso', 'facultad'];

  constructor(private cursosService: CursosService) { }
  

  ngOnInit(): void {

    this.cursosService.getCoursesList().subscribe(c=>{
      this.courses=c;
      this.courses.forEach(b=>{console.log(b.facultad_curso)})
    },
    err=>{
      console.log("Error al cargar la información")
    },()=>{

    });
    
  }

}
