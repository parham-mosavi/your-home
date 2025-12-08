import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogintecComponent } from './logintec.component';

describe('LogintecComponent', () => {
  let component: LogintecComponent;
  let fixture: ComponentFixture<LogintecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogintecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogintecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
