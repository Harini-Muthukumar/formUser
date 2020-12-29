import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from '../User';
import { UserService } from './adduser.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  addForm: FormGroup
  submitted: Boolean
  successMsg:String =null;
  errorMsg:String=null;
  f: number=0
  public getemp=[];
  constructor(private fb:FormBuilder,private us:UserService) { }

  ngOnInit() {
    this.getemp=this.us.getUser();
    this.addForm = this.fb.group({
      name: ['', { updateOn: 'blur', validators: [Validators.required] }],
      emailid: ['', Validators.required]
    });
  }
  clear(){
    this.f=1
  }
  addUser(){
    let u:User
    u= this.addForm.value
    console.log(u)
    console.log(u.emailid)
    console.log("hii")
    this.us.addBook(u).subscribe(
      (suc)=>{this.successMsg=suc="Sucess";console.log("successss")},
      (err)=>{this.errorMsg=err;console.log(err.message)}
    )
  }

}
