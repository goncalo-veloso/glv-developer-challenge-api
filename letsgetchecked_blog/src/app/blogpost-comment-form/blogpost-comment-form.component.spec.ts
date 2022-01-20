import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { BlogpostCommentFormComponent } from './blogpost-comment-form.component';

describe('BlogpostCommentFormComponent', () => {
  let component: BlogpostCommentFormComponent;
  let fixture: ComponentFixture<BlogpostCommentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogpostCommentFormComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogpostCommentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create an empty model', () => {
    expect(component.model).not.toBeNull();
    expect(component.model.content).toBeNull();
    expect(component.model.date).toBeNull();
    expect(component.model.id).toBeNull();
    expect(component.model.parent_id).toBeNull();
    expect(component.model.postId).toBeNull();
    expect(component.model.user).toBeNull();
  });
});
