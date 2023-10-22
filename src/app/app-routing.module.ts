import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistListComponent } from './artist/artist-list/artist-list.component';
import { ArtworkCreateComponent } from './artwork/artwork-create/artwork-create.component';
import { ArtworkListComponent } from './artwork/artwork-list/artwork-list.component';
import { ExhibicionListComponent } from './exhibicion/exhibicion-list/exhibicion-list.component';
import { HomeComponent } from './home/home.component';
import { MuseumListComponent } from './museum/museum-list/museum-list.component';
import { LayoutComponent } from './shared/layout/layout.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'artworks', children: [{ path: 'create', component: ArtworkCreateComponent }, { path: 'list', component: ArtworkListComponent }],
        data: {}
      },
      { path: 'exhibicions', data: {}, component: ExhibicionListComponent },
      { path: 'museums', data: {}, component: MuseumListComponent },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
