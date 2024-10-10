import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDangerComponent } from '../../../../../src/app/components/atoms/text-danger/text-danger.component';

describe('TextDangerComponent', () => {
  let component: TextDangerComponent;
  let fixture: ComponentFixture<TextDangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextDangerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextDangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should bind text input', () => {
    component.text = 'Error message';
    fixture.detectChanges();
    expect(component.text).toBe('Error message');
  });
});
