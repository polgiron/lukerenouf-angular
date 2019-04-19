import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/services/api.service';
import { fadeAnimation } from 'src/app/utils/animations';

@Component({
  selector: 'app-landpage',
  templateUrl: './landpage.component.html',
  styleUrls: ['./landpage.component.scss'],
  animations: [fadeAnimation]
})
export class LandpageComponent implements OnInit {
  landpageAlbum: any;
  text: any;

  constructor(
    private api: Api
  ) { }

  ngOnInit() {
    this.api.getLandpageAlbum().then(landpageAlbum => {
      this.landpageAlbum = landpageAlbum;
      console.log(this.landpageAlbum);
      console.log(landpageAlbum.cover_image.image);
    });

    this.api.getText().then(text => {
      // console.log(text);
      this.text = text;
    });
  }
}
