// Space Seed


//1.
type superviviente = {
    origen?: string,
    nombre?: string,
    altura:number,
    edad: number,
    genero: string
};

//2.

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

//3.

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


//4.

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

//The side of paradise

//1.

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
        infectado: true
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
    if(elem.infectado === false && elem.nombre) console.log("Pasajeros sanos: ",elem.nombre)
})

//2.

const algun_infectado = pasajeros_afectados.some((elem: infeccion)=> {
    return elem.infectado === false 
})

console.log(algun_infectado);

const todos_sanos_curados = pasajeros_afectados.every((elem:infeccion)=> {
    return elem.infectado === false
}
)

console.log(todos_sanos_curados);

const proximo_infectado = pasajeros_afectados.find((elem:infeccion)=> {
    return elem.infectado === true;
})

console.log(proximo_infectado);


//The city of the edge of forever



