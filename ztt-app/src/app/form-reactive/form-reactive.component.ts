import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {
  formModel:FormGroup;
  constructor(fb:FormBuilder) {
    this.formModel = fb.group({
      usename:[''],
      password:['']
    })
   }

  ngOnInit() {
  }
  clickSubmit(){
    console.log(this.formModel.value)
  }
}
