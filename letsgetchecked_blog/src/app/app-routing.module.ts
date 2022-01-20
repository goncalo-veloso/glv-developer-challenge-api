import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogpostListComponent } from './blogpost-list/blogpost-list.component';
import { BlogpostViewComponent } from './blogpost-view/blogpost-view.component';

const routes: Routes = [
  { path: '', component: BlogpostListComponent, pathMatch: 'full' },
  { path: 'blogpost/:id', component: BlogpostViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
