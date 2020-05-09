import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/services/api.service';
import { Album } from 'src/app/models/album.model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];

  constructor(
    private api: Api
  ) { }

  async ngOnInit() {
    this.albums = await this.api.getAlbums();
  }
}
