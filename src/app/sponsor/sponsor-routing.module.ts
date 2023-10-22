import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SponsorCreateComponent } from './sponsor-create/sponsor-create.component';

const routes: Routes = [{
 path: 'sponsors',
 children: [
   {
    path: 'create',
    component: SponsorCreateComponent
   }
 ]
}];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class SponsorRoutingModule { }
