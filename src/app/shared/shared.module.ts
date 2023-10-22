import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    HeaderComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule
  ],
  exports:[LayoutComponent,
    FooterComponent,
    HeaderComponent]
})
export class SharedModule { }
