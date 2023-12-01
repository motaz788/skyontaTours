import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QusierComponent } from './qusier.component';

describe('QusierComponent', () => {
  let component: QusierComponent;
  let fixture: ComponentFixture<QusierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QusierComponent]
    });
    fixture = TestBed.createComponent(QusierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
