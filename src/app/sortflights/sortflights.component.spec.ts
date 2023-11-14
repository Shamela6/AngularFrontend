import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortflightsComponent } from './sortflights.component';

describe('SortflightsComponent', () => {
  let component: SortflightsComponent;
  let fixture: ComponentFixture<SortflightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortflightsComponent]
    });
    fixture = TestBed.createComponent(SortflightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
