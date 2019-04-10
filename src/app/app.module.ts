import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './components/home/home.component';
import { LoaderComponent } from './components/loader/loader.component';
import { TagsComponent } from './components/tags/tags.component';
import { LandpageComponent } from './components/landpage/landpage.component';
import { ImageThumbComponent } from './components/images/image-thumb/image-thumb.component';
import { ImageModalComponent } from './components/images/image-modal/image-modal.component';
import { ImageComponent } from './components/images/image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoaderComponent,
    TagsComponent,
    LandpageComponent,
    ImageThumbComponent,
    ImageModalComponent,
    ImageComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
