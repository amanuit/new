import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
form={
  name:"",
  fatherName:"",
  motherName:"",
  nationality:"",
  contact:"",
  email:"",
  DOB:"",
  10:"",
  12:"",
  department:"",
  hobbies:"",

}
  constructor(private formservice:DataService) {
  

  }

  ngOnInit() {
  }
  submit(e){
   this.formservice.userDataEvent.emit(this.form)  
   console.log(e.value); 
  }

}
