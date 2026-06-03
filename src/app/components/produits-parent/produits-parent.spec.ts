import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsParent } from './produits-parent';

describe('ProduitsParent', () => {
  let component: ProduitsParent;
  let fixture: ComponentFixture<ProduitsParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduitsParent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProduitsParent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
