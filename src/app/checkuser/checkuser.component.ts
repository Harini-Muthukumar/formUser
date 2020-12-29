import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { User } from '../User';
import { CheckuserService } from './checkuser.service';

@Component({
  selector: 'app-checkuser',
  templateUrl: './checkuser.component.html',
  styleUrls: ['./checkuser.component.css']
})
export class CheckuserComponent implements OnInit {
  public checkForm:FormGroup
  public flag:number
  public suc:string=null
  public err:string=null
  //public name:string
  constructor(private fb:FormBuilder,private cs:CheckuserService) { }

  ngOnInit() {
    this.checkForm= this.fb.group({
      name: ['']
    })
   }

  checkUser(){
    console.log("works")
    let name:string
    name=this.checkForm.value
    this.cs.checkUser(name).subscribe(
      (s)=>this.suc=s,
      (e)=>this.err=e
    )
    
  }

}