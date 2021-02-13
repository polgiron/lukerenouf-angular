import { Component, OnInit, Input } from '@angular/core';
import { Api } from 'src/app/services/api.service';
import { Image } from 'src/app/models/album.model';

@Component({
  selector: 'app-image-thumb',
  templateUrl: './image-thumb.component.html',
  styleUrls: ['./image-thumb.component.scss']
})
export class ImageThumbComponent implements OnInit {
  @Input() image: Image;
  @Input() cover: boolean = false;
  @Input() landpageCover: boolean = false;
  isLoaded: boolean = false;

  constructor(
    private api: Api
  ) { }

  ngOnInit(): void { }

  onClick(): void {
    this.api.openImageModal(this.image);
  }

  hasLoaded(): void {
    setTimeout(() => {
      this.isLoaded = true;
    }, 600);
  }
}
