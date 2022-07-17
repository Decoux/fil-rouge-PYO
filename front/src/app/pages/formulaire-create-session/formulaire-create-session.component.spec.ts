import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireCreateSessionComponent } from './formulaire-create-session.component';

describe('FormulaireCreateSessionComponent', () => {
  let component: FormulaireCreateSessionComponent;
  let fixture: ComponentFixture<FormulaireCreateSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireCreateSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireCreateSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
