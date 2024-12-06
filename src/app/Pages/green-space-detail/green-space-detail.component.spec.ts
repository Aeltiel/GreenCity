import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenSpaceDetailComponent } from './green-space-detail.component';

describe('GreenSpaceDetailComponent', () => {
  let component: GreenSpaceDetailComponent;
  let fixture: ComponentFixture<GreenSpaceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreenSpaceDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreenSpaceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
