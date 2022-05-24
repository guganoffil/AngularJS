import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';



import { DetilService } from '../Services/detil.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss'],
  providers: [DetilService]
  
})
export class RightComponent implements OnInit {

@Input() subjectChild: any;
@Output() private numbergenerate = new EventEmitter<number>();
  constructor(public amt:DetilService) { }

  ngOnInit(): void {
  }
  Add(){
    this.amt.add();
  }
  public generate(){
    const randomno = Math.random();
    this.numbergenerate.emit(randomno);
  }

}
