import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortoComponent } from './porto.component';

describe('PortoComponent', () => {
  let component: PortoComponent;
  let fixture: ComponentFixture<PortoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortoComponent]
    });
    fixture = TestBed.createComponent(PortoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
