import { ComponentFixture, TestBed } from '@angular/core/testing';
import { jest } from '@jest/globals';
import { ButtonComponent } from '../../../../../src/app/components/atoms/button/button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should emit onClickEvent when clickEvent is called', () => {
    jest.spyOn(component.onClickEvent, 'emit');
    component.clickEvent();
    expect(component.onClickEvent.emit).toHaveBeenCalled();
  });
});
