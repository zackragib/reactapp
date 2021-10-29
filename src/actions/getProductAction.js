import Products from '../products'

export const productList = () => async(dispatch) =>{


    
    dispatch({
        type: 'GET_PRODUCTS',
        payload: Products
    })
}