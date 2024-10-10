import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedWindowComponent } from '../../../../../src/app/components/atoms/failed-window/failed-window.component';

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

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should emit closed when closeWindow is called', () => {
    jest.spyOn(component.closed, 'emit');
    component.closeWindow();
    expect(component.closed.emit).toHaveBeenCalled();
  });
});
