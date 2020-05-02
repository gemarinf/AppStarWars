import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsCeroComponent } from './films-cero.component';

describe('FilmsCeroComponent', () => {
  let component: FilmsCeroComponent;
  let fixture: ComponentFixture<FilmsCeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsCeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsCeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
