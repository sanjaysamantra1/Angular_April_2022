import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeecrudComponent } from './employeecrud.component';

describe('EmployeecrudComponent', () => {
  let component: EmployeecrudComponent;
  let fixture: ComponentFixture<EmployeecrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeecrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeecrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
