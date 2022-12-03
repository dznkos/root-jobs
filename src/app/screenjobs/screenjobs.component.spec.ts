import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenjobsComponent } from './screenjobs.component';

describe('ScreenjobsComponent', () => {
  let component: ScreenjobsComponent;
  let fixture: ComponentFixture<ScreenjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenjobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
