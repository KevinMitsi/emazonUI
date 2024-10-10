import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyBoxDivComponent } from './empty-box-div.component';

describe('EmptyBoxDivComponent', () => {
  let component: EmptyBoxDivComponent;
  let fixture: ComponentFixture<EmptyBoxDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyBoxDivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyBoxDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
