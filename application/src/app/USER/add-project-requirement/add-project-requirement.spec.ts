import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectRequirement } from './add-project-requirement';

describe('AddProjectRequirement', () => {
  let component: AddProjectRequirement;
  let fixture: ComponentFixture<AddProjectRequirement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProjectRequirement],
    }).compileComponents();

    fixture = TestBed.createComponent(AddProjectRequirement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
