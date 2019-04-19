import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/services/api.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  albums: any;

  constructor(
    private api: Api
  ) { }

  ngOnInit() {
    this.api.getAlbums().then(albums => {
      this.albums = albums;
      // console.log(albums);

      this.albums.forEach(album => {
        if (album.cover_image) {
          album.coverImageSrc = this.api.getThumbnail(album.cover_image.image.filename, 'small');
        }
      });
    });
  }
}
