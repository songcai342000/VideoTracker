import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from '../video';
import { VideoService } from '../video.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css']
})

export class VideolistComponent implements OnInit {
  public videos: Video[];
  constructor(private router: Router, private videoService: VideoService){
  }

  ngOnInit() {
    this.getVideos();

  }

  //get all videos
  getVideos(): void {
    this.videoService.getVideos()
      .subscribe(videos => this.videos = videos);
  }

  

}
