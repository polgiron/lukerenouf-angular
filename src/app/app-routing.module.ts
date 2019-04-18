import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { LandpageComponent } from 'src/app/components/landpage/landpage.component';
import { AlbumComponent } from 'src/app/components/albums/album/album.component';

const routes: Routes = [
  // { path: '', redirectTo: 'albums', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: LandpageComponent },
      // { path: 'albums', component: AlbumsComponent },
      { path: ':albumId', component: AlbumComponent },
      // { path: 'photos/:photoId', component: PhotoComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
