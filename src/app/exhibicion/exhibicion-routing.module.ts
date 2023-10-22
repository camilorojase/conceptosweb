import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExhibicionDetailComponent } from './exhibicion-detail/exhibicion-detail.component';
import { ExhibicionListComponent } from './exhibicion-list/exhibicion-list.component';
import { ExhibicionCreateComponent } from './exhibicion-create/exhibicion-create.component';
import { ExhibicionAssociateArtworkComponent } from './exhibicion-associate-artwork/exhibicion-associate-artwork.component';

const routes: Routes = [{
 path: 'exhibitions',
 children: [
   {
    path: 'create/:museumId',
    component: ExhibicionCreateComponent
   },
   {
     path: 'list',
     component: ExhibicionListComponent
   },
   {
     path: ':id',
     component: ExhibicionDetailComponent
   },
   {
    path: 'list/:id',
    component: ExhibicionListComponent
   },
   {
    path: 'list/:id/:museumId',
    component: ExhibicionListComponent
   },
   {
     path: ':id/:museumId',
     component: ExhibicionDetailComponent
   },
   {
    path: 'add/:exhibitionId/:museumId',
    component: ExhibicionAssociateArtworkComponent
   }
 ]
}];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class ExhibicionRoutingModule { }
