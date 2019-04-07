import { Injectable } from '@angular/core';
import DirectusSDK from "@directus/sdk-js";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() {
    const client = new DirectusSDK();

    client.login({
      url: 'https://api.paulgiron.com',
      project: 'lukerenouf',
      email: 'pol.giron@gmail.com',
      password: 'pignouf',
      storage: window.localStorage
    });

    client.getItems('album')
      .catch(error => console.error(error))
      .then(data => {
        console.log(data);
      });
  }
}
