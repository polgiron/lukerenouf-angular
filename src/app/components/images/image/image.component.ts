import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
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
  @Input() landpageCover: boolean;
  @Output() hasLoaded: EventEmitter<void> = new EventEmitter();
  isLoaded: boolean = false;
  mobileBreakpoint: number = 767;

  constructor() { }

  ngOnInit(): void {
    if (this.albumCover || this.landpageCover && window.innerWidth > this.mobileBreakpoint) {
      return;
    }
    const ratio = this.height / this.width * 100;
    this.wrapper.nativeElement.style.paddingBottom = ratio + '%';
  }

  onLoad(): void {
    this.isLoaded = true;
    this.hasLoaded.emit();
  }
}
