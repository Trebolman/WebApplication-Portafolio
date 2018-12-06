//providers necesarios para las rutas
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Params } from '@angular/router';


//componentes a usar en las rutas
import { HomeComponent } from '../c_home/home.component';
import { NotFoundComponent } from '../c_notfound/notfound.component';
import { CrearComponent } from '../c_crear/crear.component';
import { MostrarComponent } from '../c_mostrar/mostrar.component';
//areglo de rutas
const appRoutes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path: 'crear',
        component: CrearComponent
    },
    {
        path: 'mostrar',
        component: MostrarComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
    
];
//exportar las rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);