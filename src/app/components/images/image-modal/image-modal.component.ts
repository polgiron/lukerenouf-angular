import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Api } from 'src/app/services/api.service';
import { Image } from 'src/app/models/album.model';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {
  @ViewChild('left', { static: true }) leftElement: ElementRef;
  @ViewChild('right', { static: true }) rightElement: ElementRef;
  @Input() image: Image;
  private _resizeListener: EventListener;
  padding: number = 32;
  mobileBreakpoint: number = 767;

  constructor(
    private api: Api
  ) { }

  ngOnInit() {
    this.setDialogWidth();
    this._resizeListener = this.onWindowResize.bind(this);
    window.addEventListener('resize', this._resizeListener);
  }

  onWindowResize() {
    this.setDialogWidth();
  }

  setDialogWidth() {
    if (window.innerWidth < this.mobileBreakpoint) {
      return;
    }

    const oriWidth = this.image.width;
    const oriHeight = this.image.height;
    const rightWidth = this.rightElement.nativeElement.clientWidth;
    const maxHeight = window.innerHeight - 2 * this.padding;
    const maxWidth = window.innerWidth - 2 * this.padding - rightWidth;

    let newWidth = oriWidth * maxHeight / oriHeight;
    let newHeight = maxHeight;

    if (newWidth > maxWidth) {
      newWidth = maxWidth;
      newHeight = oriHeight * newWidth / oriWidth;
    }

    this.leftElement.nativeElement.style.width = newWidth + 'px';
    this.leftElement.nativeElement.style.height = newHeight + 'px';
  }

  close() {
    this.api.closeImageModal();
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this._resizeListener);
  }
}
