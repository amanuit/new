import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userDataEvent= new EventEmitter<any>();
  
finddata={}
  constructor() { }
  putdata(userdata){
    return  this.finddata=userdata;
  }
}
