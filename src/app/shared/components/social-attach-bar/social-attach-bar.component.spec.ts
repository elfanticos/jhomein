import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAttachBarComponent } from './social-attach-bar.component';

describe('SocialAttachBarComponent', () => {
  let component: SocialAttachBarComponent;
  let fixture: ComponentFixture<SocialAttachBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialAttachBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialAttachBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
