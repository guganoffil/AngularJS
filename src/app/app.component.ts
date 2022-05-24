import { Component, OnInit } from '@angular/core';
import { DetilService } from './Services/detil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'angular-app';
  randomno:number | undefined;
  info: object = [
    {
     id:1,Name:'gugan'
    
    },
    {
      id:2,Name:'ajith'
     
     },
     {
      id:3,Name:'vijay'
     
     }



  ];
  ngOnInit(): void {
  }
  public onNumberGenerated(randomno: number){
    this.randomno= randomno;
  }

}
