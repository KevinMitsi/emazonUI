import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburguerButtonComponent } from '../../../../../src/app/components/atoms/hamburguer-button/hamburguer-button.component';

describe('HamburguerButtonComponent', () => {
  let component: HamburguerButtonComponent;
  let fixture: ComponentFixture<HamburguerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HamburguerButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HamburguerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
