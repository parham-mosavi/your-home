import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuihomeComponent } from './buihome.component';

describe('BuihomeComponent', () => {
  let component: BuihomeComponent;
  let fixture: ComponentFixture<BuihomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuihomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuihomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
