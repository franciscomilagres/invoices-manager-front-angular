import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialPageDemo } from './initial-page-demo';

describe('InitialPageDemo', () => {
  let component: InitialPageDemo;
  let fixture: ComponentFixture<InitialPageDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitialPageDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(InitialPageDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
