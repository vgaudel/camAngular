import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBackEnd } from './product-back-end';

describe('ProductBackEnd', () => {
  let component: ProductBackEnd;
  let fixture: ComponentFixture<ProductBackEnd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductBackEnd],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductBackEnd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
