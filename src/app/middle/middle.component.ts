import { Component, OnInit } from '@angular/core';
import { DetilService } from '../Services/detil.service';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.scss']
})
export class MiddleComponent implements OnInit {

  
  id: Number = 1;
  Name: String = "gugan";
  Status: String = "active";

  btnclick: boolean = true;
  constructor(public amt: DetilService) { }
  ngOnInit(): void {
    setTimeout(() => {
      this.btnclick = false
    }, 5000);

  }
  Books = null;
  Books1 = [
    {
      'author': 'bharathiyar',
      'Book': 'c tutorial',
      'Status': 'Available',
      'amount': 10
    },
    {
      'author': 'thiruvalluvar',
      'Book': 'c++ tutorial',
      'Status': 'Printing',
      'amount': 10
    },
    {
      'author': 'Kambar',
      'Book': 'Angular Tutorial',
      'Status': 'Not-Available',
      'amount': 10
    },
    {
      'author': 'Ilango adigal',
      'Book': 'Java',
      'Status': 'Available',
      'amount': 10
    },
    {
      'author': 'oviyar',
      'Book': 'c#',
      'Status': 'Not-Available',
      'amount': 10
    }


  ]
  onclick() {
    if (this.Status == "active") {
      this.Status = "inactive";
    }
    else {
      this.Status = "active";
    }
  }
  Add() {
    this.amt.add();
  }



}
