class Pay{

    getPay(){
        return JSON.parse(localStorage.getItem("pay")) ; 
    }
    setPay(payItem){
        let payList = this.getPay() === null ? [] :  this.getPay() ; 
        payItem.quantities = 1 ; 
        console.log(payItem)
        payList.push(payItem) ; 
        localStorage.setItem("pay" , JSON.stringify(payList)) 
    }
    setAll(arr){
        localStorage.setItem("pay" , JSON.stringify(arr)) 
    }
}
export default Pay