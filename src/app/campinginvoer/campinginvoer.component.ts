import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-camping-invoer',
  templateUrl: './campinginvoer.component.html',
  styleUrls: ['./campinginvoer.component.css']
})
export class CampingInvoerComponent {

  // @Input() campingList: string[] = [];
  @Output() campingCreate = new EventEmitter<string>();

  InvoerCampingNaam = '';
  // constructor() { }

  // ngOnInit(): void {
  // }

  onClickCamping() {
    console.log('created a new capital ' + this.InvoerCampingNaam);
    this.campingCreate.emit(this.InvoerCampingNaam);
    this.InvoerCampingNaam = '';
  }

}
