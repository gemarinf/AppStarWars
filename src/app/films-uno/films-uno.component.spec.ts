import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsUnoComponent } from './films-uno.component';

describe('FilmsUnoComponent', () => {
  let component: FilmsUnoComponent;
  let fixture: ComponentFixture<FilmsUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
