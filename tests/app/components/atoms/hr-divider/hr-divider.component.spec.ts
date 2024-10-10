import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrDividerComponent } from '../../../../../src/app/components/atoms/hr-divider/hr-divider.component';

describe('HrDividerComponent', () => {
  let component: HrDividerComponent;
  let fixture: ComponentFixture<HrDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrDividerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
