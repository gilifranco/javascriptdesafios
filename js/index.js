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
    valor: 2500,
    imageURL: 'https://http2.mlstatic.com/D_NQ_NP_781356-MLA45262293126_032021-O.jpg',
    tags: ['shampoo', '5', 'bidon', 'litros'],
}, {
    id: 2,
    title: 'shampoode1litro',
    valor: 1200,
    imageURL: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/138/958/products/shampoo-color-master-editado1-cd3e407099adf75c4816179127298149-640-0.jpg',
    tags: ['shampoo', '1', 'litro', 'botella'],
} ,{
    id: 3,
    title: 'shampooenpomo',
    valor: 500,
    imageURL: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/138/958/products/shmapoo-cremoso-chiso-editado1-5345e8245489cd4b4a16179910799732-640-0.jpg',
    tags: ['shampoo','en', 'pomo'],

}]

//console.log(productos.map(productos => productos.title));

const carrito = []

const contenedor = document.getElementById('contenedor');
const contenedorCarrito = document.getElementById('carrito');

const renderProducts = (products, target) => {
    let acumulador = '';

    products.map(product => {
        acumulador += `
        <div class="card m-2" style="width: 18rem;">
            <img src="${product.imageURL}" class="card-img-top" alt="${product.title}">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">Precio: $${product.valor}</p>
                <button ref=${product.id} class="btn btn-primary button">Comprar</button>
            </div>
        </div>
        `
    })

    target.innerHTML = acumulador;

    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => button.addEventListener('click', handleClick));
}

const handleClick = (event) => {
    const id = parseInt(event.target.getAttribute('ref'));
    const product = productos.find(producto => producto.id === id);
    alert('compraste ' + product.title + ' por $' + product.valor);
    
    if (carrito.some(el => el.id === product.id)) {
        const posicion = carrito.findIndex(el => el.id === product.id)
        carrito[posicion].cantidad = carrito[posicion].cantidad + 1;
    } else {
        carrito.push({
            id: product.id,
            title: product.title,
            valor: product.valor,
            cantidad: 1,
            imageURL: product.imageURL
        })
    }
    renderProducts(carrito, contenedorCarrito);
}

const buscador = (array, texto) => {
    return array.filter(producto => producto.title.toLowerCase().includes(texto.toLowerCase()))
}
const form = document.getElementById('form');
const input = document.getElementById('searchInput');

const buscar = (e) => {
    e.preventDefault();

    renderProducts(buscador(productos, input.value), contenedor);
}

input.addEventListener('input', buscar);

renderProducts(productos, contenedor);
