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

export const routes: Routes = [
    { path: '', component: HomeComponent },
    // { path: 'home', component: HomeComponent },
    // { path: 'members/member-card', component: MemberCardComponent },
    { path: 'account/buildingregister', component: RegisterComponent },
    { path: 'account/loginbuilding', component: LoginComponent },
    { path: 'account/tecregister', component: RegistertecComponent },
    { path: 'account/logintec', component: LogintecComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: 'members/member', component: MembersComponent },
    { path: 'dorahi', component: DorehiComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'hometec', component: TechomeComponent },
    { path: 'homebui', component: BuihomeComponent },
    { path: '**', component: NotfoundComponent },
];
