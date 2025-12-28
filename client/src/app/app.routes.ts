import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/accuntbuilding/register/register.component';
import { LoginComponent } from './components/accuntbuilding/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MembersComponent } from './components/members/members.component';
import { ShopComponent } from './components/shop/shop.component';
import { TechomeComponent } from './components/techome/techome.component';
import { BuihomeComponent } from './components/buihome/buihome.component';
import { RegistertecComponent } from './components/accunttec/registertec/registertec.component';
import { LogintecComponent } from './components/accunttec/logintec/logintec.component';
import { DorehiComponent } from './components/dorehi/dorehi.component';
import { authLoggedInGuard } from './guards/auth-logged-in.guard';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    // { path: 'home', component: HomeComponent },
    // { path: 'members/member-card', component: MemberCardComponent },
    { path: 'account/buildingregister', component: RegisterComponent, canActivate: [authLoggedInGuard] },
    { path: 'account/loginbuilding', component: LoginComponent, canActivate: [authLoggedInGuard] },
    { path: 'account/tecregister', component: RegistertecComponent, canActivate: [authLoggedInGuard] },
    { path: 'account/logintec', component: LogintecComponent, canActivate: [authLoggedInGuard] },
    { path: 'footer', component: FooterComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: 'members/member', component: MembersComponent },
    { path: 'dorahi', component: DorehiComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'hometec', component: TechomeComponent, canActivate: [authGuard]},
    { path: 'homebui', component: BuihomeComponent, canActivate: [authGuard] },
    { path: '**', component: NotfoundComponent },
];
