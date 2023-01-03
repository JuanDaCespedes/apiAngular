import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDataComponentComponent } from './input-data-component.component';

describe('InputDataComponentComponent', () => {
  let component: InputDataComponentComponent;
  let fixture: ComponentFixture<InputDataComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDataComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDataComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
