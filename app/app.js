
const listaProductos = [
    {
        precio: 20,
        title: "Helado",
        imgURL: "https://arcorencasa.com/wp-content/uploads/2020/10/20210730-11348.jpg"
    },
    {
        precio: 15,
        title: "Chocolate",
        imgURL: "https://cdn.thomasnet.com/insights-images/ad707688-8401-4fe6-9dcd-f5714f98867f/750px.png"
    },
    {
        precio: 150,
        title: "Pizza",
        imgURL: "https://live.mrf.io/statics/i/ps/irecetasfaciles.com/wp-content/uploads/2019/01/pizza-con-salami-chorizo-beacon.jpg?width=1200&enable=upscale"
    },
    {
        precio: 75,
        title: "Yogurth",
        imgURL: "https://tiendasneto.com.mx/media/catalog/product/cache/cb1e6b076f68ee0ac6e5e542f63310fa/5/0/5010003159-1_14.jpg"
    },
    {
        precio: 35,
        title: "Caramelos",
        imgURL: "https://www.consumoteca.com/wp-content/uploads/Gominolas-de-colores.jpg"
    },
    {
        precio: 100,
        title: "Vino",
        imgURL: "https://www.oregonlive.com/resizer/3bG0LURzUofqN1aT6YjIUUXacs8=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/37BXFDH3HBDK7NUISV3ZDONLMI.jpg"
    },
    {
        precio: 750,
        title: "Caja de dulces",
        imgURL: "https://gologuinda.com/wp-content/uploads/2020/10/20201024_122230.jpg"
    },

    {
        precio: 200,
        title: "Pastel",
        imgURL: "https://i.blogs.es/4d76ad/pastel-tres-leches/840_560.jpg"
    }
]
let section = document.querySelector("section")
let carritoDeCompras = []
let contador = document.querySelector("#productos-cantidad")
let sumaTotal = document.querySelector("h5")

document.addEventListener( "DOMContentLoaded", () =>{
    mostrarProductos()
})


function mostrarProductos() {
    let fragmentoHTML = "" 

    listaProductos.map( producto =>{
        fragmentoHTML += `
            <div class="card">
                <img src=${ producto.imgURL } alt="">
                <h3>${ producto.title }</h3>
                <p>${ producto.precio }</p>
                <button>Agregar</button>
            </div>
        `
    })

    section.innerHTML = fragmentoHTML
}


section.addEventListener( "click", event =>{
    
    if( event.target.tagName === "BUTTON" ){
        const producto = event.target.parentElement

        let productoObjeto = {
            title : producto.querySelector("h3").textContent,
            price: parseInt( producto.querySelector("p").textContent ),
        }

        agregarCarrito(productoObjeto)
    }

    event.stopPropagation
})

function agregarCarrito(producto) {

    carritoDeCompras.push( producto )
    console.log( carritoDeCompras )
    contador.textContent = carritoDeCompras.length
    calcularTotal()

}

function calcularTotal( ){
    let total = carritoDeCompras.reduce( ( acumulador, current )=> acumulador + current.price, 0 )

    sumaTotal.textContent = `TOTAL: $ ${ total }`
}