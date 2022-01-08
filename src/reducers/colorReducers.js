export const colorListReducers =(state ={photos: []}, action) => {
    switch(action.type){
        case 'GET_COLOR_REQUEST':
            return{
                loading: true
            }
        
        
        
        case 'GET_COLOR_SUCCESS':
            return {
                
                loading: false,
                photos : action.payload
            }
        case 'GET_COLOR_FAIL':
            return{
                loading: false,
                error: action.payload
            }    
        default:
            return state        
    }

}