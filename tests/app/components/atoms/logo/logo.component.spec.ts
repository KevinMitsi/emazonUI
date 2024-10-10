import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoComponent } from '../../../../../src/app/components/atoms/logo/logo.component';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should bind logoType input', () => {
    component.logoType = 'logo logo--small';
    fixture.detectChanges();
    expect(component.logoType).toBe('logo logo--small');
  });
});
