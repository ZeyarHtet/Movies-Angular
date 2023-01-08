import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, pipe, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetmoviesService {

  constructor(
    private http: HttpClient
  ) { }

  private handleError = (error: HttpErrorResponse) => {
    console.log('Error ========');
    
    // if (error.status == 0) {
    //   console.log('Request time out.');
      

    // } else if (error.status == 404) {
    //   console.log('Sign out.')
    // }

    return throwError('Something bad happened; please try again later.')
  };

  httpRequest(url: string, body: any) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'text/html,application/json',

      }),
    };
    return this.http.post(url, body, options).pipe(catchError(this.handleError));
  }

  getMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/550?api_key=050c28541f900007285c3020069bfd62');

  }

  getPopularMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=050c28541f900007285c3020069bfd62&language=en-US')
  }

  getTopRatedMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=050c28541f900007285c3020069bfd62&language=en-US')
  }

  login(userid: string, password: string) {
    const data = {
      userid: userid,
      password: password,
    }
    return this.http.post('http://angular.tastysoftcloud.com/api/auth/signin', data);
  }
}
