# Componentes
Se puede crear componente s manualmente y automaticamente
___
## Componentes automáticos
Para generar un componente entramos a la cosnola y digitamos lo siguiente
```
ng generate component ruta_archivo/nombreComponente
```
Esto generara cuatro archivos 
```
app
  ruta_componente
    nombre_componente
      nombre_componente.component.css (estilo del componente)
      nombre_componente.component.html (archivo html)
      nombre_componente.component_spec.ts (archivo para hacer test)
      nombre_componente.component.ts (Donde se encuentra el nombre del componente)
    
```
Tambien en el archivo app.module.ts se agrego
las siguientes lineas
```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeadComponent } from './ruta_componente/nombre_componente/nombre_componente.component';

@NgModule({
  declarations: [
    AppComponent,
    NombreComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
