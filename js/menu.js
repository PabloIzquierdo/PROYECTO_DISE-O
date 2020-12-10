word = ["ES","Encontrar una tienda", "Ayuda","Newsletter","Seguimiento del pedido", "Mi cuenta", "Cesta"];

link = ["ES","ubica","hlp","email","info","cuenta","cesta"];

src = ["img/logo-españa.jpg", "img/logo-ubica.jpg","img/logo-hlp.jpg","img/logo-email.jpg","img/logo-info.jpg","img/logo-cuenta.jpg","img/logo-cesta.jpg"];

name = "header_log--link";

function dinamic_nav(){
    header = document.getElementsByClassName("header_log")[0];

    ul = document.createElement('ul');
    ul.classList.add("header_ul");

    for (var i = 0; i < word.length; i++) {
        li = document.createElement("li");
        li.classList.add(name);
        a = document.createElement("a");
        img = createElement("img");
        img.classList.add(name."-".link[i]);
        img.src = src[i];
        a.appendChild(img);
        a.innerText = word[i];
    }

    header.appendChild(ul)
}