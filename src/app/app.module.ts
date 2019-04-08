import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './components/home/home.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumComponent } from './components/albums/album/album.component';
import { AlbumThumbComponent } from './components/albums/album-thumb/album-thumb.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PhotosComponent } from './components/photos/photos.component';
import { PhotoComponent } from './components/photos/photo/photo.component';
import { PhotoThumbComponent } from './components/photos/photo-thumb/photo-thumb.component';
import { TagsComponent } from './components/tags/tags.component';
import { LandpageComponent } from './components/landpage/landpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumsComponent,
    AlbumComponent,
    AlbumThumbComponent,
    LoaderComponent,
    PhotosComponent,
    PhotoComponent,
    PhotoThumbComponent,
    TagsComponent,
    LandpageComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
