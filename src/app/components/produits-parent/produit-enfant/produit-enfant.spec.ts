import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitEnfant } from './produit-enfant';

describe('ProduitEnfant', () => {
  let component: ProduitEnfant;
  let fixture: ComponentFixture<ProduitEnfant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduitEnfant],
    }).compileComponents();

    fixture = TestBed.createComponent(ProduitEnfant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
