import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { fadeOutAnimation } from 'src/app/utils/animations';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  animations: [fadeOutAnimation]
})
export class ImageComponent implements OnInit {
  @ViewChild('wrapper', { static: true }) wrapper: ElementRef;
  @Input() src: string;
  @Input() width: number;
  @Input() height: number;
  @Input() albumCover: boolean;
  isLoaded: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (!this.albumCover) {
      const ratio = this.height / this.width * 100;
      this.wrapper.nativeElement.style.paddingBottom = ratio + '%';
    }
  }
}
