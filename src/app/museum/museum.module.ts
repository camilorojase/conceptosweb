import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuseumListComponent } from './museum-list/museum-list.component';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';
import { RouterModule } from '@angular/router';
import { MuseumCreateComponent } from './museum-create/museum-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [MuseumListComponent, MuseumDetailComponent, MuseumCreateComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, ToastrModule.forRoot()],
  exports: [MuseumListComponent]
})
export class MuseumModule { }
