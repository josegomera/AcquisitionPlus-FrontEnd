import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesMedidaEditComponent } from './unidades-medida-edit.component';

describe('UnidadesMedidaEditComponent', () => {
  let component: UnidadesMedidaEditComponent;
  let fixture: ComponentFixture<UnidadesMedidaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadesMedidaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadesMedidaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
