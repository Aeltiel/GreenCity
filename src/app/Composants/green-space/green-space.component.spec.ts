import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenSpaceComponent } from './green-space.component';

describe('GreenSpaceComponent', () => {
  let component: GreenSpaceComponent;
  let fixture: ComponentFixture<GreenSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreenSpaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreenSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
