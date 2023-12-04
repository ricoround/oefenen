import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-camping',
  templateUrl: './camping.component.html',
  styleUrls: ['./camping.component.css']
})
export class CampingComponent {

  @Input() campingList: string[] = [];

  @Input() title: string = '';

  // constructor() { }

  // ngOnInit(): void {
  // }



}
