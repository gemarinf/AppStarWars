import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsSieteComponent } from './films-siete.component';

describe('FilmsSieteComponent', () => {
  let component: FilmsSieteComponent;
  let fixture: ComponentFixture<FilmsSieteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsSieteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsSieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
