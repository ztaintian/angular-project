import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {
  mobileValidator(control:FormControl):any{
    let mbreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    let valid = mbreg.test(control.value)
    return valid ? null:{mobile:true}
  }
  formModel:FormGroup;
  constructor(fb:FormBuilder) {
    this.formModel = fb.group({
      usename:['',[Validators.required]],
      password:[''],
      mobile:['',this.mobileValidator]
    })
   }

  ngOnInit() {
  }
  onSubmit(){
    let isValid:boolean = this.formModel.get('usename').valid;
    console.log(this.formModel.value,isValid)
  }
}
