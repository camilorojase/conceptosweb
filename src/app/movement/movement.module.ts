import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MovementCreateComponent } from './movement-create/movement-create.component';
import { MovementListComponent } from './movement-list/movement-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [MovementCreateComponent],
  declarations: [MovementCreateComponent, MovementListComponent]
})
export class MovementModule { }
