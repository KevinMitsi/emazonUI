import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenButtonComponent } from '../../../../../src/app/components/atoms/green-button/green-button.component';

describe('GreenButtonComponent', () => {
  let component: GreenButtonComponent;
  let fixture: ComponentFixture<GreenButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreenButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should emit clickEvent when onClick is called', () => {
    jest.spyOn(component.clickEvent, 'emit');
    component.onClick();
    expect(component.clickEvent.emit).toHaveBeenCalled();
  });
});
