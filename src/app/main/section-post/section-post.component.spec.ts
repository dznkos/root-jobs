import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPostComponent } from './section-post.component';

describe('SectionPostComponent', () => {
  let component: SectionPostComponent;
  let fixture: ComponentFixture<SectionPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
