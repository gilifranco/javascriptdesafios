
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

const contenedorr = document.getElementById('contenedorr');
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

    renderProducts(buscador(productos, input.value), contenedorr);
}

input.addEventListener('input', buscar);

renderProducts(productos, contenedorr);


// Creo La clase alumno
class Alumno{

  constructor(nombre,email,password){
   this.nombre= nombre;
   this.email= email;
   this.password= password;
 }
}

// Defino todas las variables globales que necesito para trabajar con el DOM
let arrayAlumnos = [] ;
let miFormulario = document.querySelector("#formulario");
let inputNombre = document.querySelector("#iNombre");

let nombreI = formulario.children[1].value;
let emailI = formulario.children[3].value;
let passwordI = formulario.children[5].value;
let contenedor = document.querySelector("#alumnoIngresado")
let displayTodos = document.querySelector("#displayTodos");
let parrafos = display
let bandera = false;
// Defino Los Eventos de ambos botones
miFormulario.addEventListener("submit",agregarAlumnos);
btnMostrar.addEventListener('click',MostrarTodosAlumnos);
                     Todos.getElementsByTagName("p");
// Pongo en Focus el primer input
inputNombre.focus();

// FUNCIONES
// FUNCION PARA COMPROBAR EL INGRESO DE DATOS EN INPUTS
function validarForm() {
nombreI=formulario.children[1].value;
emailI=formulario.children[3].value;
passwordI=formulario.children[5].value;
console.log(nombreI);
console.log(emailI);
console.log(passwordI);

if(nombreI == '' || emailI == '' || passwordI == '' ) { 
alert('ERROR- Debe completar todos los campos para continuar');
inputNombre.focus();
bandera = false;
} else {
bandera=true;
}
}
// FUNCION PARA AGREGAR ALUMNOS AL ARRAY DE ALUMNOS
function agregarAlumnos(e) {
    e.preventDefault();
   validarForm()
   // valido que esten ok Los datos del formulario
    if(bandera == true) {
     let opcion = confirm("Esta seguro de agregar el Alumno?");
     if (opcion == true) {
       let formulario = e.target
       arrayAlumnos.push (new Alumno(nombreI,emailI,passwordI));
                       }
        else { alert ('No se agregara al usuario'); }
    
    formulario.children[1].value ='';
    formulario.children[3].value = '';
    formulario.children[5].value = '';

    contenedor.innerHTML= '';
    AgregarAlDom();
    inputNombre.focus();
} else { 
    inputNombre.focus();
}  
}
   
// funcion para Mostrar en DOM el ultimo alumno ingresado
function AgregarAlDom(){
    contenedor.innerHTML= 
    `<h3>Ultimo alumno Ingresado:</h3>
      <p><strong>Nombre:</strong>${nombreI}</p>
      <p><strong>Email:</strong>${emailI}</p>
      <p><strong>Password:</strong>${passwordI}</p>
      <hr>`;
   }

 // funcion para mostrar proceduralmente todos los alumnos en un div en DOM
function MostrarTodosAlumnos(e) {
    e.preventDefault();
   leti=0;
   displayTodos.innerHTML='<h3>Listado de todos los Alumnos:</h3>';
   for(const alumno of arrayAlumnos){
     displayTodos.innerHTML+= `
     <p><strong>Nombre:</strong>${nombreI}</p>
     <p><strong>Email:</strong>${emailI}</p>
     <p><strong>Password:</strong>${passwordI}</p>
     <hr>`;
  } } 