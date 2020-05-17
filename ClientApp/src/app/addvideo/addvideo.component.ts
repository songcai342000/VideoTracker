import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { VideoService } from '../video.service';
import { Video } from "../video";
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.component.html',
  styleUrls: ['./addvideo.component.css']
})
export class AddVideoComponent implements OnInit {
  constructor(private router: Router, private videoService: VideoService) {
  }

  ngOnInit() {
  }

     genres = ['Music', 'Comedy',
    'Inspirational', 'Techs', 'News', 'Sport'];
     video = new Video(6, 'James Bond', 'https://www.youtube.com/watch?v=Bpcupsxy0T8&t=186s', false, 'Comedy');
      //* /video
  //add the video to database
    newVideo() { 
    //add the video to the service
    //return to the side of videolist
      this.videoService.newVideo(this.video).subscribe(() => {
        this.router.navigateByUrl('/videolist');
      });
    
  }
}
