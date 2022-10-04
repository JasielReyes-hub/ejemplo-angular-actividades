import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './productos/product-list/product-list.component';
import { OperasBasComponent } from './calculos/operas-bas/operas-bas.component';
import { TablaComponent } from './calculos/tabla/tabla.component';
import { CinepolisComponent } from './cinepolis/cinepolis.component';

const routes: Routes = [

  {path: '', component: ProductListComponent},
  {path: 'operasBas', component: OperasBasComponent},
  {path: 'tabla', component: TablaComponent},
  {path : 'cinepolis', component: CinepolisComponent}
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
