function crearElemento(biblioteca){
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
}
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
function filtrarTodo() {
    
    //Para que se marque en el menú la pestaña activa en cuestión
    var pes = document.querySelector("head style")
    //se cambia lo que va despues del #
    pes.innerHTML = "nav a#todo {color: black; background-color: rgb(196, 0, 130);border-color: white;}"

    let body1 = document.querySelector("body>div")
    body1.innerHTML = " "

    let biblioteca2 = JSON.parse(localStorage.getItem("key"))
    let biblioteca = ordenarAlfabeticamente(biblioteca2)
    crearElemento(biblioteca)
}
function filtrarFiccion() {

    //Para que se marque en el menú la pestaña activa en cuestión
    var pes = document.querySelector("head style")
    //se cambia lo que va despues del #
    pes.innerHTML = "nav a#ficcion {color: black;background-color: rgb(196, 0, 130);border-color: white;}"

    let body1 = document.querySelector("body>div")
    body1.innerHTML = " "

    let biblioteca2 = JSON.parse(localStorage.getItem("key"))
    let biblioteca = []
    let suma = 0
    for(let i=0; i<biblioteca2.length; i++){
        if(biblioteca2[i].genero == "ficcion" || biblioteca2[i].genero2 == "ficcion") {
            biblioteca[suma] = biblioteca2[i]
            suma += 1
        }
    }
    
    let biblioteca3 = ordenarAlfabeticamente(biblioteca)
    crearElemento(biblioteca3);
}
function filtrarComedia() {

    //Para que se marque en el menú la pestaña activa en cuestión
    var pes = document.querySelector("head style")
    //se cambia lo que va despues del #
    pes.innerHTML = "nav a#comedia {color: black;background-color: rgb(196, 0, 130);border-color: white;}"

    let body1 = document.querySelector("body>div")
    body1.innerHTML = " "

    let biblioteca2 = JSON.parse(localStorage.getItem("key"))
    let biblioteca = []
    let suma = 0
    for(let i=0; i<biblioteca2.length; i++){
        if(biblioteca2[i].genero == "comedia" || biblioteca2[i].genero2 == "comedia") {
            biblioteca[suma] = biblioteca2[i]
            suma += 1
        }
    }
    let biblioteca3 = ordenarAlfabeticamente(biblioteca)
    crearElemento(biblioteca3);
}
function filtrarSuspense() {

     //Para que se marque en el menú la pestaña activa en cuestión
     var pes = document.querySelector("head style")
     //se cambia lo que va despues del #
     pes.innerHTML = "nav a#suspense {color: black;background-color: rgb(196, 0, 130);border-color: white;}"
 
    let body1 = document.querySelector("body>div")
    body1.innerHTML = ""

    let biblioteca2 = JSON.parse(localStorage.getItem("key"))
    let biblioteca = []
    let suma = 0
    for(let i=0; i<biblioteca2.length; i++){
        if(biblioteca2[i].genero == "suspense" || biblioteca2[i].genero2 == "suspense") {
            biblioteca[suma] = biblioteca2[i]
            suma += 1
        }
    }

    let biblioteca3 = ordenarAlfabeticamente(biblioteca)
    crearElemento(biblioteca3);
}
function filtrarRomance() {

     //Para que se marque en el menú la pestaña activa en cuestión
     var pes = document.querySelector("head style")
     //se cambia lo que va despues del #
     pes.innerHTML = "nav a#romance {color: black;background-color: rgb(196, 0, 130);border-color: white;}"
 
    let body1 = document.querySelector("body>div")
    body1.innerHTML = ""

    let biblioteca2 = JSON.parse(localStorage.getItem("key"))
    let biblioteca = []
    let suma = 0
    for(let i=0; i<biblioteca2.length; i++){
        if(biblioteca2[i].genero == "romance" || biblioteca2[i].genero2 == "romance") {
            biblioteca[suma] = biblioteca2[i]
            suma += 1
        }
    }

    let biblioteca3 = ordenarAlfabeticamente(biblioteca)
    crearElemento(biblioteca3);
}
function filtrarAccion() {

    //Para que se marque en el menú la pestaña activa en cuestión
    var pes = document.querySelector("head style")
    //se cambia lo que va despues del #
    pes.innerHTML = "nav a#accion {color: black;background-color: rgb(196, 0, 130);border-color: white;}"

   let body1 = document.querySelector("body>div")
   body1.innerHTML = ""

   let biblioteca2 = JSON.parse(localStorage.getItem("key"))
   let biblioteca = []
   let suma = 0
   for(let i=0; i<biblioteca2.length; i++){
       if(biblioteca2[i].genero == "accion" || biblioteca2[i].genero2 == "accion") {
           biblioteca[suma] = biblioteca2[i]
           suma += 1
       }
   }

   let biblioteca3 = ordenarAlfabeticamente(biblioteca)
    crearElemento(biblioteca3);
}
function filtrarPolicial() {

     //Para que se marque en el menú la pestaña activa en cuestión
     var pes = document.querySelector("head style")
     //se cambia lo que va despues del #
     pes.innerHTML = "nav a#policial {color: black;background-color: rgb(196, 0, 130);border-color: white;}"
 
    let body1 = document.querySelector("body>div")
    body1.innerHTML = ""

    let biblioteca2 = JSON.parse(localStorage.getItem("key"))
    let biblioteca = []
    let suma = 0
    for(let i=0; i<biblioteca2.length; i++){
        if(biblioteca2[i].genero == "policial" || biblioteca2[i].genero2 == "policial") {
            biblioteca[suma] = biblioteca2[i]
            suma += 1
        }
    }

    let biblioteca3 = ordenarAlfabeticamente(biblioteca)
    crearElemento(biblioteca3);
}
function filtrarTerror() {

     //Para que se marque en el menú la pestaña activa en cuestión
     var pes = document.querySelector("head style")
     //se cambia lo que va despues del #
     pes.innerHTML = "nav a#terror {color: black;background-color: rgb(196, 0, 130);border-color: white;}"
 
    let body1 = document.querySelector("body>div")
    body1.innerHTML = ""

    let biblioteca2 = JSON.parse(localStorage.getItem("key"))
    let biblioteca = []
    let suma = 0
    for(let i=0; i<biblioteca2.length; i++){
        if(biblioteca2[i].genero == "terror" || biblioteca2[i].genero2 == "terror") {
            biblioteca[suma] = biblioteca2[i]
            suma += 1
        }
    }

    let biblioteca3 = ordenarAlfabeticamente(biblioteca)
    crearElemento(biblioteca3);
}
function filtrarAventura() {

     //Para que se marque en el menú la pestaña activa en cuestión
     var pes = document.querySelector("head style")
     //se cambia lo que va despues del #
     pes.innerHTML = "nav a#aventura {color: black;background-color: rgb(196, 0, 130);border-color: white;}"
 
    let body1 = document.querySelector("body>div")
    body1.innerHTML = ""

    let biblioteca2 = JSON.parse(localStorage.getItem("key"))
    let biblioteca = []
    let suma = 0
    for(let i=0; i<biblioteca2.length; i++){
        if(biblioteca2[i].genero == "aventura" || biblioteca2[i].genero2 == "aventura") {
            biblioteca[suma] = biblioteca2[i]
            suma += 1
        }
    }

    let biblioteca3 = ordenarAlfabeticamente(biblioteca)
    crearElemento(biblioteca3);
}
function filtrarDrama() {

     //Para que se marque en el menú la pestaña activa en cuestión
     var pes = document.querySelector("head style")
     //se cambia lo que va despues del #
     pes.innerHTML = "nav a#drama {color: black;background-color: rgb(196, 0, 130);border-color: white;}"
 
    let body1 = document.querySelector("body>div")
    body1.innerHTML = ""

    let biblioteca2 = JSON.parse(localStorage.getItem("key"))
    let biblioteca = []
    let suma = 0
    for(let i=0; i<biblioteca2.length; i++){
        if(biblioteca2[i].genero == "drama" || biblioteca2[i].genero2 == "drama") {
            biblioteca[suma] = biblioteca2[i]
            suma += 1
        }
    }

    let biblioteca3 = ordenarAlfabeticamente(biblioteca)
    crearElemento(biblioteca3);
}