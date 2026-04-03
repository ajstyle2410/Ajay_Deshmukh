import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderBar } from './slider-bar';

describe('SliderBar', () => {
  let component: SliderBar;
  let fixture: ComponentFixture<SliderBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderBar],
    }).compileComponents();

    fixture = TestBed.createComponent(SliderBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
