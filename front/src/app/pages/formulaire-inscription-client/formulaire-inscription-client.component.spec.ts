import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireInscriptionClientComponent } from './formulaire-inscription-client.component';

describe('FormulaireInscriptionClientComponent', () => {
  let component: FormulaireInscriptionClientComponent;
  let fixture: ComponentFixture<FormulaireInscriptionClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireInscriptionClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireInscriptionClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
