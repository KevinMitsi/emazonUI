import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavItemComponent } from '../../../../../src/app/components/molecules/nav-item/nav-item.component';

describe('NavItemComponent', () => {
  let component: NavItemComponent;
  let fixture: ComponentFixture<NavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should bind name input', () => {
    component.name = 'Test Nav';
    fixture.detectChanges();
    expect(component.name).toBe('Test Nav');
  });

  test('should emit onClickEvent when onNavItemClick is called', () => {
    jest.spyOn(component.onClickEvent, 'emit');
    component.onNavItemClick();
    expect(component.onClickEvent.emit).toHaveBeenCalled();
  });
});
