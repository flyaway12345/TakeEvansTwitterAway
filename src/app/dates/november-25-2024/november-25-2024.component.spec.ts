import { ComponentFixture, TestBed } from '@angular/core/testing';

import { November252024Component } from './november-25-2024.component';

describe('November252024Component', () => {
  let component: November252024Component;
  let fixture: ComponentFixture<November252024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [November252024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(November252024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
