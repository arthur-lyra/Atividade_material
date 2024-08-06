import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroModuloComponent } from './primeiro-modulo.component';

describe('PrimeiroModuloComponent', () => {
  let component: PrimeiroModuloComponent;
  let fixture: ComponentFixture<PrimeiroModuloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimeiroModuloComponent]
    });
    fixture = TestBed.createComponent(PrimeiroModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
