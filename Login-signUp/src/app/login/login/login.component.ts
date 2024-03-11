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
       const localData = localStorage.getItem('signUpUsers');
       if (localData!=null) {
        this.signupUsers = JSON.parse(localData)
       }
        
      }

      onSingUp(){
        this.signupUsers.push(this.singupObj);
        localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
        this.singupObj ={
          userName :'',
          email:'',
          password:'',
          number:'',
          gender:''
          };
      }

      onLogin(){
        debugger
        const isUserExist = this.signupUsers.find(m=>m.userName==this.loginObj.userName && m.password==this.loginObj.password);
        if (isUserExist!=undefined) {
          alert("User Login Successfully.")
        }
        else{
          alert('Wrong creadentials.')
        }
      }
}
