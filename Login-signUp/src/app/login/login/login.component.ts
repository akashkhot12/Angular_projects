import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  signupUsers:any[]=[];
  singupObj:any ={
    userName :'',
    email:'',
    password:'',
    number:'',
    gender:''
    };

    loginObj:any ={
      userName :'',
      password:'',
      };

      constructor(){}

      ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
      }

      onSingUp(){

      }

      onLogin(){
        
      }
}
