import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateSessionComponent } from './form-create-session.component';

describe('FormCreateSessionComponent', () => {
  let component: FormCreateSessionComponent;
  let fixture: ComponentFixture<FormCreateSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreateSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCreateSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
