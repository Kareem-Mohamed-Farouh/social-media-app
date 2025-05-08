import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogiinComponent } from './logiin.component';

describe('LogiinComponent', () => {
  let component: LogiinComponent;
  let fixture: ComponentFixture<LogiinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogiinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogiinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
