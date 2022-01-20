import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { BlogpostsService, MockBlogpostService } from '../services/blogposts.service';

import { BlogpostViewComponent } from './blogpost-view.component';

describe('BlogpostViewComponent', () => {
  let component: BlogpostViewComponent;
  let fixture: ComponentFixture<BlogpostViewComponent>;
  let blogpostsService: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: BlogpostsService, useClass: MockBlogpostService},
        { provide: ActivatedRoute, useValue: { params: of({id: 1}) }}
      ],
      declarations: [ BlogpostViewComponent ]
    })
    .compileComponents();

    blogpostsService = TestBed.inject(BlogpostsService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogpostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set showPostCommentForm to true when "Post Comment" is clicked', () => {
    expect(component.showPostCommentForm).toBe(false);
    const POST_COMMENT_BUTTON : HTMLElement = fixture.nativeElement.querySelector('#post-comment-button');
    POST_COMMENT_BUTTON.click();
    expect(component.showPostCommentForm).toBe(true);
  });
});
