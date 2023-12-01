import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadComponent } from './quad.component';

describe('QuadComponent', () => {
  let component: QuadComponent;
  let fixture: ComponentFixture<QuadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuadComponent]
    });
    fixture = TestBed.createComponent(QuadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
