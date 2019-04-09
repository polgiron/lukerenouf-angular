import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/services/api.service';

@Component({
  selector: 'app-landpage',
  templateUrl: './landpage.component.html',
  styleUrls: ['./landpage.component.scss']
})
export class LandpageComponent implements OnInit {
  // albums: any;
  album: any;
  cover: any;

  constructor(
    private api: Api
  ) { }

  ngOnInit() {
    // this.api.getAlbums().then(albums => {
    //   this.albums = albums;
    // });

    this.api.getLandpageCover().then(cover => {
      this.cover = cover;
      this.cover.src = this.api.getThumbnail(cover.landpageimage.image.filename, 'big');
    });

    this.api.getLandpageAlbum().then(album => {
      this.album = album;
      this.album.images.forEach(image => {
        image.src = this.api.getThumbnail(image.image.image.filename);
      });
    });
  }
}
