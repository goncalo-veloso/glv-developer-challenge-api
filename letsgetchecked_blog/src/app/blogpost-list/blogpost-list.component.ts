import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Blogpost } from '../models/blogpost';
import { BlogpostComment } from '../models/blogpost-comment';
import { BlogpostsService } from '../services/blogposts.service';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.scss']
})
export class BlogpostListComponent implements OnInit, OnDestroy {
  public fetchedBlogposts: Blogpost[] = [];
  private subscription!: Subscription;

  constructor(private blogpostService: BlogpostsService) { }

  ngOnInit(): void {
    // Fetch blogposts and sort by published date descending.
    this.subscription = this.blogpostService.GetBlogposts().subscribe((data: Blogpost[]) => {
      this.fetchedBlogposts = data.sort((a: Blogpost, b: Blogpost) => {
        if (a.publish_date == null || b.publish_date == null) {
          return 0;
        }

        if (a.publish_date > b.publish_date) {
          return -1;
        }

        if (a.publish_date < b.publish_date) {
          return 1;
        }

        else return 0;
      })
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
