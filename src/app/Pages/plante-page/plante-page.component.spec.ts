import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantePageComponent } from './plante-page.component';

describe('PlantePageComponent', () => {
  let component: PlantePageComponent;
  let fixture: ComponentFixture<PlantePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
