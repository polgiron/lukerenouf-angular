import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/services/api.service';
import { fadeAnimation } from 'src/app/utils/animations';
import { Album } from 'src/app/models/album.model';

@Component({
  selector: 'app-landpage',
  templateUrl: './landpage.component.html',
  styleUrls: ['./landpage.component.scss'],
  animations: [fadeAnimation]
})
export class LandpageComponent implements OnInit {
  landpageAlbum: Album;
  text: any;

  constructor(
    private api: Api
  ) { }

  async ngOnInit() {
    this.landpageAlbum = await this.api.getLandpageAlbum();
    this.text = await this.api.getText();
  }
}
