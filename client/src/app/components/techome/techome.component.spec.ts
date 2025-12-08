import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechomeComponent } from './techome.component';

describe('TechomeComponent', () => {
  let component: TechomeComponent;
  let fixture: ComponentFixture<TechomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
