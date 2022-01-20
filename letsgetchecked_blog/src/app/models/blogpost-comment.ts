export class BlogpostComment {
    postId: string | null;
    id: number | null;
    parent_id: number | null;
    user: string | null;
    date: Date | null;
    content: string | null;

    constructor(blogpostCommentJSON?: BlogpostCommentJSON) {
        if (blogpostCommentJSON) {
            this.postId = blogpostCommentJSON.postId;
            this.id = blogpostCommentJSON.id;
            this.parent_id = blogpostCommentJSON.parent_id;
            this.user = blogpostCommentJSON.user;
            this.date = blogpostCommentJSON.date ? new Date(blogpostCommentJSON.date) : null;
            this.content = blogpostCommentJSON.content;
        } else {
            this.postId = null;
            this.id = null;
            this.parent_id = null;
            this.user = null;
            this.date = null;
            this.content = null;
        }
    }
}

export class BlogpostCommentJSON {
    postId: string | null;
    id: number | null;
    parent_id: number | null;
    user: string | null;
    date: string | null;
    content: string | null;

    constructor(blogPostComment: BlogpostComment) {
            this.postId = blogPostComment.postId;
            this.id = blogPostComment.id;
            this.parent_id = blogPostComment.parent_id;
            this.user = blogPostComment.user;
            this.date = blogPostComment.date? blogPostComment.date.toLocaleDateString() : null;
            this.content = blogPostComment.content;
    }
}