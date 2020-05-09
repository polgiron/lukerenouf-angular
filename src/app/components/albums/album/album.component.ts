import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Api } from 'src/app/services/api.service';
import { fadeAnimation } from 'src/app/utils/animations';
import { Album } from 'src/app/models/album.model';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  animations: [fadeAnimation]
})
export class AlbumComponent implements OnInit {
  album: Album;

  constructor(
    private route: ActivatedRoute,
    private api: Api
  ) { }

  ngOnInit() {
    this.route.params.subscribe(async (params: Params) => {
      const albumId = params['albumId'];
      this.album = await this.api.getAlbum(albumId);
    });
  }
}
