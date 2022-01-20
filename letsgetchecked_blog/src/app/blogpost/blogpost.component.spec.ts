import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogpostComponent } from './blogpost.component';

describe('BlogpostComponent', () => {
  let component: BlogpostComponent;
  let fixture: ComponentFixture<BlogpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide blogpost content when showDetails is false', () => {
    expect(component.showDetails).toBe(false);
    const CONTENT_SPAN : HTMLElement = fixture.nativeElement.querySelector('#blogpost__content');
    expect(CONTENT_SPAN).toBeNull();
  });
});
