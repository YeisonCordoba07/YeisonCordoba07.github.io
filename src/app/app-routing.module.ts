import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes, Scroll} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ProyectosComponent} from "./pages/proyectos/proyectos.component";
import {ViewportScroller} from "@angular/common";
import {filter} from "rxjs";


const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'proyectos/:indexProject', component: ProyectosComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash:true, scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule {

    /*
    constructor(router: Router, viewportScroller: ViewportScroller) {
        router.events.pipe(
            filter((e): e is Scroll => e instanceof Scroll)
        ).subscribe((e) => {
            if (e.position) {
                // 🔙 CASO: El usuario regresa atrás.
                // Restauramos la posición guardada de forma síncrona/inmediata
                viewportScroller.scrollToPosition(e.position);
            } else {
                // 🚀 CASO: El usuario va hacia adelante (Click en un proyecto).
                // Forzamos la posición (0,0) instantáneamente ANTES de pintar la vista
                viewportScroller.scrollToPosition([0, 0]);
            }
        });
    }
    */
}
