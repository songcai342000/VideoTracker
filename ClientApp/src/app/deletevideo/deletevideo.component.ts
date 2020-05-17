import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from '../video';
import { VideoService } from '../video.service';
import { Router, ActivatedRoute} from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-deletevideo',
  templateUrl: './deletevideo.component.html',
  styleUrls: ['./deletevideo.component.css']
})
export class DeletevideoComponent implements OnInit {
  video: Video;
  constructor(private route: ActivatedRoute, private router: Router, private videoService: VideoService) { }

  ngOnInit() {
    this.deleteVideo();
  }

  //delete the video
  deleteVideo() {
    const id = +this.route.snapshot.queryParams["id"];
    this.videoService.deleteVideo(id).subscribe(video => this.video = video);
  }
}
