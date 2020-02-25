import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements  OnInit {

  projectName:string;
  public BtnText : string;
 
  clickCounter :number = 0;
 constructor () {
 
   this.projectName = "Car Rental";
   this.BtnText =  "Donate €10";
 }
 
  countClick(){
    this.clickCounter +=10;
  }

 ngOnInit() {
 
 }
 
 }
