import { Injectable } from '@angular/core';
import DirectusSDK from '@directus/sdk-js';
import { Observable, Subject } from 'rxjs';
import { Album, Image } from 'src/app/models/album.model';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private _modalImage: Subject<Image> = new Subject<Image>();
  client: any;
  domain: string = 'https://api.paulgiron.com';
  project: string = 'lukerenouf';

  constructor() {
    this.client = new DirectusSDK({
      url: this.domain,
      project: this.project,
      mode: 'jwt'
    });
  }

  public modalImageChannel(): Observable<Image> {
    return this._modalImage.asObservable();
  }

  openImageModal(image: Image) {
    this._modalImage.next(image);
    document.body.classList.add('is-static');
  }

  closeImageModal() {
    this._modalImage.next(null);
    document.body.classList.remove('is-static');
  }

  async getLandpageAlbum(): Promise<Album> {
    const response: any = await this.client.getItems('album?filter[title][eq]=landpage&fields=*.*.*.*.*');
    // console.log(response);
    return this.parseAlbums(response.data)[0];
  }

  replaceLineReturn(str: string): string {
    if (str) {
      return str.replace('{alinea}', '<span class="alinea"></span>').replace(/(?:\r\n|\r|\n)/g, '<br>');
    } else {
      return '';
    }
  }

  async getAlbums(): Promise<Album[]> {
    const response: any = await this.client.getItems('album?fields=*.*.*.*');
    const albums: Album[] = this.parseAlbums(response.data);
    return albums.filter(album => album.title != 'Landpage');
  }

  async getAlbum(albumId: number): Promise<Album> {
    const response: any = await this.client.getItems(`album?filter[id][eq]=${albumId}&fields=*.*.*.*.*`);
    // console.log(response);
    return this.parseAlbum(response.data[0]);
  }

  async getContact() {
    const response: any = await this.client.getItems('contact');
    return response.data[0];
  }

  async getText() {
    const response: any = await this.client.getItems('text?fields=*');
    return response.data[0];
  }

  parseAlbums(data: any): Album[] {
    return data.map((entry: any) => this.parseAlbum(entry));
  }

  parseAlbum(data: any): Album {
    return ({
      id: data.id,
      title: data.title,
      description: this.replaceLineReturn(data.description),
      images: this.parseImages(data.images),
      cover: this.parseImage(data.cover_image)
    });
  }

  parseImages(data: any): Image[] {
    return data.map((entry: any) => this.parseImage(entry.image));
  }

  parseImage(data: any): Image {
    return ({
      id: data.id,
      title: data.title,
      description: this.replaceLineReturn(data.description),
      width: data.image.width,
      height: data.image.height,
      bigUrl: `${this.domain}/${this.project}/assets/${data.image.private_hash}?key=thumb_big`,
      thumbUrl: `${this.domain}/${this.project}/assets/${data.image.private_hash}?key=thumb_small`,
      tags: this.parseTags(data.tags)
    });
  }

  parseTags(data: any): string[] {
    const tags: string[] = [];
    if (data) {
      data.forEach((entry: any) => {
        tags.push(entry.tag.tag);
      });
    }
    return tags;
  }
}
