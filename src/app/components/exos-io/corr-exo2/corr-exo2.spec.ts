import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrExo2 } from './corr-exo2';

describe('CorrExo2', () => {
  let component: CorrExo2;
  let fixture: ComponentFixture<CorrExo2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorrExo2],
    }).compileComponents();

    fixture = TestBed.createComponent(CorrExo2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
