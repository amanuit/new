import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  dataToDisplay: any;
  

  constructor(private userDataService: DataService){

    this.userDataService = userDataService;
  }

  title = 'welcome';

  ngOnInit(){
    this.userDataService.userDataEvent.subscribe((data: any) => {
      console.log(data);
    });

  }
}
