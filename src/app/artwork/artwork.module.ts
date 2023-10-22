import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtworkListComponent } from './artwork-list/artwork-list.component'
import { ArtworkDetailComponent } from './artwork-detail/artwork-detail.component';
import { RouterModule } from '@angular/router';
import { ArtworkCreateComponent } from './artwork-create/artwork-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArtworkRoutingModule } from './artwork-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { ArtworkAssociateImageComponent } from './artwork-associate-image/artwork-associate-image.component';

@NgModule({
  imports: [CommonModule,RouterModule , ReactiveFormsModule, ArtworkRoutingModule , ToastrModule.forRoot()],
  exports: [ArtworkListComponent],
  declarations: [ArtworkListComponent, ArtworkDetailComponent, ArtworkCreateComponent, ArtworkAssociateImageComponent]
})
export class ArtworkModule { }
