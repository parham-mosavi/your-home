import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistertecComponent } from './registertec.component';

describe('RegistertecComponent', () => {
  let component: RegistertecComponent;
  let fixture: ComponentFixture<RegistertecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistertecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistertecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
