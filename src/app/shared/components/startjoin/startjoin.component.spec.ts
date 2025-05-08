import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartjoinComponent } from './startjoin.component';

describe('StartjoinComponent', () => {
  let component: StartjoinComponent;
  let fixture: ComponentFixture<StartjoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartjoinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartjoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
