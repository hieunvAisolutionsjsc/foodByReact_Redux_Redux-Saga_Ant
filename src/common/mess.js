class Mess {

    setMess(mess){
        const renderCart =(mess)=>{
            document.getElementById("mess").innerHTML= ` <div class="container" >
    <div class="img">
        <img src="../img/anydo_104098.png" alt="">
    </div>
    <div class="p">${mess}</div>
  </div>`
        }
        renderCart(mess)
       
            document.getElementById("mess").classList.add("mess__active") ; 

    
        const time =  setInterval(()=>{
            document.getElementById("mess").classList.remove("mess__active") ; 
         } , 3000)
    }
}