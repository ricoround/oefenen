import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampinginvoerComponent } from './campinginvoer.component';

describe('CampinginvoerComponent', () => {
  let component: CampinginvoerComponent;
  let fixture: ComponentFixture<CampinginvoerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampinginvoerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampinginvoerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
