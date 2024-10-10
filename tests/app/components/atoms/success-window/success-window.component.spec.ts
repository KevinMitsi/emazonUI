import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessWindowComponent } from '../../../../../src/app/components/atoms/success-window/success-window.component';

describe('SuccessWindowComponent', () => {
  let component: SuccessWindowComponent;
  let fixture: ComponentFixture<SuccessWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessWindowComponent);
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
