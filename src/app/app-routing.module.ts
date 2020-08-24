import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService } from './auth/guard/auth-guard.service'
import { AdminComponent } from './admin/admin/admin.component';

const routes: Routes = [

  {path:'main', loadChildren:'./main/main.module#MainModule',canActivate:[AuthGuardService]},
  {path: 'admin', component: AdminComponent},



  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
