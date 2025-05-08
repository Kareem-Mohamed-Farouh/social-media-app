import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreatPostComponent } from './modal-creat-post.component';

describe('ModalCreatPostComponent', () => {
  let component: ModalCreatPostComponent;
  let fixture: ComponentFixture<ModalCreatPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCreatPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCreatPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
