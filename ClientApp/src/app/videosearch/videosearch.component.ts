import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from '../video';
import { VideoService } from '../video.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormsModule, Validator } from '@angular/forms';

@Component({
  selector: 'app-videosearch',
  templateUrl: './videosearch.component.html',
  styleUrls: ['./videosearch.component.css']
})
export class VideosearchComponent implements OnInit {
    ngOnInit(): void {
        //throw new Error("Method not implemented.");
  }
  video: Video;
  videos$: Video[];
  constructor(private videoService: VideoService, private route: Router) { }

  searchForm = new FormGroup({
    searchString: new FormControl(''),
    condition: new FormControl('')
  });

  
  // Push a search term into the observable stream.
  onSubmit(): void {
    if (this.searchForm.get('condition').value == 'id') {
      this.route.navigateByUrl('/videodetails?id=' + this.searchForm.get('searchString').value);
    }
    else if (this.searchForm.get('condition').value == 'title') {
      this.route.navigateByUrl('/searchresult?title=' + this.searchForm.get('searchString').value);
    }
   
  }
  

 
}
