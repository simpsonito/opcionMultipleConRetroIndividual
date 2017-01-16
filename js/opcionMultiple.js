/* Adib Abud Jaso 16/01/2017 */
function Pregunta(objetoConDatos) {
    this.datos = objetoConDatos;
    Pregunta.conjunto.push(this);
}
Pregunta.conjunto = [];//Aquí se almacenan las preguntas, correcta: true o false, retro: se muestra cuando eligen esta opción, puede ser tanto para correcta como incorrecta
new Pregunta({texto:"Categoría en griego quiere decir",
    opciones:[
        {opcion:"a) Que fundamenta.", correcta:false, retro:"Incorrecto. Categoría quiere decir en griego “que revela o muestra”."},
        {opcion:"b) Que revela.", correcta:true, retro:""},
        {opcion:"c) Que impera.", correcta:false, retro:"Incorrecto. Categoría quiere decir en griego “que revela o muestra”."},
        {opcion:"d) Que sugiere.", correcta:false, retro:"Incorrecto. Categoría quiere decir en griego “que revela o muestra”."},
    ]
});
new Pregunta({texto:"Son categorías según Aristóteles.",
    opciones:[
        {opcion:"a) Sustancia, cantidad.", correcta:true, retro:""},
        {opcion:"b) Espacio, tiempo.", correcta:false, retro:"Incorrecto. Sustancia y cantidad, son las primeras categorías de Aristóteles."},
        {opcion:"c) Persona, norma.", correcta:false, retro:"Incorrecto. Sustancia y cantidad, son las primeras categorías de Aristóteles."},
        {opcion:"d) Situación, supuesto.", correcta:false, retro:"Incorrecto. Sustancia y cantidad, son las primeras categorías de Aristóteles."},
    ]
});
new Pregunta({texto:"Una categoría es:",
    opciones:[
        {opcion:"a) Una idea suprema.", correcta:false, retro:"Incorrecto. Un concepto fundamental, sin el cual no puede haber otros conceptos."},
        {opcion:"b) Un principio trascendental.", correcta:false, retro:"Incorrecto. Un concepto fundamental, sin el cual no puede haber otros conceptos."},
        {opcion:"c) Un concepto fundamental.", correcta:true, retro:""},
        {opcion:"d) Una imagen esquemática.", correcta:false, retro:"Incorrecto. Un concepto fundamental, sin el cual no puede haber otros conceptos."},
    ]
});

new Pregunta({texto:"Un concepto se diferencia de una definición en que:",
    opciones:[
        {opcion:"a) Uno es corto y la otra larga", correcta:false, retro:"Incorrecto. Uno tiene implícitas las características necesarias o esenciales del objeto o fenómeno, mientras que la definición hace explícitas esas características al expresar cuál es el objeto o fenómeno."},
        {opcion:"b) Uno es esquemático y la otra sustancial.", correcta:false, retro:"Incorrecto. Uno tiene implícitas las características necesarias o esenciales del objeto o fenómeno, mientras que la definición hace explícitas esas características al expresar cuál es el objeto o fenómeno."},
        {opcion:"c) No tienen diferencias.", correcta:false, retro:"Incorrecto. Uno tiene implícitas las características necesarias o esenciales del objeto o fenómeno, mientras que la definición hace explícitas esas características al expresar cuál es el objeto o fenómeno."},
        {opcion:"d) Uno es implícito y otro explícito.", correcta:true, retro:""},
    ]
});

new Pregunta({texto:"Las normas para Kelsen.",
    opciones:[
        {opcion:"a) Son imperativos con sanción.", correcta:true, retro:""},
        {opcion:"b) Son prescripciones subjetivas.", correcta:false, retro:"Incorrecto. Imperativos con sanción. Si una norma no tiene sanción es imperfecta y se remite a otra norma que si la tiene."},
        {opcion:"c) Son mandatos secundarios.", correcta:false, retro:"Incorrecto. Imperativos con sanción. Si una norma no tiene sanción es imperfecta y se remite a otra norma que si la tiene."},
        {opcion:"d) Son mandatos de cambio.", correcta:false, retro:"Incorrecto. Imperativos con sanción. Si una norma no tiene sanción es imperfecta y se remite a otra norma que si la tiene."},
    ]
});

new Pregunta({texto:"Es el concepto jurídico más fundamental.",
    opciones:[
        {opcion:"a) Norma.", correcta:true, retro:""},
        {opcion:"b) Coacción.", correcta:false, retro:"Incorrecto. Imperativos con sanción. Si una norma no tiene sanción es imperfecta y se remite a otra norma que si la tiene."},
        {opcion:"c) Sistema.", correcta:false, retro:"Incorrecto. Imperativos con sanción. Si una norma no tiene sanción es imperfecta y se remite a otra norma que si la tiene."},
        {opcion:"d) Persona.", correcta:false, retro:"Incorrecto. Imperativos con sanción. Si una norma no tiene sanción es imperfecta y se remite a otra norma que si la tiene."},
    ]
});

new Pregunta({texto:"Es un valor jurídico fundamental.",
    opciones:[
        {opcion:"a) Paz social.", correcta:false, retro:"Incorrecto. El bien común. La paz social es un valor jurídico construido a través del bien común."},
        {opcion:"b) Bien común.", correcta:true, retro:""},
        {opcion:"c) La asociación", correcta:false, retro:"Incorrecto. El bien común. La paz social es un valor jurídico construido a través del bien común."},
        {opcion:"d) La propiedad.", correcta:false, retro:"Incorrecto. El bien común. La paz social es un valor jurídico construido a través del bien común."},
    ]
});

new Pregunta({texto:"Significa máscara:",
    opciones:[
        {opcion:"a) Persona.", correcta:true, retro:""},
        {opcion:"b) Sujeto.", correcta:false, retro:"Incorrecto. Persona. Personare (hacer sonar o resonar). Término referido en un principio a las máscaras que en la escena teatral clásica utilizaban los actores para cubrir su rostro y también para aumentar la voz y, posteriormente, para jugar un rol en la obra o un personaje."},
        {opcion:"c) Imputable.", correcta:false, retro:"Incorrecto. Persona. Personare (hacer sonar o resonar). Término referido en un principio a las máscaras que en la escena teatral clásica utilizaban los actores para cubrir su rostro y también para aumentar la voz y, posteriormente, para jugar un rol en la obra o un personaje."},
        {opcion:"d) Histrión.", correcta:false, retro:"Incorrecto. Persona. Personare (hacer sonar o resonar). Término referido en un principio a las máscaras que en la escena teatral clásica utilizaban los actores para cubrir su rostro y también para aumentar la voz y, posteriormente, para jugar un rol en la obra o un personaje."},
    ]
});

new Pregunta({texto:"El supuesto jurídico es:",
    opciones:[
        {opcion:"a) La hipótesis de la norma.", correcta:true, retro:""},
        {opcion:"b) La consecuencia de derecho.", correcta:false, retro:"Incorrecto. La hipótesis normativa. Supuesto e hipótesis son sinónimos."},
        {opcion:"c) La prescripción.", correcta:false, retro:"Incorrecto. La hipótesis normativa. Supuesto e hipótesis son sinónimos."},
        {opcion:"d) El deber ser.", correcta:false, retro:"Incorrecto. La hipótesis normativa. Supuesto e hipótesis son sinónimos."},
    ]
});

new Pregunta({texto:"Un sistema es:",
    opciones:[
        {opcion:"a) Relaciones estáticas.", correcta:false, retro:"Incorrecto. Conjunto de partes relacionadas que funcionan como un todo."},
        {opcion:"b) Partes conjuntadas.", correcta:false, retro:"Incorrecto. Conjunto de partes relacionadas que funcionan como un todo."},
        {opcion:"c) Conjunto funcional.", correcta:true, retro:""},
        {opcion:"d) Una autoreferencia.", correcta:false, retro:"Incorrecto. Conjunto de partes relacionadas que funcionan como un todo."},
    ]
});

var buenas = 0;
var pActual = 0;
var intento = 0;
var maxIntento = 1;
var bodyOriginal;

window.addEventListener("load", alCargar, false);
function alCargar(){
    bodyOriginal = document.body.innerHTML;
    iniciar();
}
function iniciar(){
    document.getElementById("botonContinuar").onclick = alApretarSiguiente;
    function alApretarSiguiente(){
        generarPregunta(pActual);
    }
}
function reiniciar(){
    buenas = 0;
    pActual = 0;
    intento = 0;
    document.body.innerHTML = bodyOriginal;
    iniciar();
}


function generarPregunta(numero){
    var actual = Pregunta.conjunto[numero].datos;

    var todoPregunta = document.getElementById("setPregunta");
    todoPregunta.innerHTML = "";
    var divPregunta = document.createElement("div");
    divPregunta.className = "preguntaTexto";
    divPregunta.innerHTML = actual.texto;
    todoPregunta.appendChild(divPregunta);

    var divOpciones = document.createElement("div");
    divOpciones.className = "opciones";
    todoPregunta.appendChild(divOpciones);

    var divRetro = document.createElement("div");
    divRetro.className = "retro";
    divRetro.id = "retroPregunta";
    todoPregunta.appendChild(divRetro);

    var opcion;
    actual.opciones.forEach(function(elemento, indice){
        
        opcion = document.createElement("a");
        opcion.className = "opcion pure-button";
        opcion.id = "op"+indice;
        opcion.setAttribute("data-correcto", elemento.correcta);
        opcion.setAttribute("data-retro", elemento.retro);
        opcion.innerHTML = elemento.opcion;
        divOpciones.appendChild(opcion);
    });
    

    setClicBotones();

    pActual++;
    document.getElementById("botonContinuar").style.display = "none";
    /* Animación pregunta, primero desaparece sin que se note */
    aparecerAnimadaPregunta(todoPregunta, false);
    /* Luego aparece ya con animación. Se debe usar seTimeout para que suceda anacrónicamente y se anime */
    setTimeout(aparecerAnimadaPregunta, 1, todoPregunta, true);
}
    function aparecerAnimadaPregunta(pregunta, si){
        if(si){
            pregunta.className = "animando";
        } else {
            pregunta.className = "fijo";
        }
    }
function setClicBotones(){
    var oList = document.getElementById("setPregunta").getElementsByTagName("a");
    Array.prototype.forEach.call(oList, function(objeto){
        if (objeto.className.indexOf("opcion") == 0){
            hacerOpcion(objeto);
        }
    });
}
function desactivarBotones(){
    var oList = document.getElementById("setPregunta").getElementsByTagName("a");
    Array.prototype.forEach.call(oList, function(objeto){
        if (objeto.className.indexOf("opcion") == 0){
            deshacerOpcion(objeto);
        }
    });
    intento = 0;
    if(!(pActual >= Pregunta.conjunto.length)){
        document.getElementById("botonContinuar").style.display = "";
        document.getElementById("botonContinuar").value = "Siguiente ►";
    } else {//Si ya no hay más preguntas.
        var mensajeFinal = "";
        retroalimentar(mensajeFinal+"Obtuviste "+buenas+" de "+Pregunta.conjunto.length+".");
    }
}

function hacerOpcion(boton){
    boton.onclick = function(){
      console.log(this);
        if(this.getAttribute("data-correcto") == "true"){
            buenas++;
            darRetro(this.getAttribute("data-retro"));
            desactivarBotones();
            this.className += " bien";
        } else {
            intento++;
            deshacerOpcion(this);
            if(intento >= maxIntento){
                darRetro(this.getAttribute("data-retro"));
                desactivarBotones();
            }
            this.className += " mal";
        }
        console.log(this.className);
        function darRetro(mensaje) {
          document.getElementById("retroPregunta").innerHTML = mensaje;
        }
    };
    boton.className = 'opcion pure-button';
}
function deshacerOpcion(boton){
    boton.onclick = null;
    //console.log("clase antes: "+boton.class);
    boton.className = 'opcion pure-button pure-button-disabled';
    //console.log("clase boton: "+boton.class);
}
function shuffle(array) {
    var currentIndex = array.length
        , temporaryValue
        , randomIndex
        ;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
function retroalimentar(cadena){
    document.getElementById("retroalimentacion").innerHTML = cadena;
}
