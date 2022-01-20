import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Blogpost } from '../models/blogpost';
import { BlogpostComment, BlogpostCommentJSON } from '../models/blogpost-comment';
import { BlogpostsService } from '../services/blogposts.service';
import { ErrorMessageService } from '../services/error-message.service';

@Component({
  selector: 'app-blogpost-view',
  templateUrl: './blogpost-view.component.html',
  styleUrls: ['./blogpost-view.component.scss']
})
export class BlogpostViewComponent implements OnInit {
  private blogpostId: number | null = null;
  private paramsSubscription: Subscription | null = null;
  private blogpostSubscription: Subscription | null = null;
  private blogpostGetCommentsSubscription: Subscription | null = null;
  private blogpostPostCommentSubscription: Subscription | null = null;
  private blogpostUpdateCommentSubscription: Subscription | null = null;
  blogpost: Blogpost | null = null;
  blogpostComments: BlogpostComment[] | null = null;
  showPostCommentForm: boolean = false;

  /**
   * Determines which comment is currently being modified, or null if no comment is being modified.
   */
  modifyingComment: BlogpostComment | null = null;

  constructor(private errorMessageService: ErrorMessageService, private titleService: Title, private route: ActivatedRoute, private blogpostsService: BlogpostsService) { }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.blogpostId = +params['id'];

      this.blogpostSubscription = this.blogpostsService.GetBlogPostById(this.blogpostId).subscribe((blogpost: Blogpost) => {
        this.blogpost = blogpost;
        this.titleService.setTitle("Let's Get Checked - " + blogpost.title);
      }, () => this.errorMessageService.addMessage('Error fetching blogpost details.'));

      this.fetchComments();
    }, () => this.errorMessageService.addMessage('Error fetching blogpost id.'));
  }

  private fetchComments(): void {
    if (this.blogpostId) {
      if (this.blogpostComments != null) {
        this.blogpostComments = null;
      }

      this.blogpostGetCommentsSubscription = this.blogpostsService.GetBlogPostCommentsById(this.blogpostId).subscribe((comments: any[]) => {
        this.blogpostComments = comments;
      }, () => this.errorMessageService.addMessage('Error fetching comments.'));
    }
  }

  ngOnDestroy(): void {
    // Unsubscribe from everything
    this.paramsSubscription?.unsubscribe();
    this.blogpostSubscription?.unsubscribe();
    this.blogpostGetCommentsSubscription?.unsubscribe();
    this.blogpostPostCommentSubscription?.unsubscribe();
    this.blogpostUpdateCommentSubscription?.unsubscribe();
  }

  toggleCommentForm(): void {
    this.showPostCommentForm = !this.showPostCommentForm;
  }

  onCommentSubmit(blogpostComment: BlogpostComment): void {
    if (this.blogpostId) {
      blogpostComment.date = new Date();
      this.blogpostPostCommentSubscription = this.blogpostsService.PostCommentOnBlogpost(this.blogpostId, new BlogpostCommentJSON(blogpostComment)).subscribe((data: BlogpostComment) => {
        this.fetchComments();
      }, () => this.errorMessageService.addMessage('Error posting comment.'));
      this.showPostCommentForm = false;
    }
  }

  onCommentEdit(blogpostComment: BlogpostComment): void {
    if (blogpostComment != null) {
      blogpostComment.date = new Date();
      this.blogpostUpdateCommentSubscription = this.blogpostsService.UpdateComment(new BlogpostCommentJSON(blogpostComment)).subscribe((data: BlogpostComment) => {
        this.fetchComments();
      }, () => this.errorMessageService.addMessage('Error updating comment.'));

      this.modifyingComment = null;
    }
  }

  editComment(comment: BlogpostComment | null): void {
    this.modifyingComment = comment;
  }
}
