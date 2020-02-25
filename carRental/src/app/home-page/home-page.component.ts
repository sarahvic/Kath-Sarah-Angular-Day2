import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  cars = [
    {
      img:"https://cdn.bmwblog.com/wp-content/uploads/2018/12/BMW-8-Series-Coupe-Sapphire-Black-19-830x553.jpg",
      type: "BMW",
      color: "black"
    },{
      img:"https://cdn.pixabay.com/photo/2018/04/09/00/14/auto-3302898_960_720.jpg",
      type: "Fiat",
      color: "red"
    },{
      img:"https://bolandcarlow.ie/wp-content/uploads/2017/12/volvo-s90.jpg",
      type:"Volvo",
      color: "silver"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
