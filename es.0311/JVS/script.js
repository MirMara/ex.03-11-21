/*renderizzare questi dati in una pagina HTML con Javascript, utilizzando un input di tipo checkbox per rappresentare il campo completed (vuoto se false, flaggato se true). */

/* 7 false 3 true*/

const q = (selector) => document.querySelector(selector); 

const render = (container, items) => {
    const elements = items.map((element) => {

     if (element.completed === true) {
         return `<li>
       
         <input type="checkbox" name="completed" class="completed" value="completed" checked>
         <label> ${element.title} </label>
         ${element.completed}
     </li>`
     }  else {
        return `<li>
       
        <input type="checkbox" name="completed" class="completed" value="completed">
        <label> ${element.title} </label>
        ${element.completed}
    </li>`
     }

    });

 const disappear = document.querySelector(".toPop");
 disappear.addEventListener("click", () => {
 elements.pop();

 const content = elements.join('');
  container.innerHTML = content;
 } )





const content = elements.join('');

  container.innerHTML = content;

}

  document.addEventListener('DOMContentLoaded', () => {
   /* const form = q('form');
    const input = q('form input');*/
    const list = document.querySelector('ul');

    render (list, data);
}); 