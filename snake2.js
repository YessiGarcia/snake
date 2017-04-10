var cuadrito=document.getElementById("guy");
var contenedor=document.getElementById("container");
var cuadritoLeft =0;
var cuadritoTop=0;
    function anim(e){
      //alert(e.keyCode);
      if (e.keyCode == 39){
        cuadritoLeft+=2;
        cuadrito.style.left=cuadritoLeft + "px";
         if(cuadritoLeft>= 590){
         // guyLeft -=2;
          alert("perdiste");
        }
      }
      if(e.keyCode==37){
        cuadritoLeft -=2;
        cuadrito.style.left=cuadritoLeft + "px";
        if(cuadritoLeft<= 0){
          //guyLeft +=2;
          alert("perdiste");
        }
      }
      if(e.keyCode==38){
         cuadritoTop -= 2;
        cuadrito.style.top=cuadritoTop + "px";
         if(cuadritoTop<= 0){
         // guyLeft +=2;
          alert("perdiste");
        }
    }
     if(e.keyCode==40){
         cuadritoTop += 2;
        guy.style.top=cuadritoTop + "px";
         if(cuadritoTop>= 390){
        
          alert("perdiste");
        }
    }
    }
    
    document.onkeydown=anim;