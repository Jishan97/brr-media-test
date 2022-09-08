import {
        GET_HOLIDAY_DATA
    } from './types'


export default (state,action)=>{
    switch(action.type){
        case GET_HOLIDAY_DATA:
            return{
                ...state,
                data:action.payload,
                loading:false
            }
       
            
        default:
            return state
    }
}