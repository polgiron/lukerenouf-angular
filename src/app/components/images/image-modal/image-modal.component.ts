import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Api } from 'src/app/services/api.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {
  @ViewChild('left') leftElement: ElementRef;
  @ViewChild('right') rightElement: ElementRef;
  @Input() image: any;
  private _resizeListener: EventListener;
  // private _alive: boolean = true;
  // image: any;
  padding: number = 32;
  imageSrc: string;

  constructor(
    private api: Api
  ) { }

  ngOnInit() {
    // this.api.modalImageChannel()
    //   .pipe(takeWhile(() => this._alive))
    //   .subscribe(image => {
    //     this.image = image;
    //     if (image) {
    //       this.imageSrc = this.image.image.data.full_url;
    //       this.setDialogWidth();
    //     }
    //   });

    this.imageSrc = this.image.image.data.full_url;
    this.setDialogWidth();

    this._resizeListener = this.onWindowResize.bind(this);
    window.addEventListener('resize', this._resizeListener);
  }

  onWindowResize() {
    this.setDialogWidth();
  }

  setDialogWidth() {
    const oriWidth = this.image.image.width;
    const oriHeight = this.image.image.height;
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
  //   this._alive = false;
    window.removeEventListener('resize', this._resizeListener);
  }
}
