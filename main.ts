//======================================================================================
// Space Seed
//======================================================================================
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

const num_nombres = (nave: nave) => {

    const con_nombre = nave.pasajeros.filter((elem: superviviente ) => {
        if (Object.keys(elem).includes("nombre")){
            return elem
        }
    })

    console.log("Se sabe el nombre de ",con_nombre.length)

    console.log(Object.values(con_nombre))
}

num_nombres(enterpise);
console.log(" ");

//======================================================================================
//The side of paradise
//======================================================================================

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

pasajeros_afectados.forEach((elem: infeccion )=>{
    if(elem.infectado === false && elem.nombre) console.log("Pasajero sano:",elem.nombre)
})


//2.------------------------------------------------------------------------------------

const algun_infectado = pasajeros_afectados.some((elem: infeccion)=> {
    return elem.infectado === false 
})

//console.log("Hay algún infectado en la nave:",algun_infectado);

const todos_sanos_curados = pasajeros_afectados.every((elem:infeccion)=> {
    return elem.infectado === false
}
)

//console.log("Están todos sanos:",todos_sanos_curados);

const proximo_infectado = pasajeros_afectados.find((elem:infeccion)=> {
    return elem.infectado === true;
})

//console.log("El primer infectado de la lista de pasajeros es:",proximo_infectado);

//======================================================================================
//The city of the edge of forever
//======================================================================================

//1.------------------------------------------------------------------------------------

const datos_incomprensibles: any[] = ["Pahk",1999,"Somraw","Wej",4020,false,null,7888,true]

const anos = datos_incomprensibles.filter((elem:any)=> {
    return typeof elem === "number";
})

//console.log("Se han separado los anos:",anos);

//2.------------------------------------------------------------------------------------

//Pese a que exista definida, como está limitado el tipo desde 1970 a la actualidad, y hay problemas para usarlo
//https://linuxhint.com/convert-numbers-dates-javascript/

//Prefiero crear mi propia fecha y asignarle valores aleatorios a los campos que faltan

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
    return devolucion
})

console.log("Fechas completas",fechas_completas);

//======================================================================================
//The trouble with Tribbles
//======================================================================================


