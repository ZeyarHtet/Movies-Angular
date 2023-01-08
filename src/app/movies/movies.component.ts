import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GetmoviesService } from '../getmovies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {

  loginSubscription!: Subscription;
  loading: boolean = false;
  constructor(
    private getmovieservice: GetmoviesService,
    private routes: Router,

  ) { }

  ngOnDestroy(): void {
    this.loginSubscription && this.loginSubscription.unsubscribe();
  }


  async ngOnInit(): Promise<void> {
    this.getPopularMovies();


  }

  moviename = "";
  imgurl = '';

  popularMovies = [];

  getSingleMovie() {
    this.getmovieservice.getMovies().subscribe((response: any) => {
      this.moviename = response['original_title'];
      this.imgurl = 'http://image.tmdb.org/t/p/w500/' + response['backdrop_path'];

    });

  }

  getPopularMovies() {
    this.getmovieservice.getPopularMovies().subscribe((response: any) => {
      // this.popularMovies = response['results'];
      this.popularMovies = response.results;


    });
  }
  login() {
    this.loading = true;
    this.loginSubscription = this.getmovieservice.login('1234', 'Admin').subscribe({
      next: (response) => {
        this.loading = false;
        console.log(response);

      },
      error: (error) => {
        this.loading = false;
        console.log(error);

      }
    })
  }

  gotohome() {
    this.routes.navigate(['home']);
  }



}
