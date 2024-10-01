export function imagen() {
    const img = document.createElement('img');
    img.className = 'img-fluid';
    img.src = './portaaviones.jpg';
    img.alt = 'Portaaviones español';
    return img;
}

export function tabla() {
    let table = document.createElement('table');
    table.className = 'table-striped';
    let tRowH = document.createElement('tr');
    tRowH.innerHTML = "<tr><th>Nombre</th><th>Tipo</th><th>Identificación</th></tr>";
    table.appendChild(tRowH);
    let arrayContents = [
        {Barco: 'Juan Carlos I', Tipo: 'Portaaviones', etiqueta: 'L-61'},
        {Barco: 'Santa María', Tipo: 'Fragata', etiqueta: 'F-81'},
        {Barco: 'Isaac Peral', Tipo: 'Submarino', etiqueta: 'S-81'}
    ];
    arrayContents.forEach((buque) => {
        let tRowD = document.createElement('tr');
        tRowD.innerHTML = `<tr><td>${buque.Barco}</td><td>${buque.Tipo}</td><td>${buque.etiqueta}</td></tr>`;
        table.appendChild(tRowD);
    }  )    
    console.log(table);

    return table;
}

export function parrafo() {
    let p = document.createElement('p');
    p.classList = "badge text-bg-primary text-wrap";
    p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolor quis vero ad eveniet ipsum nesciunt odio quos cumque rem, cum amet, magnam saepe! Quos vel ab distinctio ad? Ullam.";
    console.log(p);
    return p;
}

export function lista(arrayItems) {
    let ul = document.createElement('ul');
    ul.className = "list-group";
    arrayItems.forEach( (item) => {
        let li = document.createElement('li');
        li.innerHTML = item;
        li.className = "list-group-item";
        ul.appendChild(li);
    } );
    return ul;
}