import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormjobComponent } from './formjob.component';

describe('FormjobComponent', () => {
  let component: FormjobComponent;
  let fixture: ComponentFixture<FormjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormjobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
