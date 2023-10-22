import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistListComponent } from './artist-list/artist-list.component'
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MovementModule } from '../movement/movement.module';
import { ArtistCreateComponent } from './artist-create/artist-create.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MovementModule,
    FormsModule,
    NgbModule
  ],
  exports: [ArtistListComponent],
  declarations: [ArtistListComponent, ArtistDetailComponent, ArtistCreateComponent]
})
export class ArtistModule { }
