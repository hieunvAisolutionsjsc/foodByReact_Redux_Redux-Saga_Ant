class Food{


    constructor(){
        this.food = [];
    }
    setLocal(){
    const urlApi = "https://62cfa0e8486b6ce82658f3bd.mockapi.io/getFood/food";
    const getFood  = async (url)=>{
      const data = await fetch(url) ; 
      return data.json() ; 
}
       getFood(urlApi).then(re =>{
        
       localStorage.setItem("food" ,JSON.stringify(re));
}) ; 
    }
    getFood(){
        const data = localStorage.getItem("newfood") === null 
        ? JSON.parse(localStorage.getItem("food"))   
        : [...JSON.parse(localStorage.getItem("food"))  , ...JSON.parse(localStorage.getItem("newfood"))]
    
        return data ; 

    }
    setFood(item){
        const food = JSON.parse(localStorage.getItem("newfood")) ; 
        let  newData = []
        if(food === null){
            newData.push(item) ; 
        }else{
            newData = [...food , item]
        }
        localStorage.setItem("newfood" ,JSON.stringify(newData));
    }
    getFoodByKind(kind){
        const food = this.getFood() ; 
       const newFood = food.filter(item => item.contry === kind) ; 
       return newFood;
    }
    

}
export default Food