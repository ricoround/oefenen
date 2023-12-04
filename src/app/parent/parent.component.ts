import { Component, OnInit } from '@angular/core';
import { ChildService } from '../child/child.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  invoerWaarde: string[];

  constructor(childService: ChildService) { 
    this.invoerWaarde = childService.invoerRij;
  }

  ngOnInit(): void {
  }

}
