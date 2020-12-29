import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from './home/home.component';
import{AdduserComponent} from './adduser/adduser.component';
import{CheckuserComponent} from './checkuser/checkuser.component'


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'adduser',component:AdduserComponent},
  {path:'checkuser',component:CheckuserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
