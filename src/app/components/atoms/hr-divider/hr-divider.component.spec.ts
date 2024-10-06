import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrDividerComponent } from './hr-divider.component';

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
