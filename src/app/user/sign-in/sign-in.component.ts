import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoginError : boolean = false;
  customValue : string = "Please sign in";
  @Input("name")
  public parentData : string ;
  
  @Output()
  public childEvent = new EventEmitter<string>();

  constructor(private userService : UserService,private router : Router) { }

  ngOnInit() {

  }
  OnSubmit(userName,password){
    console.log("On Submit clicked")
    this.customValue = "Signing in progress"
     this.userService.userAuthentication(userName,password).subscribe((data : any)=>{
      localStorage.setItem('userToken',data.access_token);
     
      this.router.navigate(['/home']);
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
      this.router.navigate(['/home']);
    });
  }

  onChange(value:string){
      console.log(value)
      this.childEvent.emit(value);
  }

 
}
