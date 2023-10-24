# DIRECTIVAS Y PIPES
___
## DIRECTIVAS
Sirve para controlar la apariencia y el comportamiento de los componentes de angular

se cuenta con dos tipos de directivas
* [Directivas de atributos](DIRECTIVAS_ATRIBUTOS.md)
* [Directivas estructurales](DIRECTIVAS_ESTRUCTURALES.md)
### Creacion de una directiva
en consola escribimos lo siguiente
```
ng g c rutaDirectiva/nombreDirectiva
```
Este comando genera 4 archivos y una carpeta donde estan los archivos
```
app
  rutaDirectiva
    nombreDirectiva
      nombreDirectiva.component.css
      nombreDirectiva.component.html
      nombreDirectiva.component.spec.ts
      nombreDirectiva.component.ts
  
```
se agregara en el archio **app.module.ts** la importacion de la directiva creada
```
...
...
import { NombreDirectivaComponent } from './rutaDirectiva/nombreDirectiva/nombreDirectiva.component';
...
...

@NgModule({
  declarations: [
    AppComponent,
    ...
    ...
    NombreDirectivaComponent
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
___
## PIPES
Sirve para transformar los dados antes de mostrarlos en la interfas de usuario
se utilia mediante el **@pipes**, tenemos algunos principales
* Principales
  * Uppercase
  * Date
  * PipeTransform
Se puede crear propios pipes personalizado con la interfaz PipeTransform
