import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEmpolyeeComponent } from './manage-empolyee.component';

describe('ManageEmpolyeeComponent', () => {
  let component: ManageEmpolyeeComponent;
  let fixture: ComponentFixture<ManageEmpolyeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageEmpolyeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageEmpolyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
