import { ComponentFixture, TestBed } from '@angular/core/testing';

import { October52024Component } from './october-5-2024.component';

describe('October52024Component', () => {
  let component: October52024Component;
  let fixture: ComponentFixture<October52024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [October52024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(October52024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
