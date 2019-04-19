import { Injectable } from '@angular/core';
import DirectusSDK from "@directus/sdk-js";
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private _modalImage: Subject<any> = new Subject<any>();
  client: any;
  domain: string = 'https://api.paulgiron.com';
  project: string = 'lukerenouf';

  constructor() {
    // this.client = new DirectusSDK();
    // this.client.login({
    //   url: 'http://api.paulgiron.com',
    //   project: 'lukerenouf',
    //   // email: 'pol.giron@gmail.com',
    //   email: 'luke@gmail.com',
    //   password: 'pignouf',
    //   storage: window.localStorage
    // });

    this.client = new DirectusSDK({
      url: this.domain,
      project: this.project
    });

    // client.getItems('image?fields=*.*.*')
    // client.getItems('album?fields=*.*.*.*.*')
    // client.getItems('album?filter[title][eq]=landpage')
    // // client.getItems('album')
    //   .catch(error => console.error(error))
    //   .then(data => {
    //     console.log(data);
    //     // console.log(data.data[0]);
    //   });
  }

  public modalImageChannel(): Observable<number> {
    return this._modalImage.asObservable();
  }

  openImageModal(image: any) {
    this._modalImage.next(image);
    document.body.classList.add('is-static');
  }

  closeImageModal() {
    this._modalImage.next(null);
    document.body.classList.remove('is-static');
  }

  getText() {
    return this.client.getItems('text?fields=*')
      .catch(error => console.error(error))
      .then(data => {
        // console.log(data.data[0]);
        return data.data[0];
      });
  }

  getLandpageAlbum() {
    return this.client.getItems('album?filter[title][eq]=landpage&fields=*.*.*.*.*')
      .catch(error => console.error(error))
      .then(data => {
        // console.log(data);
        // console.log(data.data[0]);
        return data.data[0];
      });
  }

  getAlbums() {
    // return this.client.getItems('album?fields=*.*.*.*')
    return this.client.getItems('album?fields=*.*.*')
      .catch(error => console.error(error))
      .then(data => {
        // console.log(data);
        // console.log(data.data[0]);
        return data.data;
      });
  }

  getAlbum(albumId: number) {
    return this.client.getItems(`album?filter[id][eq]=${albumId}&fields=*.*.*.*.*`)
      .catch(error => console.error(error))
      .then(data => {
        // console.log(data);
        // console.log(data.data[0]);
        return data.data[0];
      });
  }

  getContact() {
    return this.client.getItems('contact')
      .catch(error => console.error(error))
      .then(data => {
        // console.log(data);
        // console.log(data.data[0]);
        return data.data[0];
      });
  }

  getThumbnail(filename: string, size?: string) {
    let dimensions = '800/800';

    switch (size) {
      case 'small':
        dimensions = '300/300';
        break;
      case 'big':
        dimensions = '1024/1024';
        break;
    }

    return `${this.domain}/thumbnail/${this.project}/${dimensions}/contain/best/${filename}`;
  }
}
