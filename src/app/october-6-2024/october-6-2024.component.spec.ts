import { ComponentFixture, TestBed } from '@angular/core/testing';

import { October62024Component } from './october-6-2024.component';

describe('October62024Component', () => {
  let component: October62024Component;
  let fixture: ComponentFixture<October62024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [October62024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(October62024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
