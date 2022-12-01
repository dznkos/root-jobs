import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSpecificComponent } from './section-specific.component';

describe('SectionSpecificComponent', () => {
  let component: SectionSpecificComponent;
  let fixture: ComponentFixture<SectionSpecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSpecificComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
