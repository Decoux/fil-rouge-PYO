import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireCreateThemeComponent } from './formulaire-create-theme.component';

describe('FormulaireCreateThemeComponent', () => {
  let component: FormulaireCreateThemeComponent;
  let fixture: ComponentFixture<FormulaireCreateThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireCreateThemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireCreateThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
