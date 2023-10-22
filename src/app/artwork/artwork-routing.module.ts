import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtworkAssociateImageComponent } from './artwork-associate-image/artwork-associate-image.component';
import { ArtworkCreateComponent } from './artwork-create/artwork-create.component';
import { ArtworkDetailComponent } from './artwork-detail/artwork-detail.component';
import { ArtworkListComponent } from './artwork-list/artwork-list.component';


const routes: Routes = [{
 path: 'artworks',
 children: [
   {
    path: 'create/:artistid',
    component: ArtworkCreateComponent
   },
   {
     path: 'list',
     component: ArtworkListComponent
   },
   {
     path: ':id',
     component: ArtworkDetailComponent
   },
   {
    path: 'list/:id',
    component: ArtworkListComponent
   },
   {
    path: 'association/:artistid/:artworkid',
    component: ArtworkAssociateImageComponent
   }
 ]
}];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class ArtworkRoutingModule { }
