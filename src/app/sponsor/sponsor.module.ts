import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { SponsorRoutingModule } from './sponsor-routing.module';
import { SponsorCreateComponent } from './sponsor-create/sponsor-create.component';

@NgModule({
  imports: [CommonModule, RouterModule,SponsorRoutingModule, ReactiveFormsModule, ToastrModule.forRoot()],
  declarations: [SponsorCreateComponent],
  exports: [SponsorCreateComponent]
})
export class SponsorModule { }
