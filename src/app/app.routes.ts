import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '',
        loadChildren: () => import ('./home/home.module').then (m => m.HomeModule)
    },
    {path: 'user',
        loadChildren: () => import ('./user/user.module').then(m => m.UserModule)
    },
    {path: 'shop',
        loadChildren: () => import ('./shop/shop.module').then(m => m.ShopModule)
    },
];
