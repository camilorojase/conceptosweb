import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ArtworkModule } from './artwork/artwork.module';
import { MovementModule } from './movement/movement.module';
import { MuseumModule } from './museum/museum.module';
import { ArtistModule } from './artist/artist.module';
import { SponsorModule } from './sponsor/sponsor.module';
import { ExhibicionModule } from './exhibicion/exhibicion.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { MuseumRoutingModule } from './museum/museum-routing.module';
import { ArtistRoutingModule } from './artist/artist-routing.module';
import { ArtworkRoutingModule } from './artwork/artwork-routing.module';
import { ExhibicionRoutingModule } from './exhibicion/exhibicion-routing.module';
import { SponsorRoutingModule } from './sponsor/sponsor-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { HttpErrorInterceptorService } from './interceptors/httpErrorResponse.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ArtworkModule,
    SponsorModule,
    MovementModule,
    ArtistModule,
    ExhibicionModule,
    MuseumModule,
    SharedModule,
    HomeModule,
    HomeRoutingModule,
    MuseumRoutingModule,
    ArtistRoutingModule,
    ArtworkRoutingModule,
    ExhibicionRoutingModule,
    SponsorRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
