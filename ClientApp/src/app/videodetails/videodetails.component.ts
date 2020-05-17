import { Component, OnInit, Inject, Input} from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-videodetails',
  templateUrl: './videodetails.component.html',
  styleUrls: ['./videodetails.component.css']
 
})
export class VideodetailsComponent implements OnInit {
  video: Video;

  constructor(private videoService: VideoService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getById();
  }

  getById(): void {
    const id = +this.route.snapshot.queryParams["id"];
    this.videoService.getById(id).subscribe(video => this.video = video);
  };
  
}




