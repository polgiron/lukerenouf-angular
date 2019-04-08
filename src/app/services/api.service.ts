import { Injectable } from '@angular/core';
import DirectusSDK from "@directus/sdk-js";

@Injectable({
  providedIn: 'root'
})
export class Api {
  client: any;

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
      // url: 'http://api.paulgiron.com',
      url: 'http://139.59.186.163',
      project: 'lukerenouf'
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

  getLandpageAlbum() {
    return this.client.getItems('album?filter[title][eq]=landpage&fields=*.*.*.*')
      .catch(error => console.error(error))
      .then(data => {
        // console.log(data);
        console.log(data.data[0]);
        return data.data[0];
      });
  }

  getAlbums() {
    return this.client.getItems('album?fields=*.*.*.*')
      .catch(error => console.error(error))
      .then(data => {
        console.log(data);
        // console.log(data.data[0]);
        return data.data;
      });
  }
}
