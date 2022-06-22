//Pregunta: Con quien hablamos

let bienvenida = parseInt ("Calculator 300")

function saludoGenerico () {
    let nombre = prompt("Tu nombre es:")
    let apellido = prompt("Apellido:")
    let edad = prompt ("Que edad tienes:")
    const anio =2022
    let anioNacimiento = anio - edad
    alert (`Bienvenido a Calculator! ${nombre} ${apellido},tenes ${edad} y naciste en el año ${anioNacimiento}`)
}

saludoGenerico ()
// Calculadora
let opcion = parseInt(prompt('A calcular!, ingrese: \n 1- para sumar. \n 2- para restar. \n 3- para multiplicar. \n 0- para salir'));

while ((opcion < 1 || opcion > 3) && opcion != 0 && opcion) {
    alert('opcion no válida')
    opcion = parseInt(prompt('por favor, ingrese: \n 1- para sumar. \n 2- para restar. \n 3- para multiplicar.'));
};
while (opcion != 0) {
    let numeroA;
    let numeroB;

    switch (opcion) {
        case 1: 
            numeroA = parseInt(prompt('ingrese un numero'))
            numeroB = parseInt(prompt('ingrese otro numero'))

            alert ('el resultado es :' + (numeroA + numeroB))
            break;
        case 2: 
            numeroA = parseInt(prompt('ingrese un numero'))
            numeroB = parseInt(prompt('ingrese otro numero'))

            alert ('el resultado es :' + (numeroA - numeroB))
            break;
        case 3: 
            numeroA = parseInt(prompt('ingrese un numero'))
            numeroB = parseInt(prompt('ingrese otro numero'))

            alert ('el resultado es :' + numeroA * numeroB)
            break;

        default:
            alert('opcion no valida')
    }
    opcion = parseInt(prompt('ingrese una opcion'))
}

const productos = [{
    id: 1,
    title: 'shampoode5litros',
    tags: ['shampoo', '5', 'bidon', 'litros'],
}, {
    id: 2,
    title: 'shampoode1litro',
    tags: ['shampoo', '1', 'litro', 'botella'],
} ,{
    id: 3,
    title: 'shampooenpomo',
    tags: ['shampoo','en', 'pomo'],

}]

console.log(productos.map(productos => productos.title));