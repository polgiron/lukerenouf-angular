import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/services/api.service';

@Component({
  selector: 'app-landpage',
  templateUrl: './landpage.component.html',
  styleUrls: ['./landpage.component.scss']
})
export class LandpageComponent implements OnInit {
  landpageAlbum: any;

  constructor(
    private api: Api
  ) { }

  ngOnInit() {
    // this.api.getLandpageCover().then(cover => {
    //   this.cover = cover.landpageimage;
    // });

    this.api.getLandpageAlbum().then(landpageAlbum => {
      this.landpageAlbum = landpageAlbum;
      console.log(this.landpageAlbum);
      console.log(landpageAlbum.cover_image.image);
    });
  }
}
