import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsDosComponent } from './films-dos.component';

describe('FilmsDosComponent', () => {
  let component: FilmsDosComponent;
  let fixture: ComponentFixture<FilmsDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
