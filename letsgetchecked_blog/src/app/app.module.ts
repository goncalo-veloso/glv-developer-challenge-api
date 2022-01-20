import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogpostListComponent } from './blogpost-list/blogpost-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogpostViewComponent } from './blogpost-view/blogpost-view.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { BlogpostCommentFormComponent } from './blogpost-comment-form/blogpost-comment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogpostListComponent,
    BlogpostViewComponent,
    HeaderComponent,
    BlogpostComponent,
    BlogpostCommentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
