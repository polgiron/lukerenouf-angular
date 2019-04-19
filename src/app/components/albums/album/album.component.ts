import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Api } from 'src/app/services/api.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  album: any;

  constructor(
    private route: ActivatedRoute,
    private api: Api
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const albumId = params['albumId'];

      this.api.getAlbum(albumId).then((album: any) => {
        this.album = album;
        // console.log(album);
        if (album.cover_image) {
          album.coverImageSrc = this.api.getThumbnail(album.cover_image.image.filename, 'small');
        }
      });
    });
  }
}
