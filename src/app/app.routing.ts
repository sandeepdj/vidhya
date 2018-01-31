import { NgModule } from '@angular/core';
import { ExtraOptions,Routes, RouterModule} from "@angular/router";
 
import { 
  DashBoardComponent,
  HeaderComponent,
  SidebarComponent,
  LayoutComponent,
  FooterComponent,
  HomePageComponent
 } from './pages/index';
 
 
const ROUTES: Routes = [
    {path: '', redirectTo: 'app', pathMatch: 'full'},
    // { path: 'Login', component: LoginComponent },
    { 
      path: 'app', component: LayoutComponent, 
      children: [
        {path: '', redirectTo: 'Home',pathMatch: 'full'}, 
        {path: 'Home', component: HomePageComponent}, 
        {path: 'Dashboard', component: DashBoardComponent}, 
      ]
    }
 ];

const config: ExtraOptions = {
    useHash: true,
};

  @NgModule({
    imports: [RouterModule.forRoot(ROUTES, config)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {
  }  