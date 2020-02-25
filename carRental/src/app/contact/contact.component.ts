import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  info = new FormGroup({
  name : new FormControl('',Validators.required),
  email : new FormControl('', [Validators.required, Validators.email]),
  message : new FormControl('',Validators.required),
});

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.info.valid){
      var a = this.info.value;
      console.log(a)
    }
    }

}
