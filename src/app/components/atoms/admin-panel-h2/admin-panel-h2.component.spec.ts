import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelH2Component } from './admin-panel-h2.component';

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
