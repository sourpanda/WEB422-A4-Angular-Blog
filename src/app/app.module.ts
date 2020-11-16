import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { PostComponent } from './components/post/post.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostcardComponent } from './components/postcard/postcard.component';
import { WidgetSearchComponent } from './components/widget-search/widget-search.component';
import { WidgetLatestPostsComponent } from './components/widget-latest-posts/widget-latest-posts.component';
import { WidgetCategoriesComponent } from './components/widget-categories/widget-categories.component';
import { TagsComponent } from './components/tags/tags.component';
import { PostDataComponent } from './components/post-data/post-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    PostComponent,
    PageNotFoundComponent,
    PostcardComponent,
    WidgetSearchComponent,
    WidgetLatestPostsComponent,
    WidgetCategoriesComponent,
    TagsComponent,
    PostDataComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
