import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalistaEspComponent } from './analista-esp.component';

describe('AnalistaEspComponent', () => {
  let component: AnalistaEspComponent;
  let fixture: ComponentFixture<AnalistaEspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalistaEspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalistaEspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
