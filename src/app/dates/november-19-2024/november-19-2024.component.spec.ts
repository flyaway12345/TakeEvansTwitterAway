import { ComponentFixture, TestBed } from '@angular/core/testing';

import { November192024Component } from './november-19-2024.component';

describe('November192024Component', () => {
  let component: November192024Component;
  let fixture: ComponentFixture<November192024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [November192024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(November192024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
