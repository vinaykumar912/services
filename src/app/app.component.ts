import { Component } from '@angular/core';
import {CallingService} from './calling.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
   data:any;
  constructor(private call:CallingService){
  this.call.getdata().subscribe(data=>{
    this.data=data
    console.log(data)
     })
      };
}
