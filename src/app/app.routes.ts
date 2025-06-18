import { Routes } from '@angular/router';
import { Products } from './pages/products/products';
import { About } from './pages/about/about';
import { Card } from './card/card';
import { Carosel } from './carosel/carosel';
import { Info } from './pages/info/info';
import { Home } from './pages/home/home';


export const routes: Routes = [{path:'products', component:Products},
    {path:'about',component:About},{path:'',component:Carosel},{path:'',component:Home}];
