import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgarreComponenteComponent } from './agarre-componente.component';

describe('AgarreComponenteComponent', () => {
  let component: AgarreComponenteComponent;
  let fixture: ComponentFixture<AgarreComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgarreComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgarreComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
