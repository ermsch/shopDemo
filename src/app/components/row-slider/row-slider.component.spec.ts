import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowSliderComponent } from './row-slider.component';

describe('RowSliderComponent', () => {
  let component: RowSliderComponent;
  let fixture: ComponentFixture<RowSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
