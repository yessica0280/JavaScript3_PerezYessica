//Creación de un elemento personalizable.

class crearboton extends HTMLElement{
    constructor(){
        super();
        this.textContent ='¡Haz click aquí!';
        this.addEventListener('click',()=> alert("Hiciste click! sos inteligente"));
    }
}
customElements.define('mi-boton', crearboton);

//-------------------------------------------------------------//
class crearbotonShadow extends HTMLElement{
    constructor(){
        super ();
        let mishadow =this.attachShadow({mode:'open'});
        mishadow.innerHTML=`
        <mi-boton></mi-boton>
        <button>Soy un boton lindo!</button>
        `
    }
}
customElements.define('boton-shadow', crearbotonShadow);


//Ejemplo del trabajo de hoy.
class ChildComponent extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
}
customElements.define('child-component', ChildComponent);