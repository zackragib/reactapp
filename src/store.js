import { createStore, combineReducers, applyMiddleware } from 'redux'
import { addSumData } from './reducers/addReducer'
import { productListReducers } from './reducers/productReducers'
import { getStudentReducer, studentDetailReducer , studentUpdateReducer, studentCreateReducer, studentDeleteReducer} from './reducers/studentReducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


const reducer = combineReducers({
    addData: addSumData,
    productList: productListReducers,
    studentList: getStudentReducer,
    studentDetail: studentDetailReducer,
    studentUpdate: studentUpdateReducer,
    studentCreate: studentCreateReducer,
    studentDelete: studentDeleteReducer,

})
const middleware = [thunk]


const store = createStore(reducer,
     composeWithDevTools(applyMiddleware(...middleware)));

export default store   