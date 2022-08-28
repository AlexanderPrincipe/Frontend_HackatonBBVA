import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-aforo',
  templateUrl: './home-aforo.component.html',
  styleUrls: ['./home-aforo.component.css']
})
export class HomeAforoComponent implements OnInit {

  @Input() arrDistanceNear: any = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.arrDistanceNear);
  }
}
