import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDeEstagiarioComponent } from './cadastro-de-estagiario.component';

describe('CadastroDeEstagiarioComponent', () => {
  let component: CadastroDeEstagiarioComponent;
  let fixture: ComponentFixture<CadastroDeEstagiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroDeEstagiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDeEstagiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
