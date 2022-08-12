class FoodDetail {

    getDetail(){

        return JSON.parse(localStorage.getItem("fooddetail")) ; 
    }
    setDetail(data){
        localStorage.setItem("fooddetail" , JSON.stringify(data))
    }
}