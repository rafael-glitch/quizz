import { identifierModuleUrl } from "@angular/compiler"

export interface Climas {
    id:string;
    nombre:string;
    Celcius:number;
    fahrenheit:number;
    imagen:string;
}
const ListaClima:Array<Climas>=

    [
        {id:"lunes", nombre:"soleado",Celcius:18,fahrenheit:64.4,imagen:"soleado"},
        {id:"martes",nombre:"lluvioso",Celcius:9,fahrenheit:48.2,imagen:"lluvioso"},
        {id:"miercoles",nombre:"nublado",Celcius:11,fahrenheit:51.8,imagen:"nublado"},
        {id:"jueves",nombre:"tormenta",Celcius:7,fahrenheit:44.6,imagen:"tormenta"},
        {id:"viernes",nombre:"soleado",Celcius:22,fahrenheit:71.6,imagen:"soleado"},
        {id:"savado",nombre:"lluvioso",Celcius:10,fahrenheit:50,imagen:"lluvioso"},,
        {id:"viernes",nombre:"tormenta",Celcius:7,fahrenheit:44.6,imagen:"tormenta"},  
    ];

