import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionQuickComponent } from './section-quick.component';

describe('SectionQuickComponent', () => {
  let component: SectionQuickComponent;
  let fixture: ComponentFixture<SectionQuickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionQuickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionQuickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
