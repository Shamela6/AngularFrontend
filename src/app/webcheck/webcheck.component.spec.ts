import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcheckComponent } from './webcheck.component';

describe('WebcheckComponent', () => {
  let component: WebcheckComponent;
  let fixture: ComponentFixture<WebcheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebcheckComponent]
    });
    fixture = TestBed.createComponent(WebcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
