import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/services/api.service';

@Component({
  selector: 'app-landpage',
  templateUrl: './landpage.component.html',
  styleUrls: ['./landpage.component.scss']
})
export class LandpageComponent implements OnInit {
  album: any;
  cover: any;

  constructor(
    private api: Api
  ) { }

  ngOnInit() {
    this.api.getLandpageCover().then(cover => {
      this.cover = cover.landpageimage;
    });

    this.api.getLandpageAlbum().then(album => {
      this.album = album;
    });
  }
}
