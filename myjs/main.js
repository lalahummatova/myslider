var prev=document.querySelector(".slider .myicons .prev");
var next=document.querySelector(" .slider .myicons .next");
var active=document.querySelector(".slider .items .item.active");
 next.addEventListener("click",function(){
     if(active.nextElementSibling!==null) {
         active.nextElementSibling.classList.add("active");
     }
     else{
         active.lastElementChild.classList.add("active")
     }
     active.classList.remove("active");
 })

 prev.addEventListener("click",function(){
    if(active.nextElementSibling!==null) {
        active.nextElementSibling.classList.add("active");
    }
    else{
        active.lastElementChild.classList.add("active")
    }
    active.classList.remove("active");
})

