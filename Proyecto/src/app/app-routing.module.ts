import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MoreComponent } from './more/more.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
 {path:"home",component:HomeComponent},
 {path:"profile",component:ProfileComponent},
 {path:"about",component:AboutComponent},
 {path:"navbar",component:NavbarComponent},
 {path:"more", component:MoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
