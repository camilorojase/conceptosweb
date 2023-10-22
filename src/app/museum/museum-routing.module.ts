import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MuseumCreateComponent } from './museum-create/museum-create.component';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';
import { MuseumListComponent } from './museum-list/museum-list.component';


const routes: Routes = [{
 path: 'museums',
 children: [
   {
     path: 'list',
     component: MuseumListComponent
   },
   {
     path: ':id',
     component: MuseumDetailComponent
   },
   {
    path: 'list/:id',
    component: MuseumListComponent
   },
   {
    path: 'add',
    component: MuseumCreateComponent
   }
 ]
}];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class MuseumRoutingModule { }
