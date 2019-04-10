import { Component, OnInit, Input } from '@angular/core';
import { Api } from 'src/app/services/api.service';

@Component({
  selector: 'app-image-thumb',
  templateUrl: './image-thumb.component.html',
  styleUrls: ['./image-thumb.component.scss']
})
export class ImageThumbComponent implements OnInit {
  @Input() image;
  @Input() cover: boolean = false;
  imageSrc: string;

  constructor(
    private api: Api
  ) { }

  ngOnInit() {
    // console.log(this.image);
    this.imageSrc = this.api.getThumbnail(this.image.image.filename, this.cover ? 'big' : null);
  }

  onClick() {
    this.api.openImageModal(this.image);
  }
}
