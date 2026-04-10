const productos = [
{
    id: 1,
    nombre: "Auriculares Bluetooth",
    descripcion: "Auriculares inalámbricos con cancelación de ruido.",
    precio: 75.99,
    imagen: "https://m.media-amazon.com/images/I/61rFE093esL.jpg",
    reseñas: [
        {
            usuario: "Ana Ruiz",
            texto: "¡Excelente calidad de sonido!",
            fecha: "2025-09-01"
        }
    ]
},
{
    id: 2,
    nombre: "Reloj Inteligente",
    descripcion: "Reloj con monitor de actividad física.",
    precio: 120,
    imagen: "https://i5-mx.walmartimages.com/mg/gm/3pp/asr/bbaa4924-2be6-46c5-8e14-f191d1ea6407.372e9488bfb8bde6e9f08d7b2e890a2d.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
    reseñas: []
},
{
    id: 3,
    nombre: "Webcam HD",
    descripcion: "Cámara web para videollamadas.",
    precio: 45.50,
    imagen: "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202303/01/00110110110805____1__1200x1200.jpg",
    reseñas: []
}
]

let catalogo = document.getElementById("catalogo")

for(let i=0;i<productos.length;i++){

    let p = productos[i]

    let card = document.createElement("div")
    card.classList.add("card")

    let img = document.createElement("img")
    img.src = p.imagen

    let nombre = document.createElement("h3")
    nombre.innerText = p.nombre

    let descripcion = document.createElement("p")
    descripcion.innerText = p.descripcion

    let precio = document.createElement("p")
    precio.innerText = "$" + p.precio

    let btn = document.createElement("button")
    btn.innerText = "Agregar al carrito"

    btn.onclick = function(){
        btn.innerText = "Agregado"
        btn.disabled = true
    }
  let btn2 = document.createElement("button")
    btn2.innerText = "Ver reseñas"

    let cont = document.createElement("div")
    cont.classList.add("reseñas")

    if(p.reseñas.length == 0){
        cont.innerHTML = "Sin reseñas"
    }else{
        p.reseñas.forEach(r=>{
            let item = document.createElement("p")
            item.innerText = r.usuario + ": " + r.texto
            cont.appendChild(item)
        })
    }

    btn2.addEventListener("click",function(){

        if(cont.style.display == "block"){
            cont.style.display = "none"
            btn2.innerText = "Ver reseñas"
        }else{
            cont.style.display = "block"
            btn2.innerText = "Ocultar"
        }

    })

    card.appendChild(img)
    card.appendChild(nombre)
    card.appendChild(descripcion)
    card.appendChild(precio)
    card.appendChild(btn)
    card.appendChild(btn2)
    card.appendChild(cont)

    catalogo.appendChild(card)

}