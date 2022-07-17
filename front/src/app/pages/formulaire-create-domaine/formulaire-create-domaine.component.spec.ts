import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireCreateDomaineComponent } from './formulaire-create-domaine.component';

describe('FormulaireCreateDomaineComponent', () => {
  let component: FormulaireCreateDomaineComponent;
  let fixture: ComponentFixture<FormulaireCreateDomaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireCreateDomaineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireCreateDomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
