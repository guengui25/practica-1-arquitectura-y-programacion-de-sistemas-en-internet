//======================================================================================
// Space Seed
//======================================================================================

console.log("\n Space Seed \n")

//1.------------------------------------------------------------------------------------

type superviviente = {
    origen?: string,
    nombre?: string,
    altura:number,
    edad: number,
    genero: string
};

//2.------------------------------------------------------------------------------------

type dimensiones = {
    ancho: number,
    alto: number,
    largo: number
}

interface nave {
    peso: number,
    dimensiones: dimensiones,
    velocidad: number,
    pasajeros: superviviente []
}

//3.------------------------------------------------------------------------------------

let enterpise: nave ={
    peso: 12000000000,
    dimensiones: {
        alto: 120,
        ancho: 90,
        largo: 300
    }, 
    velocidad: 36000,
    pasajeros: [
        {   
            altura: 175,
            edad: 39,
            genero: "mujer"
        },
        {   
            nombre: "Spok",
            altura: 180,
            edad: 39,
            genero: "hombre"
        },
        {   
            nombre: "Kirk",
            altura: 168,
            edad: 80,
            genero: "hombre"
        }
    ]
}

//4.------------------------------------------------------------------------------------

const con_nombre = enterpise.pasajeros.filter((elem: superviviente ) => {
    if (Object.keys(elem).includes("nombre")){
        return elem
    }
})

//Se podría meter todo en la función (los console.log), pero considero más interesante aislar los datos y llamarlos por separado

console.log("Se sabe el nombre de ",con_nombre.length,"\n","Se conocen los siguientes datos: ",Object.values(con_nombre), " \n")

//======================================================================================
//The side of paradise
//======================================================================================

console.log("The side of paradise \n")

//1.------------------------------------------------------------------------------------

interface infeccion extends superviviente {
    infectado: boolean;
}

const pasajeros_afectados: infeccion[] = [
    {   
        altura: 175,
        edad: 39,
        genero: "mujer",
        infectado: false
    },
    {   
        nombre: "Spok",
        altura: 180,
        edad: 39,
        genero: "hombre",
        infectado: false
    },
    {   
        nombre: "Kirk",
        altura: 168,
        edad: 80,
        genero: "hombre",
        infectado: false
    }
]

const listar_sanos = pasajeros_afectados.forEach((elem: infeccion )=>{
    if(elem.infectado === false && elem.nombre !== undefined) console.log("Pasajero sano:",elem.nombre)
})

listar_sanos; //Si hiciese console.log aquí daría undefined ya que forEach no devuelve nada

console.log("\n");

//2.------------------------------------------------------------------------------------

//a)
const algun_infectado = pasajeros_afectados.some((elem: infeccion)=> {
    return elem.infectado === true 
})

console.log("Hay algún infectado en la nave:",algun_infectado?"Si":"No","\n");

//b)
const todos_sanos_curados = pasajeros_afectados.every((elem:infeccion)=> {
    return elem.infectado === false
}
)

console.log("Están todos sanos:",todos_sanos_curados?"Si":"No","\n");

//c)
const proximo_infectado = pasajeros_afectados.find((elem:infeccion)=> {
    return elem.infectado === true;
})

console.log("El primer infectado de la lista de pasajeros es:",proximo_infectado ||"No hay ninguno","\n");

//======================================================================================
//The city of the edge of forever
//======================================================================================

console.log("The city of the edge of forever \n")

//1.------------------------------------------------------------------------------------

const datos_incomprensibles: any[] = ["Pahk",1999,"Somraw","Wej",4020,false,null,7888,true]

const anos = datos_incomprensibles.filter((elem:any)=> {
    return typeof elem === "number";
})

console.log("Se han separado los anos:",anos,"\n");

//2.------------------------------------------------------------------------------------

//Pese a que exista definida, como está limitado el tipo desde 1970 a la actualidad, lo cual no cumple con las normas de la Federación Unida de Planetas
//https://linuxhint.com/convert-numbers-dates-javascript/

//Creo mi propio tipo fecha y le asigno valores aleatorios a los campos que faltan

interface fecha {
    ano: number,
    mes: number,
    dia: number,
    hora: number,
    minuto: number,
    segundo: number
}

const fechas_completas = anos.map((elem: number) =>{
    
    const devolucion: fecha = {                 //Genero aleatoriamente los valores de las fechas
        ano: elem,
        mes: Math.floor(Math.random()*11+1),    //Utilizo Math.floor() para truncar
        dia: Math.floor(Math.random()*30+1),    //Utilizo Math.random()*x para generar aleatorio entre 0 y x
        hora: Math.floor(Math.random()*23),
        minuto: Math.floor(Math.random()*59),   //https://www.freecodecamp.org/espanol/news/metodo-javascript-math-random-explicado/#:~:text=Para%20obtener%20un%20n%C3%BAmero%20aleatorio,random()%20por%20un%20n%C3%BAmero
        segundo: Math.floor(Math.random()*59)
    }
    return devolucion;
})

console.log("Fechas completas:",fechas_completas,"\n");

//======================================================================================
//The trouble with Tribbles
//======================================================================================

console.log("The trouble with Tribbles \n")

//Daños y nº de tribles


//Forma array de arrays
const ListaTurboConductos: number[][] = [
    [15,10],
    [25,30],
    [5,2],
    [40,31]
]

//1.------------------------------------------------------------------------------------

const total_tribbles_mas20 = ListaTurboConductos.reduce((acc,elem) => {
    if(elem[0] > 20) return acc + elem[1];      //Si cumple la condición sumo el valor de los tribbles al acumulador
    else return acc;                            //Si no lo cumple, lo retorno sin modificarlo
},0)

console.log("Total de tribles con mas de 20 de danos:",total_tribbles_mas20,"\n");

//2.------------------------------------------------------------------------------------

const senal_lisa = ListaTurboConductos.flat();

console.log("Senal lisa:",senal_lisa,"\n");


//3.------------------------------------------------------------------------------------

const senal_peligro = ListaTurboConductos.flatMap(elem =>{ 
    if(elem[1] >= (elem[0]*0,5)) return elem+",peligro"
    else return elem+",no peligro"
})

//Se podría hacer solo con map normal, ya que al sustituir los datos de tipo number[] con string, no necesitas el flat, ya que no hay qué aplanar

//He hecho que se devuelvan los datos junto al string, no comprendo si buscas solo "peligro" y "no peligro" o todo

console.log("Senal de peligro:",senal_peligro,"\n")


//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//Forma con Objeto

interface turbo_conducto {
    danos: number,
    n_tribles: number
}

const lista_turbo_conductos: turbo_conducto [] = [
    {
    danos :15 , n_tribles:10
    },
    {
    danos :25 , n_tribles:30
    },
    {
    danos :5 , n_tribles:2
    },
    {
    danos :40 , n_tribles:31
    }
]

//1.------------------------------------------------------------------------------------

const total_tribbles_mas20_2 = lista_turbo_conductos.reduce((acc,elem) => {
    if(elem.danos > 20) return acc + elem.n_tribles;      //Si cumple la condición sumo el valor de los tribbles al acumulador
    else return acc;                                      //Si no lo cumple, lo retorno sin modificarlo
},0)

console.log("(2) Total de tribles con mas de 20 de danos:",total_tribbles_mas20_2,"\n");

//2.------------------------------------------------------------------------------------



const senal_lisa_2 = lista_turbo_conductos.map(e=>Object.values(e)).flat(); 

//Realmente al hacerlo con objeto y hacer map y luego flat sería mejor hacer flatmap(e=>Object.values(e)) pese a que sea literalmente lo mismo

console.log("(2) Senal lisa:",senal_lisa_2,"\n");


//3.------------------------------------------------------------------------------------

const senal_peligro_2 = lista_turbo_conductos.flatMap(elem =>{ 
    if(elem.n_tribles >= (elem.danos*0,5)) return Object.values(elem)+",peligro";
    else return Object.values(elem)+",no peligro";
})

//Se podría hacer solo con map normal, ya que al sustituir los datos de tipo turbo_conducto con string, no necesitas el flat

//He hecho que se devuelvan los datos junto al string, no comprendo si buscas solo "peligro" y "no peligro" o todo

console.log("(2) Senal de peligro:",senal_peligro_2,"\n");

//======================================================================================
//Deno tests
//======================================================================================

//Se debería importar las funciones y poner los test en otro fichero, pero la entrega indica un único archivo .ts

import { assertEquals } from "https://deno.land/std/testing/asserts.ts";


Deno.test("Prueba todos_sanos_curados", () => {
    assertEquals(todos_sanos_curados, true);
});

Deno.test("Prueba anos", () => {
    assertEquals(anos, [1999, 4020, 7888]);
});

Deno.test("Prueba total_tribbles_mas20", () => {
    assertEquals(total_tribbles_mas20, 61);
});