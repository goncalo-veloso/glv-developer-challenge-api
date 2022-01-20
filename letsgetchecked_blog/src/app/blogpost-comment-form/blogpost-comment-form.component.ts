import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BlogpostComment } from '../models/blogpost-comment';

@Component({
  selector: 'app-blogpost-comment-form',
  templateUrl: './blogpost-comment-form.component.html',
  styleUrls: ['./blogpost-comment-form.component.scss']
})
export class BlogpostCommentFormComponent implements OnInit {
  @Output() onSubmitEvent : EventEmitter<BlogpostComment> = new EventEmitter<BlogpostComment>();
  @Output() onCancelEvent : EventEmitter<void> = new EventEmitter<void>();
  @Input() model: BlogpostComment = new BlogpostComment();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.onSubmitEvent.emit(this.model);
  }

  onCancel(): void {
    this.onCancelEvent.emit();
  }
}
