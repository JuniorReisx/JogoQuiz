

    let  minhaTag = document.getElementById("errou");
    errou.style.display = "none";
    
    let  acertou = document.getElementById("acertou");
    acertou.style.display = "none";
    
    
    
    let  volta = document.getElementById("volta");
    volta.style.display = "none";


    let proximo = document.getElementById("next");
        proximo.style.display = "none";

        let a = document.getElementById("a");
        let b = document.getElementById("b");
        let c = document.getElementById("c");
        let d = document.getElementById("d");


 document.getElementById("a").addEventListener("click", function(){
      
      acertou.style.display = "block"
      proximo.style.display = "block"
      a.style.backgroundColor = "green"
      b.style.backgroundColor = "red"
      c.style.backgroundColor = "red"
      d.style.backgroundColor = "red"
})

document.getElementById("b").addEventListener("click", function(){
      
   errou.style.display = "block"
    volta.style.display = "block"
    a.style.backgroundColor = "green"
    b.style.backgroundColor = "red"
    c.style.backgroundColor = "red"
    d.style.backgroundColor = "red"
})
document.getElementById("c").addEventListener("click", function(){
      
    errou.style.display = "block"
     volta.style.display = "block"
     a.style.backgroundColor = "green"
     b.style.backgroundColor = "red"
     c.style.backgroundColor = "red"
     d.style.backgroundColor = "red"
 })
 document.getElementById("d").addEventListener("click", function(){
      
    errou.style.display = "block"
     volta.style.display = "block"
     a.style.backgroundColor = "green"
     b.style.backgroundColor = "red"
     c.style.backgroundColor = "red"
     d.style.backgroundColor = "red"
 })

 function mudarDeTela() {
   
    window.location.href = "index2.html";
}

  function reiniciarPagina() {
          
            location.reload();
  }