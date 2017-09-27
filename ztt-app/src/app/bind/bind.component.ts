import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
  img:string='http://placehold.it/300';
  name:string;
  constructor() { }
  ngOnInit() {
    console.log($('input').val())
  }
  clickMe(evt:any){
    console.log(evt)
  }
  intC(evt:any){
    console.log(evt.target.value)
    console.log("$"+$('input').val())
  }

}
