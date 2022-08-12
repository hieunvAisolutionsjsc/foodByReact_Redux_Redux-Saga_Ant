class CartAPI{

    getCart(){
        return JSON.parse(localStorage.getItem("cart")) ; 
    }
    clearCart(){
        this.setAll([]);
    }
    setCart(cartItem){
        
        let cartList = this.getCart() === null ? [] :  this.getCart() ; 
        cartItem.quantities = 1 ; 
        cartList.push(cartItem) ; 
        localStorage.setItem("cart" , JSON.stringify(cartList)) 
    }
    setAll(arr){
        localStorage.setItem("cart" , JSON.stringify(arr)) 
    }
    remove(id){
        const list = this.getCart() ; 
        const newList = list.filter(element =>{
            return element.id !== id;
        })
        this.setAll(newList) ; 
       
    }
}
export default CartAPI