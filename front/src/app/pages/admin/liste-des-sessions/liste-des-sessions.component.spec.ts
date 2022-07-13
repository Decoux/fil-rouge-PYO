import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesSessionsComponent } from './liste-des-sessions.component';

describe('ListeDesSessionsComponent', () => {
  let component: ListeDesSessionsComponent;
  let fixture: ComponentFixture<ListeDesSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDesSessionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDesSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
