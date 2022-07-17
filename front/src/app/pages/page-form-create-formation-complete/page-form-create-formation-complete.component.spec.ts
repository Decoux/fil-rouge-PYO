import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormCreateFormationCompleteComponent } from './page-form-create-formation-complete.component';

describe('PageFormCreateFormationCompleteComponent', () => {
  let component: PageFormCreateFormationCompleteComponent;
  let fixture: ComponentFixture<PageFormCreateFormationCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFormCreateFormationCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFormCreateFormationCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
