export class Blogpost {
    author: string | null;
    content: string | null;
    description: string | null;
    id: number | null;
    publish_date: Date | null;
    slug: string | null;
    title: string | null;


  constructor(jsonObject?: BlogpostJSON) {
      if (jsonObject) {
      this.author = jsonObject.author
      this.content = jsonObject.content
      this.description = jsonObject.description
      this.id = jsonObject.id;
      this.publish_date = new Date(jsonObject.publish_date as string);
      this.slug = jsonObject.slug
      this.title = jsonObject.title
    } else {
      this.author = null;
      this.content = null;
      this.description = null;
      this.id = null;
      this.publish_date = null;
      this.slug = null;
      this.title = null;
    }
  }
}

export class BlogpostJSON {
    author: string | null; 
    content: string | null; 
    description: string | null; 
    id: number | null;
    publish_date: string | null;
    slug: string | null;
    title: string | null;

    constructor() {
      this.author = null;
      this.content = null;
      this.description = null;
      this.id = null;
      this.publish_date = null;
      this.slug = null;
      this.title = null;
    }
}