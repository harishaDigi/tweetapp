export const addToCart = (action)=>{
    return{
               type:'ADD_PRODUCT_TO_CART',
               data:action
    }
}
export const addProductToCart = (product)=>{

    return async dispatch =>{
        let obj = {
            'count':product.count,
            'products':product.product
        }
        console.log("entered in addProductToCart",product);
          dispatch(addToCart(obj))
        }
}

