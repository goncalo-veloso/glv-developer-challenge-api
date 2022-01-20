import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogpostsService, MockBlogpostService } from '../services/blogposts.service';

import { BlogpostListComponent } from './blogpost-list.component';

describe('BlogpostListComponent', () => {
  let component: BlogpostListComponent;
  let fixture: ComponentFixture<BlogpostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: BlogpostsService, useClass: MockBlogpostService},
      ],
      declarations: [ BlogpostListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogpostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a list of two mock items', () => {
    expect(component.fetchedBlogposts.length).toEqual(2);
  })
});
