import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagequeriesComponent } from './managequeries.component';

describe('ManagequeriesComponent', () => {
  let component: ManagequeriesComponent;
  let fixture: ComponentFixture<ManagequeriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagequeriesComponent]
    });
    fixture = TestBed.createComponent(ManagequeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
