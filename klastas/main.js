var myul=document.querySelectorAll("ul li");
var myp=document.querySelectorAll(".mycontent p")

for(var i=0;i<myul.length;i++) {
    myul[i].addEventListener("click",function(){  
        if(this.classList.contains("list-group-item-success"))
    this.classList.replace("list-group-item-success","list-group-item-warning")
   else{
       this.classList.remove()
   }
       
    })
}

