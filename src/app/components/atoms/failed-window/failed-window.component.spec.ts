import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedWindowComponent } from './failed-window.component';

describe('FailedWindowComponent', () => {
  let component: FailedWindowComponent;
  let fixture: ComponentFixture<FailedWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailedWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FailedWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
