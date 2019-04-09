import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-thumb',
  templateUrl: './image-thumb.component.html',
  styleUrls: ['./image-thumb.component.scss']
})
export class ImageThumbComponent implements OnInit {
  @Input() image;
  isLoaded: boolean = false;

  constructor() { }

  ngOnInit() {
  }
}
