import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadmyphotoformComponent } from './uploadmyphotoform.component';

describe('UploadmyphotoformComponent', () => {
  let component: UploadmyphotoformComponent;
  let fixture: ComponentFixture<UploadmyphotoformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadmyphotoformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadmyphotoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
