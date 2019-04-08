import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/services/api.service';
// import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  albums: string[] = [];

  constructor(
    private api: Api,
    // private datePipe: DatePipe
  ) { }

  ngOnInit() {
    // this.api.get('albums').then((albums: any) => {
    //   this.albums = albums;
    //   albums.forEach(album => {
    //     album.year = this.datePipe.transform(album.primary_photo_extras.datetaken, 'y');
    //   });
    // });
  }
}
