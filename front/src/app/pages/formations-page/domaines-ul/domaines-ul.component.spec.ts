import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainesUlComponent } from './domaines-ul.component';

describe('DomainesUlComponent', () => {
  let component: DomainesUlComponent;
  let fixture: ComponentFixture<DomainesUlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomainesUlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomainesUlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
