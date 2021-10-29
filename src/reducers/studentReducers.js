import {
    GET_STUDENT_REQUEST,
    GET_STUDENT_SUCCESS,
    GET_STUDENT_FAIL,

    STUDENT_DETAIL_REQUEST,
    STUDENT_DETAIL_SUCCESS,
    STUDENT_DETAIL_FAIL,

    STUDENT_UPDATE_REQUEST,
    STUDENT_UPDATE_SUCCESS,
    STUDENT_UPDATE_FAIL,
    STUDENT_UPDATE_RESET,

    STUDENT_CREATE_REQUEST,
    STUDENT_CREATE_SUCCESS,
    STUDENT_CREATE_FAIL,
    STUDENT_CREATE_RESET,

    STUDENT_DELETE_REQUEST,
    STUDENT_DELETE_SUCCESS,
    STUDENT_DELETE_FAIL,
    STUDENT_DELETE_RESET,
    
} from '../constants/studentConstants'

export const getStudentReducer =(state ={students : []}, action) => {
    switch(action.type){
        case GET_STUDENT_REQUEST:
            return{
                loading: true
            }
        
        case GET_STUDENT_SUCCESS:
            return{
                loading: false,
                students : action.payload
            }
        case GET_STUDENT_FAIL:
            return{
                loading: false,
                error: action.payload
            }    
        default:
            return state        
    }

}

export const studentDetailReducer =(state ={student : {}}, action) => {
    switch(action.type){
        case STUDENT_DETAIL_REQUEST:
            return{
                loading: true
            }
        
        case STUDENT_DETAIL_SUCCESS:
            return{
                loading: false,
                student : action.payload
            }
        case STUDENT_DETAIL_FAIL:
            return{
                loading: false,
                error: action.payload
            }    
        default:
            return state        
    }

}

export const studentUpdateReducer =(state ={student : {}}, action) => {
    switch(action.type){
        case STUDENT_UPDATE_REQUEST:
            return{
                loading: true
            }
        
        case STUDENT_UPDATE_SUCCESS:
            return{
                loading: false,
                student: action.payload,
                success: true
            }
        case STUDENT_UPDATE_FAIL:
            return{
                loading: false,
                error: action.payload
            }
        
        case STUDENT_UPDATE_RESET:
            return { student: {} }
        
        default:
            return state        
    }

}


export const studentCreateReducer =(state ={}, action) => {
    switch(action.type){
        case STUDENT_CREATE_REQUEST:
            return{
                loading: true
            }
        
        case STUDENT_CREATE_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                success: true
            }
        case STUDENT_CREATE_FAIL:
            return{
                loading: false,
                error: action.payload
            }
        
        case STUDENT_CREATE_RESET:
            return { }
        
        default:
            return state        
    }

}

export const studentDeleteReducer =(state ={}, action) => {
    switch(action.type){
        case STUDENT_DELETE_REQUEST:
            return{
                loading: true
            }
        
        case STUDENT_DELETE_SUCCESS:
            return{
                loading: false,
                success: true
            }
        
        case STUDENT_DELETE_RESET:
            return {}
        
        case STUDENT_DELETE_FAIL:
            return{
                loading: false,
                error: action.payload
            }
        
        
        default:
            return state        
    }

}