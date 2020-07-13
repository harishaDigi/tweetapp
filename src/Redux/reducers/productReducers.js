const initialState={
          count:0,
          products:[]
}
 const product = (state=initialState, action) =>{
console.log("entered in product reducer=======,.type",action);
         switch(action.type){
         case 'ADD_PRODUCT_TO_CART':
                 console.log("dshfjsdhfsdhfakfsjkl",action.data);
                 
                 return  Object.assign({},state,action.data)
          default:
                    return state;      
     }
}
export default product