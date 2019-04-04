import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

 public deparmetnId : any ;
 public user;

  constructor(private route: ActivatedRoute) {
      console.log("constructor");
   
    }

  ngOnInit() {
    console.log("oninit");
    this.route.paramMap.subscribe(param =>
      
          this.deparmetnId = param.get("id"));      
      
    console.log('oninint executed');
    console.log(this.deparmetnId);
    
  }
    
  onSubmit(form:NgForm){

    console.log('constructor executed')
    
  }

}
