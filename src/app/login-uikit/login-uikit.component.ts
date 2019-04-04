import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, Form, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-uikit',
  templateUrl: './login-uikit.component.html',
  styleUrls: ['./login-uikit.component.css']
})
export class LoginUikitComponent implements OnInit {

  deparmentId:any;

  constructor(private route: ActivatedRoute) { }
  
  


  ngOnInit() {

    this.route.paramMap.subscribe(param =>
      
      this.deparmentId = param.get("id"));      
  
console.log('oninint executed');
console.log(this.deparmentId);

  }

  utikForm = new FormGroup({
    userName : new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)

  }


  )

  onSubmit(loginForm:NgForm){

    console.log(loginForm.value);


  }
}
