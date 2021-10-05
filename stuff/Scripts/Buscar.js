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
function buscar() {
    let body1 = document.querySelector("body>div")
    body1.innerHTML = " "
    let biblioteca3 = JSON.parse(localStorage.getItem("key"))
    let biblioteca = ordenarAlfabeticamente(biblioteca3)

    let cadena = prompt("Buscar:")
    if (cadena == null || cadena == " " || cadena == "") {
         //Para que se marque en el menú la pestaña activa en cuestión
        var pes = document.querySelector("head style")
        //se cambia lo que va despues del #
        pes.innerHTML = "nav a#buscar {background-color: rgb(140, 14, 14);border-color: white; background-image: url('./Estilos/checkImage/buscarHover.png');}"

        crearElemento(biblioteca)
    }else {
         //Para que se marque en el menú la pestaña activa en cuestión
        var pes = document.querySelector("head style")
        //se cambia lo que va despues del #
        pes.innerHTML = "nav a#buscar {background-color: rgb(140, 14, 14);border-color: white; background-image: url('./Estilos/checkImage/buscarHover.png');} "

        let matrizCadena = cadena.split(" ")
        let biblioteca2 = []
        let e = 0
        
        //Bucle(s) para filtrar a una matriz (biblioteca2) los elementos que se van a mostar
        //Después procederé a filtrar a otra matriz(finalBusca) deste esta(biblioteca2) los datos ordenados por la escalera de privilegios
        for(let i=0; i<biblioteca.length;i++) {
            for(let u=0; u<matrizCadena.length; u++) {
                if(biblioteca[i].nombre == cadena || biblioteca[i].nombre.toLowerCase() == cadena) {
                    biblioteca2[e] == biblioteca[i]
                    e++
                    break
                }else if(biblioteca[i].nombre.startsWith(cadena) || (biblioteca[i].nombre.toLowerCase()).startsWith(cadena)) {
                    biblioteca2[e] = biblioteca[i]
                    e++
                    break
                }else if(biblioteca[i].nombre.startsWith(matrizCadena[0]) || (biblioteca[i].nombre.toLowerCase()).startsWith(matrizCadena[0]) ){
                    biblioteca2[e] = biblioteca[i]
                    e++
                    break
                }else if(biblioteca[i].nombre.startsWith(matrizCadena[0]+" "+matrizCadena[1]) || (biblioteca[i].nombre.toLowerCase()).startsWith(matrizCadena[0]+" "+matrizCadena[1])){
                    biblioteca2[e] = biblioteca[i]
                    e++
                    break
                }else if(biblioteca[i].nombre.startsWith(matrizCadena[0]+" "+matrizCadena[1]+" "+matrizCadena[2]) || (biblioteca[i].nombre.toLowerCase()).startsWith(matrizCadena[0]+" "+matrizCadena[1]+" "+matrizCadena[2])){             
                    biblioteca2[e] = biblioteca[i]
                    e++
                    break
                }else if(biblioteca[i].nombre.startsWith(matrizCadena[0]+" "+matrizCadena[1]+" "+matrizCadena[2]+" "+matrizCadena[3]) || (biblioteca[i].nombre.toLowerCase()).startsWith(matrizCadena[0]+" "+matrizCadena[1]+" "+matrizCadena[2]+" "+matrizCadena[3])){
                    biblioteca2[e] = biblioteca[i]
                    e++
                    break
                }else if(biblioteca[i].nombre.includes(matrizCadena[u]) || (biblioteca[i].nombre.toLowerCase()).includes(matrizCadena[u]) ) {
                    biblioteca2[e] = biblioteca[i]
                    e++
                    break
                }
            }
        }

        
        //Parte de filtrado * escalera
        let finalBusca = []
        finalBusca.length = biblioteca2.length
        for(let i=0; i<finalBusca.length; i++) {
            finalBusca[i] = {
                nombre: "",
            }
        }
        let j = 0
        for(let i=0; i<biblioteca2.length; i++) {
            if(biblioteca2[i].nombre.startsWith(cadena) || (biblioteca2[i].nombre.toLowerCase()).startsWith(cadena)) {
                finalBusca[j] = biblioteca2[i]
                j++
            }
        }
        
        for(let i=0; i<biblioteca2.length;i++) {
            Object.defineProperty(biblioteca2[i], "pasa", {
                pasa: true
            })
        }

        for(let i=0; i<biblioteca2.length; i++) {
            for(let u=0; u<biblioteca2.length; u++) {
                for(let y=0; y<biblioteca2.length; y++) {
                    if(finalBusca[y].nombre == biblioteca2[u].nombre) {
                        biblioteca2[u].pasa = false
                        break
                    }else {
                    }
                    
                }

                if(biblioteca2[u].pasa == true) {
                    for(let a=0; a<matrizCadena.length; a++) {
                        if(biblioteca2[i].nombre.includes(matrizCadena[a]) || (biblioteca2[i].nombre.toLowerCase()).includes(matrizCadena[a])) {
                            finalBusca[j] = biblioteca2[i]
                            j++
                            break
                        }
                    }
                }
            }
        }
        crearElemento(finalBusca)
    }
}