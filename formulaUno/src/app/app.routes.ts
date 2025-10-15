import { Routes } from "@angular/router";
import { Home } from "./home/home";
import { GranPremi } from "./gran-premi/gran-premi";
import { GranPremio } from "./gran-premio/gran-premio";
 
export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home page'
    },
    {
        path: 'gran-premi/:id',
        component: GranPremi,
        title: 'Dettagli del gran premio'
    },
    {
        path: 'gran-premi',
        component: GranPremio,
        title: 'Elenco del gran premio'
    }
]