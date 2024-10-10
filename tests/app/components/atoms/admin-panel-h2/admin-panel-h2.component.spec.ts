import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelH2Component } from '../../../../../src/app/components/atoms/admin-panel-h2/admin-panel-h2.component';

describe('AdminPanelH2Component', () => {
  let component: AdminPanelH2Component;
  let fixture: ComponentFixture<AdminPanelH2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPanelH2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPanelH2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should bind normalText input', () => {
    component.normalText = 'Test Text';
    expect(component.normalText).toBe('Test Text');
  });

  test('should bind highlightedText input', () => {
    component.highlightedText = 'Highlight';
    expect(component.highlightedText).toBe('Highlight');
  });

  
  
});