import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrExo2Note } from './corr-exo2-note';

describe('CorrExo2Note', () => {
  let component: CorrExo2Note;
  let fixture: ComponentFixture<CorrExo2Note>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorrExo2Note],
    }).compileComponents();

    fixture = TestBed.createComponent(CorrExo2Note);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
