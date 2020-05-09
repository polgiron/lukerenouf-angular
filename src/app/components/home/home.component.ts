import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/services/api.service';
import { takeWhile } from 'rxjs/operators';
import { Image } from 'src/app/models/album.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private _alive: boolean = true;
  modalImage: Image;
  instagram: string;
  email: string;

  constructor(
    private api: Api
  ) { }

  async ngOnInit() {
    this.api.modalImageChannel()
      .pipe(takeWhile(() => this._alive))
      .subscribe((modalImage: Image) => {
        this.modalImage = modalImage;
      });

    const contact: any = await this.api.getContact();
    this.instagram = contact.instagram;
    this.email = contact.email;
  }

  ngOnDestroy() {
    this._alive = false;
  }
}
