import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DorehiComponent } from './dorehi.component';

describe('DorehiComponent', () => {
  let component: DorehiComponent;
  let fixture: ComponentFixture<DorehiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DorehiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DorehiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
