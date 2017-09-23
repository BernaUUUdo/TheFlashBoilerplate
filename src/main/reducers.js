import {combineReducers} from 'redux'

function provisorioReducer(state={ teste: 'boo'},action){
    return state
} 


let rootReducer = combineReducers({
    provisorioReducer
})


export default rootReducer;