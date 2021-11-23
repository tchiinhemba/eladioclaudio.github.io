import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { ThankComponent } from '../pages/thank/thank.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'thank', component: ThankComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
