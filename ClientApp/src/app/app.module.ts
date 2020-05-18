import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { VideolistComponent } from './videolist/videolist.component';
import { VideodetailsComponent } from './videodetails/videodetails.component';
import { VideoService } from './video.service';
import { VideosearchComponent } from './videosearch/videosearch.component';
import { AddVideoComponent } from './addvideo/addvideo.component';
import { DeletevideoComponent } from './deletevideo/deletevideo.component';
import { SearchresultComponent } from './searchresult/searchresult.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    VideolistComponent,
    VideodetailsComponent,
    VideosearchComponent,
    AddVideoComponent,
    DeletevideoComponent,
    SearchresultComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'videolist', component: VideolistComponent },
      { path: 'videodetails', component: VideodetailsComponent },
      { path: 'videodetails/:videoid', component: VideodetailsComponent },
      { path: 'deletevideo', component: DeletevideoComponent },
      { path: 'videosearch', component: VideosearchComponent },
      { path: 'searchresult', component: SearchresultComponent },
      { path: 'addvideo', component: AddVideoComponent }
    ]),
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
