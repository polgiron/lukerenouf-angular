import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/services/api.service';

@Component({
  selector: 'app-landpage',
  templateUrl: './landpage.component.html',
  styleUrls: ['./landpage.component.scss']
})
export class LandpageComponent implements OnInit {
  // albums: any;
  isLoaded: boolean = false;
  album: any;

  constructor(
    private api: Api
  ) { }

  ngOnInit() {
    // this.api.getAlbums().then(albums => {
    //   this.albums = albums;
    // });
    this.api.getLandpageAlbum().then(album => {
      this.album = album;
    });
  }
}
