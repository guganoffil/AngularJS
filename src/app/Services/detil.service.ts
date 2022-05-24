import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetilService {
Amount : number = 100;
  constructor() { }
  add(){
    this.Amount++;
  }
}
