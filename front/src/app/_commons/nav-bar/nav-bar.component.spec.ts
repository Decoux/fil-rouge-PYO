import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterColComponentComponent } from './footer-col-component.component';

describe('FooterColComponentComponent', () => {
  let component: FooterColComponentComponent;
  let fixture: ComponentFixture<FooterColComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterColComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterColComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
