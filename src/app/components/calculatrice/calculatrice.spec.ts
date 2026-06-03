import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculatrice } from './calculatrice';

describe('Calculatrice', () => {
  let component: Calculatrice;
  let fixture: ComponentFixture<Calculatrice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calculatrice],
    }).compileComponents();

    fixture = TestBed.createComponent(Calculatrice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
