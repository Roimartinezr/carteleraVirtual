function ordenarAlfabeticamente(biblioteca2) {
    let nombres = []
    for(let i=0; i<biblioteca2.length; i++) {
        nombres[i] = biblioteca2[i].nombre
    }
    let nombresOrdenados = nombres.sort()
    let biblioteca = []
    let u = 0
    while (biblioteca.length != biblioteca2.length) {
        for(let i=0; i<nombres.length; i++) {
            if(biblioteca2[i].nombre == nombresOrdenados[u]) {
                biblioteca[u] = biblioteca2[i]
                u++
            }
        }
    }
    return biblioteca
}
let biblioteca = JSON.parse(localStorage.getItem("key"))
biblioteca = ordenarAlfabeticamente(biblioteca)

//Añado cada objeto como un elemento div en el HTML
let body = document.querySelector("body div#biblioteca")
let cont = 0
for(let i=0; i<biblioteca.length; i++) {
    body.innerHTML += "<div id='num"+cont+"'></div>"
    cont += 1
}

//Bucle para recorrer cada objeto/div
let div
let a
for(let i=0; i<biblioteca.length; i++) {

    //Añado los elementos del objeto al div
    div = document.querySelector("div#num"+i)
    div.innerHTML += "<h2>"+biblioteca[i].nombre+"</h2>"
    div.innerHTML += "<h2>"+biblioteca[i].fecha+"</h2>"
    //Añado en enlace al PDF
    let enlace = document.createElement("a")
    if(biblioteca[i].url == null) {
        enlace.setAttribute("href","./Libros/undefined.txt")
    }else {
        enlace.setAttribute("href",biblioteca[i].url)
    }
    
    div.append(enlace)
    //Meto la imagen de la portada en el enlace
    let imagen = document.createElement("img")
    imagen.setAttribute("src",biblioteca[i].portada)
    a = document.querySelector("div#num"+i+" a")
    a.append(imagen)
    div.innerHTML += "<h2>"+biblioteca[i].duracion+"</h2>"
}
