import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateFormationComponent } from './form-create-formation.component';

describe('FormCreateFormationComponent', () => {
  let component: FormCreateFormationComponent;
  let fixture: ComponentFixture<FormCreateFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreateFormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCreateFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
