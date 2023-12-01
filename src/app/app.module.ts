import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from './shared/shared.module';
import { QuadComponent } from './quad/quad.component';
import { LuxorComponent } from './luxor/luxor.component';
import { CairoComponent } from './cairo/cairo.component';
import { QusierComponent } from './qusier/qusier.component';
import { PortoComponent } from './porto/porto.component';
import { TaxiComponent } from './taxi/taxi.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    QuadComponent,
    LuxorComponent,
    CairoComponent,
    QusierComponent,
    PortoComponent,
    TaxiComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
