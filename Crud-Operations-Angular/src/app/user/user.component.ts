import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  userForms: any;

constructor(public fb:FormBuilder){
  this.userForms = this.fb.group({
    Name:[""],
    Email:[""],
    Mobile:[""],
    Age:[""],

  })

  
}

submitForm(){
  console.log(this.userForms.value);
  
}

  ngOnInit(): void {
   
  }

}
