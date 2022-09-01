import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiezmosComponent } from './diezmos.component';

describe('DiezmosComponent', () => {
  let component: DiezmosComponent;
  let fixture: ComponentFixture<DiezmosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiezmosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiezmosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
