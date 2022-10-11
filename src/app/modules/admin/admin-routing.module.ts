import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CreateAppComponent } from './components/create-app/create-app.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  {
    path: 'create-app', component: CreateAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
