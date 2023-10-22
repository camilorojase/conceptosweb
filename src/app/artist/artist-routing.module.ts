import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovementCreateComponent } from '../movement/movement-create/movement-create.component';
import { MovementListComponent } from '../movement/movement-list/movement-list.component';
import { ArtistCreateComponent } from './artist-create/artist-create.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { ArtistListComponent } from './artist-list/artist-list.component';


const routes: Routes = [{
 path: 'artists', component:ArtistListComponent,
 children: [
   {
     path: 'detail/:id_artist',
     component: ArtistDetailComponent,
   },
   {
     path: 'createArtist',
     component: ArtistCreateComponent
   },
   {
     path: 'createArtist/:id_artist',
     component: ArtistCreateComponent
   },
   {
     path: 'createMovement/:id_artist',
     component: MovementCreateComponent
   },
   {
     path: 'createMovement/:id_artist/:id_movement',
     component: MovementCreateComponent
   },
   {
     path: 'addMovement/:id_artist',
     component: MovementListComponent
   },
   {
     path: 'addMovement/:id_artist/:id_movement',
     component: MovementCreateComponent
   },
 ]
}];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class ArtistRoutingModule { }
