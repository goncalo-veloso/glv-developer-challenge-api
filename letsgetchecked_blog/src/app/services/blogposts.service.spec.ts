import { TestBed } from '@angular/core/testing';
import { Blogpost, BlogpostJSON } from '../models/blogpost';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BlogpostsService } from './blogposts.service';

const expectedUrl = 'http://localhost:9000/posts';

describe('BlogpostsService', () => {
  let service: BlogpostsService;
  let controller: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BlogpostsService]
    });
    service = TestBed.inject(BlogpostsService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of blogposts on success', () => {
    let blogposts: Blogpost[] =
    [
      new Blogpost(),
      new Blogpost()
    ];

    
    blogposts[0].publish_date = new Date();
    blogposts[1].publish_date = new Date();

    let receivedBlogposts: Blogpost[] | undefined;

    service.GetBlogposts().subscribe((blogposts: Blogpost[]) => {
      receivedBlogposts = blogposts;
    });

    const request = controller.expectOne(expectedUrl);

    request.flush(blogposts);

    expect(receivedBlogposts).toEqual(blogposts);
  });
});
