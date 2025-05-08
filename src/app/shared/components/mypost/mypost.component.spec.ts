import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypostComponent } from './mypost.component';

describe('MypostComponent', () => {
  let component: MypostComponent;
  let fixture: ComponentFixture<MypostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MypostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MypostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
