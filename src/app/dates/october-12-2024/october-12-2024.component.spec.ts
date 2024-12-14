import { ComponentFixture, TestBed } from '@angular/core/testing';

import { October122024Component } from './october-12-2024.component';

describe('October122024Component', () => {
  let component: October122024Component;
  let fixture: ComponentFixture<October122024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [October122024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(October122024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
