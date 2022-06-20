import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileScreenComponent } from './modules/profile-screen/profile-screen.component';

const routes: Routes = [
  {path:'',component:ProfileScreenComponent},
  {path:'contact/:id',component:ProfileScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
