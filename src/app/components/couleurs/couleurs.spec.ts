import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couleurs } from './couleurs';

describe('Couleurs', () => {
  let component: Couleurs;
  let fixture: ComponentFixture<Couleurs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Couleurs],
    }).compileComponents();

    fixture = TestBed.createComponent(Couleurs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
