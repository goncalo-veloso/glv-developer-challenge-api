import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Blogpost, BlogpostJSON } from '../models/blogpost';
import { BlogpostComment, BlogpostCommentJSON } from '../models/blogpost-comment';

@Injectable({
  providedIn: 'root'
})
export class BlogpostsService {
  private readonly BASE_URL: string = 'http://localhost:9000';

  constructor(private http: HttpClient) { }

  public GetBlogposts(): Observable<Blogpost[]> {
    return this.http.get<BlogpostJSON[]>(this.BASE_URL + '/posts').pipe( map(response => {
      return response.map (jsonObject => new Blogpost(jsonObject));
    }) );
  }

  public GetBlogPostById(blogpostId: number): Observable<Blogpost> {
    return this.http.get<BlogpostJSON>(this.BASE_URL + '/posts/' + blogpostId).pipe( map(response => {
      return new Blogpost(response);
    }) );
  }

  public GetBlogPostCommentsById(blogpostId: number): Observable<BlogpostComment[]> {
    return this.http.get<BlogpostCommentJSON[]>(this.BASE_URL + '/posts/' + blogpostId + '/comments').pipe( map(response => {
      return response.map(blogpostCommentJSON => new BlogpostComment(blogpostCommentJSON));
    }) );
  }

  public PostCommentOnBlogpost(blogpostId: number, blogpostCommentJSON: BlogpostCommentJSON): Observable<BlogpostComment> {
    return this.http.post<BlogpostCommentJSON>(this.BASE_URL + '/posts/' + blogpostId + '/comments', blogpostCommentJSON).pipe( map((response: BlogpostCommentJSON) => {
      return new BlogpostComment(response);
    }) );
  }

  public UpdateComment(blogpostCommentJSON: BlogpostCommentJSON): Observable<BlogpostComment> {
    return this.http.put<BlogpostCommentJSON>(this.BASE_URL + '/comments/' + blogpostCommentJSON.id, blogpostCommentJSON).pipe( map((response: BlogpostCommentJSON) => {
      return new BlogpostComment(response);
    }) );
  }
}

export class MockBlogpostService {
  public GetBlogposts(): Observable<Blogpost[]> {
    return of([new Blogpost(), new Blogpost()]);
  }

  public GetBlogPostById(blogpostId: number): Observable<Blogpost> {
    return of(new Blogpost());
  }

  public GetBlogPostCommentsById(blogpostId: number): Observable<BlogpostComment[]> {
    return of([new BlogpostComment(), new BlogpostComment()]);
  }

  public PostCommentOnBlogpost(blogpostId: number, blogpostCommentJSON: BlogpostCommentJSON): Observable<BlogpostComment> {
    return of(new BlogpostComment());
  }

  public UpdateComment(blogpostCommentJSON: BlogpostCommentJSON): Observable<BlogpostComment> {
    return of(new BlogpostComment());
  }
}