import { Component, OnInit } from '@angular/core';
import { courses } from '../entidades/courses';
import { mail } from '../entidades/mail';
import {CursosService} from './cursos.service'

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public courses:courses[];
  displayedColumns: string[] = ['Id', 'nombre_curso', 'facultad','inscibirme'];
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
    
    let co = new courses();
    co.facultad_curso="Ciencias naturales";
    co.nombre_curso="Biología"
    this.cursosService.createCourse(co).subscribe(c=>{
      console.log("Curso creado.")
    },err=>{
      console.log("Error al crear curso")
    });
    
    this.cursosService.deleteCourseById(1).subscribe(d=>{

    },err=> console.log("Error al eliminar."));

    
    
  }
  inscribirme(){
    let email = new mail;
    //Tomar el correo de cookie guardada al hacer login
    email.mailTo='davargas12@poligran.edu.co';
    this.cursosService.enviarEmailInscripcion(email).subscribe(e=>{
      console.log("Email enviado");
    },err=>{
      console.log("Falló el envío de correo");
    });
  }

}
