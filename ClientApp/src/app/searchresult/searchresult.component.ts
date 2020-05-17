import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../video';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {
  videos: Video[];

  constructor(private videoService: VideoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getByTitle();
  }

  getByTitle(): void {
    const title = this.route.snapshot.queryParams["title"];
    this.videoService.getByTitle(title).subscribe(
      videos => this.videos = videos
    );
  }

}
