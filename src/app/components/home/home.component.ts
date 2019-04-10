import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/services/api.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private _alive: boolean = true;
  modalImage: any;
  instagram: string;
  email: string;

  constructor(
    private api: Api
  ) { }

  ngOnInit() {
    this.api.modalImageChannel()
      .pipe(takeWhile(() => this._alive))
      .subscribe(modalImage => {
        this.modalImage = modalImage;
      });

    this.api.getContact().then(data => {
      this.instagram = data.instagram;
      this.email = data.email;
    });
  }

  ngOnDestroy() {
    this._alive = false;
  }
}
