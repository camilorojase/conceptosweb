import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibicionListComponent } from './exhibicion-list/exhibicion-list.component';
import { ExhibicionDetailComponent } from './exhibicion-detail/exhibicion-detail.component';
import { ExhibicionCreateComponent } from './exhibicion-create/exhibicion-create.component';
import { ExhibicionRoutingModule } from './exhibicion-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { SponsorModule } from '../sponsor/sponsor.module';
import { SponsorCreateComponent } from '../sponsor/sponsor-create/sponsor-create.component';
import { ExhibicionAssociateArtworkComponent } from './exhibicion-associate-artwork/exhibicion-associate-artwork.component';

@NgModule({
  imports: [CommonModule, RouterModule,ExhibicionRoutingModule, ReactiveFormsModule,
    ToastrModule.forRoot(), SponsorModule],
  exports: [ExhibicionListComponent],
  declarations: [ExhibicionListComponent,ExhibicionDetailComponent,ExhibicionCreateComponent, ExhibicionAssociateArtworkComponent]
})
export class ExhibicionModule { }
