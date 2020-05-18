import { Injectable, Inject} from '@angular/core';
import { Video } from './video';
import { Observable} from 'rxjs/Observable';
import { HttpClient} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { T } from '@angular/core/src/render3';
import { of } from 'rxjs/observable/of';

@Injectable()

export class VideoService {
  videos: Video[];
  private videosUrl = 'api/Videos';

  private video: Video;
  constructor(private http: HttpClient) {

  }

  /*C
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */

  //get video list
  getVideos(): Observable<Video[]>{
    return this.http.get<Video[]>(this.videosUrl);
  }

  //Adding a new video by http post
  newVideo(video: Video){

    //var videostring = JSON.stringify(video);
    return this.http.post<any>(this.videosUrl, video).pipe(
      catchError(this.handleError<Video>('newVideo', Video)));
  }

  //delete a video from the database with http delete
    deleteVideo(id: number): Observable<Video>{
      return this.http.delete<Video>(this.videosUrl + '/' + id, this.video);
  }

  /* GET videos whose title contains search term */
  getByTitle(searchstr: string): Observable<Video[]> {
    if (!searchstr.trim()) {
      // if not search term, return empty video array.
      return null;
    }
    return this.http.get<Video[]>(this.videosUrl + '/GetVideosByTitle/' + searchstr);
  }

  /* GET videos whose title contains search term */
  getById(id: number): Observable<Video> {
    return this.http.get<Video>(this.videosUrl + '/' + id, this.video);
  }

/* Treat error*/
  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //alert('${operation} failed: ${error.message}');
      return of(result as T);
    }
  }
}




