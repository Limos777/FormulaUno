import { Routes } from "@angular/router";
import { Home } from "./home/home";
import { GranPremio } from "./gran-premio/gran-premio";
import { ElencoGranPremio } from "./elenco-gran-premio/elenco-gran-premio";
 
export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home page'
    },
    {
        path: '',
        component: GranPremio,
        title: 'Dettagli del gran premio'
    },
    {
        path: '',
        component: ElencoGranPremio,
        title: 'Elenco del gran premio'
    }
]