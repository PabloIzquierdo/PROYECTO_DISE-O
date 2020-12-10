//Script footer display block/none

let main_item = document.getElementsByClassName("item");
let sub_item = document.getElementsByClassName("sub_item");

function getAnimacionItem(){
    for(let i=0; i<main_item.length; i++){
        (function(x){
            main_item[x].addEventListener("click",function(){
                if(sub_item[x].style.display === "none"){
                    sub_item[x].style.display = "block";
                }else{
                    sub_item[x].style.display = "none";
                }
            })
        })(i);
    }
}

function getAnimacionOnMouse(){
   for(let i=0; i<main_item.length; i++){
       (function(x){
           main_item[x].addEventListener("mouseover",function(){
               main_item[x].style.color = "grey";
               main_item[x].style.fontSize = "1.3em";
               main_item[x].style.transitionDuration= "1s";
           })
       })(i)
   }
}

function getAnimacionMouseOver(){
    for(let i=0; i<main_item.length; i++){
        (function(x){
            main_item[x].addEventListener("mouseout",function(){
                main_item[x].style.color = "";
                main_item[x].style.fontSize = "";
            })
        })(i)
    }
}

getAnimacionItem();
getAnimacionOnMouse();
getAnimacionMouseOver();