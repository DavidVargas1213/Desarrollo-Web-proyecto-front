import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new FormControl('', [
    Validators.required,
  ]);
  password = new FormControl('', [
    Validators.required,
  ]);

  constructor(private route: Router) { }

  ngOnInit(): void {
  
  }
  onSubmit(){
    //Se realiza solicitud al back con la info registrada.
    if(!this.user.hasError('required') && !this.password.hasError('required'))
      this.route.navigateByUrl('dashboard');
    
  }

}
