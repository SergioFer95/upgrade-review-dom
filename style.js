'use strict';

window.addEventListener("load", () => {

    // 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

    const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

    const newList = document.createElement("ul");
    document.body.append(newList);



    // Hasta aquí hemos creado la lista ul > li

    let content
    var addContent = (() => {
        for (var i = 0; i < countries.length; i++){
            const newContent = document.createElement("li");
            document.body.append(newContent);
            newList.appendChild(newContent);

            content = document.createTextNode(countries[i])
            
            newContent.appendChild(content);
        }
    })

    addContent(newList);



    // 1.2 Elimina el elemento que tenga la clase .fn-remove-me. RESUELTO!!

    const bye = document.querySelector(".fn-remove-me");

    bye.remove();


    // 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

    const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

    // Creamos el elemento ul y lo añadimos al body:

    const newElementList = document.createElement("ul");
    document.body.append(newElementList);

    // Traemos el div contenedor y le introducimos la ul:
    const container = document.querySelector('[data-function="printHere"]');

    container.appendChild(newElementList);

    let carsModel;
    var addNewList = (()=>{
        for(var j = 0; j < cars.length; j++){
            const newContentList = document.createElement("li");
            document.body.append(newContentList);
            newElementList.appendChild(newContentList);

            carsModel = document.createTextNode(cars[j]);
            newContentList.appendChild(carsModel);
        }
    });

    addNewList(newElementList);



    // 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen.

    const otherCountries = [
        { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
        { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
        { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
        { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
        { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
    ];



    // 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.



    // 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.

});