import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOrientadorComponent } from './lista-orientador.component';

describe('ListaOrientadorComponent', () => {
  let component: ListaOrientadorComponent;
  let fixture: ComponentFixture<ListaOrientadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaOrientadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOrientadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
