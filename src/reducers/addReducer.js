const initialState = 0

export const addSumData = (state = initialState, action) =>{
    switch(action.type){
        case 'ADD_DATA':
            return state+1;

        case 'SUB_DATA':
            return state-1;  
        
        case 'ADD_DATA_BY_5':
            return state+5;  

        case 'RESET':
            return state = 0;         

        default:
            return state;     
    }

}
export default addSumData;