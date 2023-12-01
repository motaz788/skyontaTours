import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LuxorComponent } from './luxor/luxor.component';
import { QuadComponent } from './quad/quad.component';
import { PortoComponent } from './porto/porto.component';
import { QusierComponent } from './qusier/qusier.component';
import { TaxiComponent } from './taxi/taxi.component';
import { CairoComponent } from './cairo/cairo.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'luxor', component: LuxorComponent },
  { path: 'safari', component: QuadComponent },
  { path: 'porto', component: PortoComponent },
  { path: 'qusier', component: QusierComponent },
  { path: 'taxi', component: TaxiComponent },
  { path: 'cairo', component: CairoComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
